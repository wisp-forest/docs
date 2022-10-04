---
title: Features
project: owo
---

### [Registration](registration.md)
:octicons-tag-24: 0.1.3

oωo offers a flexible system for automatically registering a class' fields into `Registry` instances. It is very quick to implement and usually eliminates a lot of boilerplate. At the same time though, it is extremely flexible and allows significant customization and complete control over how the fields are processed using the `FieldProcessingSuject` API tree.

### Networking
:octicons-tag-24: 0.4.0

oωo provides a fully-featured network serialization system. Built around `OwoNetChannel` and the `PacketBufSerializer` framework, packet data is automatically (de-)serialized and the corresponding handlers invoked without the need of keeping track of Identifiers or channel associations - everything is derived from the data class. Packet contents are defined
as Java `record`s, making it highly ergonomic. The serialization backend fully supports serializers for custom types and all channel-layout related data is synced between client and server making it so an incompatible server cannot be joined.

### [Item Groups](item-groups.md)
:octicons-tag-24: 0.2.0

The Item Group API allows you to create an Item Group with custom textures and sub-tabs in very few lines of code. It is still pretty open to customization and can make custom buttons for linking to your mod's project pages or even executing custom actions relevant to your mod.

### Particle Effects
:octicons-tag-24: 0.1.0

oωo provides two main systems for handling particles. Primarily there's a client-sided set of utility methods for displaying multiple particles in the world, including drawing lines and cubes, randomized velocity and other general utility. To then allow easily composing and triggering these methods from the server, the `ParticleSystem` API, built on top of oωo's networking stack, can be used.

### Debug/Dev Features
:octicons-tag-24: 0.3.0

When in a development environment, oωo's debug mode is automatically enabled which adds a host of features like commands for damaging/healing the player or dumping information about game objects, automatically disabled weather and daylight cycle and a few more.

### Moddata
:octicons-tag-24: 0.3.0

The `ModDataLoader` and related API are designed to allow loading JSON-formatted data from the `mod` directory of all present mods. This makes it very easy to utilize datapack-like files for data that needs to be available before a world is loaded. For the purposes of modpack customization, the files are loaded from `.minecraft/moddata` as a replacement for datapacks.

### Screen Utilities
:octicons-tag-24: 0.3.0

oωo contains a few very simple helpers to facilitate the creation of a simple `HandledScreen` and `ScreenHandler`, namely a type of slot that only allows certain items as well as methods for generating the player inventory slots required for almost all screens.

### NBT Handling
:octicons-tag-24: 0.7.0

The `NbtKey` class is a simple serialization wrapper that allows inserting and extracting data values from `NbtCompound` instances. It essentially wraps the `get(...)` and `put(...)` methods to eliminate magic strings and centralize serialization code.

### Tag Injection
:octicons-tag-24: 0.3.6

The `TagInjector` system allows you to inject entries into tags at runtime. There are numerous helper methods available for easily injecting blocks and items, but the barebones inject instructions are exposed as well to enable injection into Tags of arbitrary registries.

### Offline Data Access
:octicons-tag-24: 0.5.0

The `OfflineDataLookup` and `OfflineAdvancementLookup` interfaces enable easily querying and/or modifying the NBT and Advancement data of offline players. As everything in oωo, the API surface is non-verbose to use and usually does not require more than a single method call.
