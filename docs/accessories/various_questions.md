---
title: Common Asked Questions
project: accessories
---

## General

#### Can I adjust where something is equipped to another slot?

Any item can be equipped within a given slot but it does not mean such item will function as it would if not specifically designed for such. Accessories API only attempts to add the ability to store and retrieve items and due to minecraft limitations it is not possible to just extend the current system and hook into such.

#### Is it possible to remove a slot altogether?

Such can be done but it is not recommend for Modders to take such drastic action unless really needing to do such since It may mess with other peoples mods ability to equip accessories. 

Datapackers should also be cautious for similar reasons but for Modpack developers its understandable if they desire to rebalanced their pack to either condense slots or balance the amount of slots but do note that **some developers will lock** their Accessories to specific slots either by looking only in those slots or controlling functionality to work only in the given slot

#### Does enchantments work with equipped accessories?

If the item is able to be enchanted with a given enchantment then it is possible for the such enchantment to work almost natively with the base equipment system found within Minecraft but some edge case may exists where the enchantment will not function properly if outside the scope of the API.

### Equipment

#### Can I put modded items within a Accessory slot?

In most cases the given mod needs to have implicit support for accessories before such item will work properly meaning that you will need to check with mod authors if you are unsure.

#### Can I put totems within a Accessory slot?

In the latest Releases for 1.21.2 and above, accessories has builtin support for totems but it is required that you enable such within the config to enable the feature. For developers their are some API for handling certain aspects of totem logic if needed for compatibility or custom behavior.

#### Can I put Gliders like Elytra within a Accessory slot?

In the latest Releases for 1.21.2 and above, accessories has builtin support for gliders but it is required that you enable such within the config to enable the feature. {WIP: MAYBE CUSTOM API IDK IF GOT AROUND TO SUCH}

#### Can I put Banners within a Accessory slot?

In the latest Releases for 1.21.2 and above, accessories has builtin support for banners and is enabled by default allowing you to equip them on your head!

### Support

#### Is there commands for adjusting the players slot amount?

Currently such is planned within the future with full documentation about the commands within Accessories.

#### Is there support for mods that adjust entity models and do cool animations?

There is a desire to have mods like [Figura](https://modrinth.com/mod/figura) be supported with custom models but such requires a good deal of effort to do properly and such is planned within the future.

Current support for [Entity Model Feature](https://modrinth.com/mod/entity-model-features) is provided by some compat code that seems to fix various issues found with other Accessories API like Trinkets or Curios.

### Compat Layers

#### I tried using the Trinkets/Curios Compat layer and its crashing, what do I do?

Make sure that both the compat layers and the Accessories version are up-to-date as the layers must be adjusted with the changes that may occur within Accessories. 

Other issues may be that a mod may be either using API that had not be implemented or accessing not public API provided by Trinkets and Curios that may not exists. 

It may be possible to implement missing API but in some cases it may be down the the mod itself adding direct support for Accessories.

#### How do I go around adjusting slot amounts for mods using Trinkets/Curios Compat layer

For mods adding slots though Curios API, its as easy as Accessories as all that is needed is either adjust such though the Datapack method for curios system or Accessories Config. 

Trinkets can be adjust either using the Datapack method or the Accessories config method but may require adjusted format with such looking something like this `trinket_group_{slot_group_name_here}-{slot_name_here}`.

This is due to Trinkets API using groups as logical paths meaning the name of the slot within Accessories requires the group be combined within the slot name to prevent issues.

## Developer

#### Differences between Accessories and other Accessory API's

Some notable differences compared to the likes of Trinkets and Curios:

##### Mod Development
- Fully Multiloader support for platforms like **Fabric** and **Neoforge**
- Fully programmatic method for creating unique slots
- Support for Nested Accessories within themselves

##### Gameplay
- Multiple different screen variants depending on the desired style of play
- Full support for Data Driven Accessories
- Expansive support for Model part targeting with support for EMF

##### Performance
- Implement caching to alleviate bottle necks with querying Accessory inventories

#### Reason behind using owolib in the development of Accessory

The main reason behind using owolib is down to useful API's it provides means that the development of Accessories is unhindered when it comes to UI, Serialization, Networking, and configuration. 

Such lib used to tits full extent besides minor core features. I decided to use such to keep development time down and allow for faster development of features instead of developing API that would be required to create a better experience. 
