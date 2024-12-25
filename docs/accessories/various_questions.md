---
title: Common Asked Questions
project: accessories
---

## General

#### Can I change what slot something is equipped to?

In theory you can do this, as you are able to modify an Accessory to be equippable in any slot. Due to limitations on both Minecrafts internal slot system, and Accessories API, there is no guarantee that an Accessory will *function* if you do so.

#### Is it possible to remove a slot altogether?

Yes, although it is not recommended for either modders or datapackers to take such drastic action, since it can really mess with mods progression or functionality.

It is understandable from a modpacking perspective that you would want to do this (condensing slots, rebalancing the pack, etc.). Do note that some developers might **lock their Accessories to their own slots**, meaning that restricting/removing these could fully break those items (and by extension mods). 

#### Do enchantments work with equipped Accessories?

If the item is able to be enchanted with a given enchantment then it is possible for the such enchantment to work almost natively with the base equipment system found within Minecraft but some edge case may exists where the enchantment will not function properly if outside the scope of the API.

### Equipment

#### Can I put modded items within an Accessory slot?

In most cases the given mod needs to have implicit support for Accessories before the Item will function properly. We suggest that you check with mod authors if you are unsure.

#### Can I put Totems within an Accessory slot?

In the latest Releases for 1.21.2 and above, Accessories has builtin support for Totems. By default this is disabled, but you can enable the feature in the config. For developers, there exists some API for handling certain aspects of Totem logic if needed for compatibility or custom behavior.

#### Can I put Gliders like Elytra within an Accessory slot?

In the latest Releases for 1.21.2 and above, Accessories has builtin support for Gliders. It is disabled by default, but you can enable the feature in the config.

#### Can I put Banners in an Accessory slot?

In the latest releases for 1.21.2 and above, Accessories has builtin support for Banners, which is enabled by default. It allows you to equip them on your head!

### Support

#### Is there commands for adjusting the players slot amount?

No. This is planned for the future, with full documentation about the commands within Accessories.

#### Is there support for mods that adjust entity models and do cool animations?

There is a desire to have mods like [Figura](https://modrinth.com/mod/figura) be supported with custom models but this requires a good deal of effort to do properly. This is planned for the future.

Currently support for [Entity Model Feature](https://modrinth.com/mod/entity-model-features) is provided by some compat code, which has fixed various issues found with other Accessories APIs like Trinkets or Curios.

### Compat Layers

#### I tried using the Trinkets/Curios Compat layer and its crashing, what do I do?

Make sure that both the compat layers and the Accessories version are up-to-date. This is important as the layers need to be updated frequently to adjust for any changes that may occur within Accessories. 

Other issues may be that a mod may be using API that isn't implemented, or accessing non-public API provided by Trinkets and Curios. 

It may be possible to implement/support missing API, but in some cases it might be easier if the mod itself adds direct support for Accessories.

#### How do I go around adjusting slot amounts for mods using Trinkets/Curios Compat layer

For mods adding slots though Curios API it is easy. All you need to do is to adjust it through the Curious datapack method, or via the Accessories config. 

Trinkets can be adjust either using a datapack or through the Accessories config. You might require to adjust the format of the slot identifier to something like `trinket_group_{slot_group_name_here}-{slot_name_here}` in order for it to work properly.

This is due to Trinkets API using groups as logical paths, meaning the name of the slot within Accessories requires the group name to be combined with the slot name to prevent issues.

## Developer

#### Differences between Accessories and other Accessory API's

Some notable differences compared to the likes of Trinkets and Curios:

##### Mod Development
- Full Multiloader support for both major platforms (**Fabric** and **Neoforge**)
- Fully programmatic method for creating unique slots
- Support for Nested Accessories (Accessories within Accessories)
- Expansive support for ModelPart targeting, with support for EMF

##### Gameplay
- Multiple different screen variants depending on the desired style of play
- Full support for Data Driven Accessories
- Supports Cosmetic Armor/Accessories out-of-the-box
- Additional toggleable features for equipping Banners as Accessories (on your head!)
- Additional toggleable features for equipping Totems or Gliders as Accessories

##### Performance
- Implement caching to alleviate bottle necks with querying Accessory inventories

#### Reason behind using owo-lib in the development of Accessory

The main reason behind using owo-lib is down to its useful API's that leads to the development of Accessories being unhindered when it comes to UI, serialization, networking, and configuration. 

The library is used to its full extent, apart from some minor core features. I decided to use it to keep development time down and allow for quicker implementation of features instead of developing and maintaining all that API from scratch. All of this is done to create a better experience for players. 
