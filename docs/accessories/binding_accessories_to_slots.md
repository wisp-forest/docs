---
title: Adjusting Slot Equability for an Accessory
project: accessories
---

Each Slot type has a predicate field that allows for the control of what can be equipped within an accessory slot allowing for either a custom programmatic method or data driven method using the included predicates. The base implemented slots provided by Accessories include the `accessories:tag` and `accessories:component` validators by default.

## Item Tag

If a given Slot type has the `accessories:tag` predicate as one of the slot validators then you can put a given item within the tag for the given slot or within the `accessories:all` if such can be equipped within any slot. An example for the `"hat"` slot would be the item tag `accessories:hat`.

## Slot Validation Component

If a given Slot type has the `accessories:component` predicate, such will attempt to use the `accessories:slot_validation` Item Component which can control the `valid` and `invalid` slots that the given ItemStack can be equipped within. More information pertaining `accessories:slot_validation` Item Component can be found within the [ItemStack Data Components](./itemstack_components.md) page of the wiki.

## Attribute Relative

This validator takes into account the attributes from the accessory either though the main method on the `Accessory` implementation or `accessories:attributes` Item Component and looks at what slots the attributes are valid for which are then used as what valid slots such can be equipped into.

## Custom Method

If the built-in validators do not work for your use case, you can register a custom predicate though the `AccessoriesAPI#SlotBasedPredicate` where you can register a custom implementation of `SlotBasedPredicate`.