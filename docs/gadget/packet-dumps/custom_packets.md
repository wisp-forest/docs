---
title: Adding support for Custom Packets
project: gadget
---

While gadget has automatic support for almost all vanilla packets and some common mod packets, unknown custom payload packets are represented as their hex dumps, as gadget has no idea what that packet's structure is or how to display it. This page is meant to help you implement support for your packets so that you can easily view them in dumps.

!!! info
    If you use a library to add your network packets, then your packets might be already fully supported. Packets using [oωo networking](../../owo/networking.md) or [Fabric API packet-object networking](https://github.com/FabricMC/fabric/blob/1.20.1/fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/FabricPacket.java#L22-L61) are automatically displayed as the actual packet object.

## Making an entrypoint
An easy way to run some code only when gadget is installed are the `gadget:init` and `gadget:client_init` entrypoints. They are run right after gadget main/client init, and any errors are logged and swallowed to avoid crashes.

=== "fabric.mod.json"
    ```json
    {
        // ...
        "entrypoints": {
            "gadget:init": [
                "com.example.examplemod.ExampleGadgetEntrypoint"
            ]
        },
        // ...
    }
    ```

=== "ExampleGadgetEntrypoint.java"
    ```java
    package com.example.examplemod;

    import io.wispforest.gadget.GadgetEntrypoint;

    public class ExampleGadgetEntrypoint implements GadgetEntrypoint {
        @Override
        public void onGadgetInit() {
            // Register all your stuff here...
        }
    }
    ```

## `PacketUnwrapper.EVENT`
While most of the functions of the dump viewer are served by separate events, the most convenient way to implement support for custom packets is the `PacketUnwrapper` event, as all other events have handlers that just try unwrap the packet and then call the needed methods on it, which centralizes everything you need to do with the packet into one class.

```java
PacketUnwrapper.EVENT.register((packet, errSink) -> {
    if (!Objects.equals(packet.channelId(), BeepPacket.ID)) return null; // (1)

    PacketByteBuf buf = NetworkUtil.unwrapCustom(packet.packet());

    return new UnwrappedBeepPacket(BeepPacket.read(buf));
});
```

1. You might also want to check whether `packet.state()` is the correct network state for your packet.

Additionally, gadget provides some nice utility interfaces that implement most of these methods for you, which can make the packet implementation even simpler.

### `FieldsUnwrappedPacket`
This helper interface is mainly made for packets which are just wrappers around some arbitrary Java object, which should be shown as the values of all its fields. The only required method is `rawFieldsObject`, which should return the object that is supposed to be inspected.

```java
public record UnwrappedBeepPacket(BeepPacket packet) implements FieldsUnwrappedPacket {
    @Override
    public @Nullable Object rawFieldsObject() {
        return packet; // (1)
    }

    @Override
    public Text headText() {
        return null; // (2)
    }
}
```

1. If you don't have any other relevant data in the packet, you can just return `null` here to skip all field dumping.
2. Any text returned here will be shown before the fields of the provided object. The default implementation returns the class of the object, so we just return `null` here to bypass that.

![examplemod:beep packet in the dump viewer](../../assets/gadget/custom_packets_fields_example.png){ .docs-image }

### `LinesUnwrappedPacket`
This is a more general helper interface meant for packets which can be easily rendered as rich `Text`. While this is incredibly convenient for simple packets, more complex packets should just implement `UnwrappedPacket` themselves.

```java
public record UnwrappedBeepPacket(BeepPacket packet) implements LinesUnwrappedPacket {
    @Override
    public void render(Consumer<Text> out, ErrorSink errSink) {
        out.accept(Text.literal("beepVolume")
            .append(Text.literal(" = \"" + packet.beepVolume() + "\"")
                .formatted(Formatting.GRAY)));
    }
}
```

![examplemod:beep packet in the dump viewer](../../assets/gadget/custom_packets_lines_example.png){ .docs-image }


## Fully custom implementation
Although the unwrapped packet helper interfaces are convenient for a lot of cases, they sometimes don't cut it, especially for rather complex packets. Additionally, you might not even want to use the packet unwrapper event, as the separate events allow modifying other mods' packets without completely replacing them. The solution is to manually implement all event handlers/methods to fully customize how your packet looks.

!!! info
    The `ErrorSink` objects given to most events are meant to be a sink for all non-fatal errors that an event handler can encounter.
    You don't have to use one if you don't want to catch your exceptions - all event handlers are try/catched and errors are reported.

### owo-ui rendering
:octicons-package-16: `#!java UnwrappedPacket.render` <br>
:material-lightning-bolt: `#!java PacketRenderer.EVENT`

Arguably the most important feature a packet can have is an owo-ui renderer, as it determines how it will look in the dump viewer.
The renderer has almost complete freedom as to how the packet is rendered, as you can insert any owo-ui component into the provided `out` flow layout.

=== "UnwrappedPacket.render"
    ```java
    public record UnwrappedBeepPacket(BeepPacket packet) implements UnwrappedPacket {
        @Environment(EnvType.CLIENT) // (1)
        @Override
        public void render(FlowLayout out, ErrorSink errSink) {
            out.child(Components.label(Text.literal("beep!")));
        }
    }
    ```

    1. The `render` method should generally always be client-only to deter possible classloading issues if you reference a client-only class.

=== "PacketRenderer.EVENT"
    ```java
    PacketRenderer.EVENT.register((packet, out, errSink) -> {
        if (!Objects.equals(packet.channelId(), BeepPacket.ID)) return;

        out.child(Components.label(Text.literal("beep!")));
    });
    ```

### Search text gathering
:octicons-package-16: `#!java UnwrappedPacket.gatherSearchText` <br>
:material-lightning-bolt: `#!java SearchTextGatherer.EVENT`

The packet's search text determines whether it will be filtered by the search box - packets are only shown if all of the search words are included in the search text. The dump statistics screen also uses search text to group packets by type, so the search text should be kept clean and not have any extraneous data. That said, if you have some packet ID or other important packet type data, you should probably include it here.

=== "UnwrappedPacket.gatherSearchText"
    ```java
    public record UnwrappedBeepPacket(BeepPacket packet) implements UnwrappedPacket {
        @Override
        public void gatherSearchText(StringBuilder out, ErrorSink errSink) {
            out.append(" ").append(packet.beepVolume());
        }
    }
    ```
=== "SearchTextGatherer.EVENT"
    ```java
    SearchTextGatherer.EVENT.register((packet, out, errSink) -> {
        if (!Objects.equals(packet.channelId(), BeepPacket.ID)) return;

        PacketByteBuf buf = NetworkUtil.unwrapCustom(packet.packet());
        BeepPacket beep = BeepPacket.read(buf);

        out.append(" ").append(beep.beepVolume());
    });
    ```

### Plain text dumping
:octicons-package-16: `#!java UnwrappedPacket.dumpAsPlainText` <br>
:material-lightning-bolt: `#!java PlainTextPacketDumper.EVENT`

This handler is used whenever the user exports the packet dump as plain text. While the format of what you dump is ultimately up to you, the plain text dump uses indentation to represent trees of data and uses mostly ASCII characters.

=== "UnwrappedPacket.dumpAsPlainText"
    ```java
    public record UnwrappedBeepPacket(BeepPacket packet) implements UnwrappedPacket {
        @Override
        public void dumpAsPlainText(FormattedDumper out, int indent, ErrorSink errSink) {
            out.write(indent, "beep packet!");
            out.write(indent + 1, "volume = " + packet.beepVolume());
        }
    }
    ```
=== "PlainTextPacketDumper.EVENT"
    ```java
    PlainTextPacketDumper.EVENT.register((packet, out, indent, errSink) -> {
        if (!Objects.equals(packet.channelId(), BeepPacket.ID)) return;

        PacketByteBuf buf = NetworkUtil.unwrapCustom(packet.packet());
        BeepPacket beep = BeepPacket.read(buf);

        out.write(indent, "beep packet!");
        out.write(indent + 1, "volume = " + beep.beepVolume());
    });
    ```