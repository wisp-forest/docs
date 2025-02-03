---
title: Adjusting Accessory Equipablity
project: accessories
---

To control general equipability of items into slots it is required to make Slot Predicates. Accessories has three builtin predicates that can be used by both Modders and Datapackers alike with such being Item Tags, Data Component, and Attribute. 

Modders can add custom predicates programmatically to allow for more control over what can be equipped if needed for new slots or existing slots. For such you can register a custom predicate using the `SlotPredicateRegistry#register` method for your custom `SlotBasedPredicate`.

!!! warning "Altering Existing Predicates"
    It is best to not restrict what can be equipped within the **Default** Slots or others due to the possibility of other Modders or Datapackers accessories from being able to be equipped with the given slots. Adding new predicates that allow for new items to be equipped should attempt to return `Tristate.DEFAULT` value when possible.


=== "`accessories:tag`"
    By placing items within the slots corresponding Item [Tag](https://minecraft.wiki/w/Tag), you can allow for the given item to be equipped within the target slot. For example you if you want to add an item to the default `hat` slot, you need to make a Datapack and add the given item to the `accessories:hat` tag located within the folder structure like so: `data/accessories/tags/item/hat.json`

=== "`accessories:component`"
    By adding the `"accessories:slot_validation"` [Data Component](https://minecraft.wiki/w/Data_component_format) to a given ItemStack you can adjust what slots a given item is valid for by adjusting the components `"valid_slots"` and `"invalid_slots"` as instructed within the info about the given [component](../developer/itemstack_components.md#slot-validation)

=== "`accessories:attribute`"
    It is **recommend** to use `"accessories:component"` instead of this for better control but by adding attributes linked to specific slots you can control what a given accessory item can be equipped within. Such can either be done within `"accessories:attributes"` Data Component or programmatically with the `AccessoryAttributeBuilder`.