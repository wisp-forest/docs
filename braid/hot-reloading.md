# Setting up Hot Reloading

One of braid's most important features is its capability to perform state-preserving hot reloads. Sadly, the design of the JVM and its debugging frameworks do not allow this to work completely out of the box and we need to do some setup.

## Setup

First, make sure you have standard Java hotswapping working correctly - if you're not familiar with this, check the [relevant section of the Fabric documentation](https://docs.fabricmc.net/develop/getting-started/intellij-idea/launching-the-game#hotswapping-classes).

Once you have this working, you can download the braid reload agent from [our Maven repository](https://maven.wispforest.io/#/releases/io/wispforest/braid-reload-agent). Navigate to the folder of the latest release, download the `.jar` file and save it somewhere convenient. Then, follow the instructions in the "Hotswapping Mixins" section of the above Fabric documentation page to add it to your run configuration, substituting the Mixin Jar with the braid reload agent Jar you just downloaded.

If you're already using the Mixin Java Agent, don't worry - you can have as many as you want.

## JetBrains Runtime
As is also mentioned in the Fabric docs, most standard JVMs are very limiting in the changes they'll let you make during a hotswap. In order to get the most out of braid's hot reload feature, we recommend that you also install the JetBrains Runtime and use it whenever you're developing with braid - or just in general, as it's extremely useful!

To install it, go to their [Releases section](https://github.com/JetBrains/JetBrainsRuntime/releases), choose the latest release for the Java version you need and download the appropriate zip for your operating system and machine. Finding the one you need can be somewhat tricky, so consult the internet or feel free to ask in our Discord if you need help. Finally, unzip it into `.jdks` folder in your user directory (IntelliJ will usually already have made this for you) and select it in your project settings. You might need to restart IntelliJ once before it finds it.

Finally, add the `-XX:+AllowEnhancedClassRedefinition` JVM flag in the same text field of your run config you added the `-javaagent` declaration to earlier.

## Verifying the Install
To be sure that the braid reload agent is working, launch your game and open any braid UI (if you don't have one yet, feel free of course to delay this step until you have one). You should then see a log message like the following:

```log
[Render thread/INFO] (braid reload agent) setup complete, debounce time is 250ms
```

This means the agent is working and ready to rebuild your UIs whenever you hot reload some widget code.