---
title: Annotations
project: owo
---

Most of owo-config's features are enabled via annotations. The ones which aren't covered in other articles already are outlined on this page.

***

### `@Expanded`

This annotation applies to fields which are either a nested object or some sort of `List<T>` and makes them start expanded in the config screen.

***

### `@Hook`

This annotation applies to any field and declares that a callback registrar[^1] should be generated. Refer to this handy example:

=== "Config Model"
    ```java
    @Config(name = "my-config", wrapperName = "MyConfig")
    public class MyConfigModel {

        public int withoutHook = 0;

        @Hook
        public int withHook = 1;
    }
    ```

=== "Generated Wrapper"
    ```java
    public class MyConfig extends ConfigWrapper<MyConfigModel> {
        ...

        public int withoutHook() {...}
        public void withoutHook(int value) {...}

        public int withHook() {...}
        public void withHook(int value) {...}
        public subscribeToWithHook(Consumer<Integer> subscriber) {...}
    }
    ```

***

### `@ExcludeFromScreen`

This annotation applies to any field and simply hides it from the config screen - this is useful if the option is either internal or has no support in the config screen and you want to suppress the warning.

***

### `@RestartRequired`

This annotation applies to any field and declares that the option it represents only actually applies after a restart of the game. The config screen indicates this and the player is explicitly notified when they close the screen.

The annotation also has a secondary effect when combined with `@Sync(Option.SyncMode.OVERRIDE_CLIENT)`. Because an option which only applies after restart cannot be dynamically overridden by the server, owo-config will not allow players to connect if their client's value does not match the server.

![config mismatch example](https://cdn.discordapp.com/attachments/857970721166065674/1006889351164215326/sync-error.png)

[^1]: Yes, this is a word
