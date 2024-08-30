---
title: Defining Extensions
project: limelight
summary: Defining and registering a Limelight extension.
---

A `LimelightExtension` is the basic building block of extending Limelight functionality. Limelight has several built-in extensions, but if you're adding Limelight compatibility or making a Limelight addon mod, you probably want to make your own extension.

Extensions can be individually disabled by the user, so if your addon is adding many unrelated sets of functionality, it is advised to make them separate extensions.

You can define and register an extension like so:

=== "MyFunExtension.java"
    ```java
    public class MyFunExtension implements LimelightExtension {
        public static final Identifier ID = Identifier.of("example-extension", "my_fun_extension");
        public static final MyFunExtension INSTANCE = new MyFunExtension();

        @Override
        public Identifier id() {
            return ID;
        }
    }
    ```

=== "ExampleLimelightCompat.java"
    ```java
    public class ExampleLimelightCompat implements LimelightEntrypoint {
        @Override
        public void registerExtensions(Consumer<LimelightExtension> extensionRegistry) {
            extensionRegistry.accept(MyFunExtension.INSTANCE);
        }
    }
    ```

You also need[^1] to provide a translatable title for the extension (and optionally a description):

```json title="en_us.json"
{
    "limelightExtension.example-extension.my_fun_extension": "My Fun Extension",
    "limelightExtension.example-extension.my_fun_extension.desc": "Does very fun stuff!"
}
```

This results in this Limelight config screen entry:
![a config entry for My Fun Extension](../../assets/limelight/my_fun_extension_entry.png){ .docs-image }


[^1]: You can also override the `LimelightExtension#name` and `LimelightExtension#description` methods.