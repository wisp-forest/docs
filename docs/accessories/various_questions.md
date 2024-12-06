---
title: Common Asked Questions
project: accessories
---

## General

- **Can I adjust where something is equipped to another slot?**

Any item can be equipped within a given slot but it dose not mean such item will function as it would if not specifically designed for such. Accessories API only attempts to add the ability to store and retrieve items and due to minecraft limitations it is not possible to just extend the current system and hook into such.

- **Is it possible to remove a slot altogether?**

Such can be done but it is not recommend for modders to take such drastic action unless really needing to do such since It may mess with other peoples mods ability to equip accessories. Datapackers should alos be cautious for similar reasons but for Modpack Developers its understandable if they desire to rebalanced there pack to either condense slots or balance the amount of slots but do note that **some developers will lock** there Accessories to specific slots either by looking only in those slots or controlling functionality to work only in the given slot

- **Dose enchantments work with equipped accessories?**

If the item is able to be enchanted with a given enchantment then it is possible for the such enchantment to work almost natively with the base equipment system found within Minecraft but some edge case may exists where the enchantment will not function properly if outside the scope of the API.

### Equipment

- **Can I put modded items within a Accessory slot?**

In most cases the given mod needs to have implicit support for accessories before such item will work properly meaning that you will need to check with mod authors if you are unsure.

- **Can I put totems within a Accessory slot?**

In the latest Releases for 1.21.2 and above, accessories has builtin support for totems but it is required that you enable such within the config to enable the feature. For developers there are some API for handling certain aspects of totem logic if needed for compatibility or custom behavior.

- **Can I put Gliders like Elytra within a Accessory slot?**

In the latest Releases for 1.21.2 and above, accessories has builtin support for gliders but it is required that you enable such within the config to enable the feature. {WIP: MAYBE CUSTOM API IDK IF GOT AROUND TO SUCH}

- **Can I put Banners within a Accessory slot?**

In the latest Releases for 1.21.2 and above, accessories has builtin support for banners and is enabled by default allowing you to equip them on your head!

### Support

- **Is there commands for adjusting the players slot amount?**
- **Is there support for mods that adjust entity models and do cool animations?**

### Compat Layers

- **I tried using the Trinkets/Curios Compat layer and its crashing, what do I do?**
- **How do I go around adjusting slot amounts for mods using Trinkets/Curios Compat layer**
- **I can't adjust a slot that is using the TCLayer, whats the problem?**

## Developer

- **Differences between Accessories and other Accessory API's**
- **Reason behind using owolib in the development of Accessory**
