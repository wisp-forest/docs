---
title: Available API Events
project: accessories
---

# API Specific Events

## AccessoryChangeCallback

An event fired when a change for a given slot referenced has changed providing the current stack and the previous stack combined with the type of slot change either such being a `MUTATION` or `REPLACEMENT`.
`MUTATION` means that the stack was not unequipped but the NBT data was modified to the point that it has changed but is still the same item while `REPLACEMENT` indicates a setStack call has occurred on the inventory leading to such being an entirely different.

## AdjustAttributeModifierCallback

An event used to allow for the adjustment of the attributes provided either loaded thought the [DataComponent method](https://github.com/wisp-forest/accessories/blob/a549372f7b6ac9a367d1b49a821759528cadce24/common/src/main/java/io/wispforest/accessories/api/components/AccessoryItemAttributeModifiers.java#L45) or from the [`Accessory#getModifiers`](https://github.com/wisp-forest/accessories/blob/a549372f7b6ac9a367d1b49a821759528cadce24/common/src/main/java/io/wispforest/accessories/api/Accessory.java#L81)

## AllowEntityModificationCallback

An event used to allow or restrict access to modifying aspects of a given entity being targeted whether such be opening the screen, adjusting to accessories, or toggle the visibility of the rendering.

## CanEquipCallback

An event used to adjust if the given accessories can equipped or not.

## CanUnequipCallback

An event used to adjust if the given accessories can unequipped or not.

## ContainersChangeCallback

An event fired when slot changes to a given LivingEntity are about to be sync across all tracking entities (Players specifically) providing a map of changed containers with a boolean value indicating if such was a resizing change instead of a general change of a container field.

## OnDropCallback

An event used to adjust the drop rule for the given stack when such is being handled within the death of the given entity.

## OnDeathCallback

An event fired when an entity has been killed and the drops for the accessories has been calculated which is being prepared to drop allow for mods to adjust the dropped items or handle dropping themselves if desired.

# Implemented Events

Any event below can be implemented directly on an `Accessory` implementation or by registering to the given event object within the respected interface.

## AllowWalkingOnSnow

An event allowing the ability to adjust if the given entity should be able to walk on powdered snow

## EndermanMasked

An event allowing the control over if the given `EnderMan` sees the entity as using a mask item to conceal their eyeballs preventing them from being angered

## FortuneAdjustment

An allowing for the adjustment of the amount of fortune provided to the given entity when calculating such

## LootingAdjustment

An allowing for the adjustment of the amount of looting provided to the given entity when calculating such on the death of the attacked entity

## PiglinNeutralInducer

An event allowing the ability to adjust if the given entity should anger any piglins within range of them