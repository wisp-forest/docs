---
title: Available API Events
project: accessories
---

### [AccessoryChangeCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/AccessoryChangeCallback.java#L15)

An event which fires when a change for a slot occurs. The event provides the current stack, and the previous stack combined with the type of slot change which occurred. That change can either be `MUTATION` or `REPLACEMENT`.

- `MUTATION` means that the stack was not unequipped but the NBT data was modified. Usually it is still the same item. 
- `REPLACEMENT` indicates a `setStack()` call has occurred on the inventory, leading to the stack being entirely different (usually or always?).

### [AdjustAttributeModifierCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/AdjustAttributeModifierCallback.java#L16)

An event used to adjust the attributes of the accessory stack. This is collected from the [DataComponent method](https://github.com/wisp-forest/accessories/blob/a549372f7b6ac9a367d1b49a821759528cadce24/common/src/main/java/io/wispforest/accessories/api/components/AccessoryItemAttributeModifiers.java#L45) or from the [`Accessory#getModifiers`](https://github.com/wisp-forest/accessories/blob/a549372f7b6ac9a367d1b49a821759528cadce24/common/src/main/java/io/wispforest/accessories/api/Accessory.java#L81) call.

### [AllowEntityModificationCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/AllowEntityModificationCallback.java#L22)

An event used for allowing or restricting access for an entity to modify various aspects of Accessories. Some examples include opening the screen, adjusting accessories, or toggling the visibility of the rendering.

### [CanEquipCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/CanEquipCallback.java#L21)

An event used to adjust if the accessory is equippable based on the `ItemStack` and `SlotReference`

### [CanUnequipCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/CanUnequipCallback.java#L15)

An event used to adjust if the accessory can be unequipped based on the `ItemStack` and `SlotReference`

### [ContainersChangeCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/ContainersChangeCallback.java#L17C18-L17C43)

An event fired when a change occurs for the [AccessoryContainer](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/AccessoriesContainer.java#L13). This happens before the changes are synced. It provides a map of changed containers (`AccessoriesContainer`s) to whether the change was related to resizing (boolean).

### [OnDropCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/OnDropCallback.java#L19)

An event used to adjust the drop rule for the stack when such is being handled after the of the target entity found within [`AccessoriesEventHandler#onDeath`](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/impl/AccessoriesEventHandler.java#L564).

### [OnDeathCallback](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/OnDeathCallback.java#L18)

An event fired after an entity dies, and after all `OnDropCallback` have been calculated. This can be used to cancel default dropping behavior, or adjust stack data before dropping the items.

## Implemented Events

Any event below can be implemented directly on an `Accessory` implementation or by registering to the event object within the respective interface.

### [AllowWalkingOnSnow](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/extra/AllowWalkingOnSnow.java#L20)

An event allowing the ability to adjust if the entity should be able to walk on powdered snow.

### [IsGazeDisguised]() {WIP: TODO ADD LINK}

An event allowing for the control over if the given looking `LivingEntity` sees the wearer entity as disguised preventing certain actions like being angered or allowing the creature to move.

### [FortuneAdjustment](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/extra/FortuneAdjustment.java#L18)

An event allowing for the adjustment of the level of fortune provided to the entity when calculating for such.

### [LootingAdjustment](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/extra/LootingAdjustment.java#L17)

An event allowing for the adjustment of the level of looting provided to the entity when calculating for on the death of an attacked entity.

### [PiglinNeutralInducer](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/extra/PiglinNeutralInducer.java#L19)

An event allowing for adjusting if the entity should anger any piglins within range of them.

## **Deprecated** 

### [EndermanMasked](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/events/extra/EndermanMasked.java#L20)

Recommend switching to `IsGazeDisguised` event instead and specifically checking for Enderman as the looker entity.