# FAQ

## I get disconnected due to a "[oωo] handshake failure - incompatible server" when trying to join a server

- **The server is running a proxy:** If the server is using a proxy which is not Velocity, there is nothing you can do. If the server is running Velocity, install the [oωo velocity plugin](https://github.com/BasiqueEvangelist/OwoVelocityPlugin) on the proxy.

- **The server is not using a proxy:** This means that the installed mods on the server and your game are not matching up. Try making sure that all the mod versions are the same and they are being properly loaded

If neither of these approaches fix your problem, [open an issue](https://github.com/wisp-forest/owo-lib/issues/new/choose)

***

## My game crashes due to a `Non [a-z0-9/._-] character in path of location`
Upgrade oωo to any version newer than :octicons-tag-24: 0.6.0+1.18

***

## My Conjurer does not spawn anything
:octicons-file-submodule-24: Conjuring

Check that the spawn conditions are right - for example most animals require grass, most monsters require darkness and so on. If you're sure these are correct, verify that mobs are even allowed to spawn in the first place - the *Big Torch* from *Kibe* is a common problem, as it blocks the Conjurer and all other spawners in addition to natural mob spawning.

***

## Why can the Shop not buy Items
:octicons-file-submodule-24: Numismatic Overhaul

The Shop cannot buy items for a single reason - it would almost certainly not be very useful because it's highly impractical. Imagine this: You, the buyer, need some amount of a specific item. Thus, you put a shop which buys that item for some amount of money. You now have to wait for someone to randomly discover that you want this item and you need that someone to actually have said item on hand. This means your deals will very rarely actually go through. Instead, you could've just asked in chat or through some other means and gotten your items faster and more conveniently by simply trading in person.

***

## How do I reset my area selection 
:octicons-file-submodule-24: Isometric Renders

Sneak while pressing the select hotkey

***

## I can't see Chests/Shulker Boxes/Bells/... in my area renders
:octicons-file-submodule-24: Isometric Renders

Upgrade Isometric Renders to any version newer than :octicons-tag-24: [0.3.0](https://modrinth.com/mod/isometric-renders/version/0.3.0%2B1.19)
