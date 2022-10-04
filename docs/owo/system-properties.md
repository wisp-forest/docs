---
title: System Properties
project: owo
---

oωo exposes a number of [Java System Properties](https://stackoverflow.com/a/7054981) which allow enabling/disabling some runtime features of the library. This page outlines which properties there are and what they do

### Properties

#### :material-toggle-switch-outline: `-Dowo.handshake.disable <true|false>`

Completely disables oωo's handshaking procedure, thereby allowing you to join servers which would otherwise be wrongly detected as incompatible. If the handshaking channel can still be opened, like if you don't have a proxy or are using the [oωo velocity plugin](https://github.com/BasiqueEvangelist/OwoVelocityPlugin), the server's setting is authoritative and even a client with handshake enabled will still be able to join. If the channel is unavailable for any reason, both the client *and* server need to have this flag set to `true` in order to connect successfully.

***

#### :material-toggle-switch-outline: `-Dowo.debug <true|false>`

Enables oωo's debug mode. In this mode, oωo itself registers a number of additional commands helpful for debugging purposes and tweaks the game's behavior in some other ways to ease development. This state of this flag is part of the API surface as well, so expect other mods that use oωo to toggle their own debug features based on it.

***

#### :material-toggle-switch-outline: `-Dowo.forceDisableDebug <true|false>`

Only available in development environments. Because debug mode is enabled by default in those, you can use this flag to toggle it off in case you need to test something without debug features enabled.

***

#### :material-toggle-switch-outline: `-Dowo.sentinel.forceHeadless <true|false>`

Forces oωo-sentinel to always use its command-line-based mode instead of opening a window, even if a graphical desktop environment is detected