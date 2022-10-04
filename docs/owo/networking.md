---
title: Networking
project: owo
---

:octicons-tag-24: {--0.4.0--} :material-arrow-right: {++0.7.0++} 

Networking can be quite the hassle to set up and maintain when using only the tools provided to you by Minecraft and Fabric API. owo, however, includes an easy-to-use networking stack which is quick to set up and even easier to maintain while still keeping high performance.

## Concepts
owo's networking API comprises of two core systems - the `OwoNetChannel`, which handles all networking, and the mostly self-contained `PacketBufSerializer`, which takes care of serializing objects into packet buffers. 

For safety reasons, using a channel in your mod will enable owo's handshaking procedure. This verifies that the channel layout on both server and client is identical, to prevent possible crashes or malformed data received, if one side is encoding differently than the other expects.

## Implementation

### Creating your channel

To get started creating your first channel, simply create a new instance of `OwoNetChannel` and store it in a constant field somewhere:

```java
...
// as long as you use your mod's id here, the path doesn't actually
// matter - it really could be anything
public static final OwoNetChannel MY_CHANNEL = OwoNetChannel.create(new Identifier("my_mod", "main"));
...
```

### Adding the first packet

Packets sent using `OwoNetChannel` are declared as records - they're plain data-carriers. A simple packet might look like this:

```java
public record MyPacket(int someData, String otherData, Identifier aMinecraftClass) {}
```

This now needs to be registered with your channel. To do this, you have two options:

 - #### Direct Registration

    This needs to happen during general mod initialization (that is, most of the time in the class which implements `ModInitializer`) and is generally useful for packets which are either serverbound or whose handles don't reference client-only things in a way that would break a server.

    To register a packet in this style, use either the `registerClientbound` or `registerServerbound` method on your channel. These methods are named after where the packet is sent to, e.g. `registerServerbound` is used for packets sent *from* the client *to* the server.

    ```java
    public class MyModInitializer implements ModInitializer {

        public static final OwoNetChannel MY_CHANNEL = OwoNetChannel.create(new Identifier("my_mod", "main"));

        @Override
        public void onInitialize() {
            MY_CHANNEL.registerServerbound(MyPacket.class, (message, access) -> {
                // server-safe handler code goes here
            });
        }
    }
    ```

    <br>

 - #### Deferred Registration

    Same as direct registration, this has to happen during mod initialization. It may however, happen during different stages. This is useful for clientbound packets whose handles cannot be safely classloaded on a server.

    To register a packet in deferred mode, call `registerClientboundDeferred` during general mod initialization and `registerClientbound` during client mod initialization.

    === "General Initializer"
        ```java
        public class MyModInitializer implements ModInitializer {

            public static final OwoNetChannel MY_CHANNEL = OwoNetChannel.create(new Identifier("my_mod", "main"));

            @Override
            public void onInitialize() {
                MY_CHANNEL.registerClientboundDeferred(MyPacket.class);
            }
        }
        ```

    === "Client Initializer"
        ```java
        public class MyClientModInitializer implements ClientModInitializer {
            @Override
            public void onInitializeClient() {
                MY_CHANNEL.registerClientbound(MyPacket.class, (message, access) -> {
                    // arbitrary handler code goes here
                });
            }
        }
        ```

Now there are two important observations to be made about this code we just wrote:

1. We did not write any serialization code, nor did we register any serializers. All primitives, a lot of Java utility classes and most if not all relevant Minecraft utility classes are supported out of the box

2. Because serialization is done for us, we do not need to manually schedule our processing on the client or server thread - this is handled by the channel directly

You might also wonder what the two parameters in the handler represent. It's quite straight forward: `message` is simply the deserialized packet (a `MyPacket` instance in the example) and `access` is short for `EnvironmentAccess` - it lets you grab the player which received the packet as well as the client or server in the form of the `runtime` property.

### Sending the first packet

In order to send a packet via an `OwoNetChannel`, you need what we call a `Handle`. This is an object bound to a certain target, with a `send` method which sends packets to that target. To bind and obtain a `Handle`, use either the `clientHandler()` or any of the `serverHandle(...)` methods. A handle is always named after where it is sending *from*, thus a `ServerHandle` sends *from* the server *to* the client and vice-versa.

!!! attention
    The server and client handles are re-used. Each channel stores exactly one handle of each kind and binds it every time you request it via any of the methods. This means you *cannot* store a handle for later usage - it is not in any way guaranteed to still be bound to the same target and could thus cause all kinds of weird and undefined behavior.

Once you obtained a handle, you can use it to send a packet:

=== "Server Example"
    ```java
    // to send to a certain player
    var player = <some server player>;
    MyModInitializer.MY_CHANNEL.serverHandle(player).send(new MyPacket(1, "this", new Identifier("is", "podge")));

    // to send to all players watching a block entity
    var blockEntity = <some block entity>;
    MyModInitializer.MY_CHANNEL.serverHandle(blockEntity).send(new MyPacket(1, "this", new Identifier("is", "podge")));
    ```

=== "Client Example"
    ```java
    MyModInitializer.MY_CHANNEL.clientHandle().send(new MyPacket(1, "this", new Identifier("is", "podge")));
    ```