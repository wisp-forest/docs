---
title: Available API Events
project: accessories
---

### [AccessoryChangeCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/AccessoryChangeCallback.java#L15)

An event fired when a change for a given slot referenced has occurred to which the event provides the current stack and the previous stack combined with the type of slot change has occurred. 

The change can either `MUTATION` which means that the stack was not unequipped but the NBT data was modified to the point that it has changed but is still the same item while `REPLACEMENT` indicates a `setStack` call has occurred on the inventory leading to such being an entirely different stack.

### [AdjustAttributeModifierCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/AdjustAttributeModifierCallback.java#L16)

An event used to adjust the given stacks attributes collected from the [DataComponent method](https://github.com/wisp-forest/accessories/blob/a549372f7b6ac9a367d1b49a821759528cadce24/common/src/main/java/io/wispforest/accessories/api/components/AccessoryItemAttributeModifiers.java#L45) or from the [`Accessory#getModifiers`](https://github.com/wisp-forest/accessories/blob/a549372f7b6ac9a367d1b49a821759528cadce24/common/src/main/java/io/wispforest/accessories/api/Accessory.java#L81) call.

### [AllowEntityModificationCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/AllowEntityModificationCallback.java#L22)

An event used to allow or restrict access to modifying aspects of a given entity being targeted whether such be opening the screen, adjusting to accessories, or toggle the visibility of the rendering of said accessories.

### [CanEquipCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/CanEquipCallback.java#L21)

An event used to adjust if the given accessories can be equipped or not based on the given `ItemStack` and `SlotReference`

### [CanUnequipCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/CanUnequipCallback.java#L15)

An event used to adjust if the given accessories can unequipped or not based on the given `ItemStack` and `SlotReference`

### [ContainersChangeCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/ContainersChangeCallback.java#L17C18-L17C43)

An event fired when container changes for a LivingEntity are about to be synced across all tracking entities (Players specifically) providing a map of changed containers with such map representing key value pair the specific `AccessoriesContainer` that has had a change occur and if such change was a resizing based or not.

### [OnDropCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/OnDropCallback.java#L19)

An event used to adjust the drop rule for the given stack when such is being handled after the of the target entity found within [`AccessoriesEventHandler#onDeath`](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/impl/AccessoriesEventHandler.java#L564).

### [OnDeathCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/OnDeathCallback.java#L18)

An event fired after the calculations for the entity's to be dropped accessories have been finalized allowing for mods to cancel default dropping or adjust stack data if desired before dropping.

## Implemented Events

Any event below can be implemented directly on an `Accessory` implementation or by registering to the given event object within the respected interface.

### [AllowWalkingOnSnow](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/extra/AllowWalkingOnSnow.java#L20)

An event allowing the ability to adjust if the given entity should be able to walk on powdered snow.

### [EndermanMasked](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/extra/EndermanMasked.java#L20)

An event allowing for the control over if the given `EnderMan` entity sees the wearer entity as using a mask item to conceal their eyeballs preventing them from being angered.

### [FortuneAdjustment](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/extra/FortuneAdjustment.java#L18)

An event allowing for the adjustment of the amount of fortune provided to the given entity when calculating for such.

### [LootingAdjustment](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/extra/LootingAdjustment.java#L17)

An event allowing for the adjustment of the amount of looting provided to the given entity when calculating for on the death of an attacked entity.

### [PiglinNeutralInducer](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/extra/PiglinNeutralInducer.java#L19)

An event allowing the ability to adjust if the given entity should anger any piglins within range of them.