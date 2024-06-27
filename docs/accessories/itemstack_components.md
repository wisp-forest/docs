---
title: ItemStack Data Components
project: accessories
---

Below is the current set of available Data Components for ItemStacks that are supported with documentation about there function and format to use such

## Attribute Format

Any ItemStack can have Attributes added onto such thought the `accessories:attributes` item component with such being comprised of a list of attribute entries similar to Minecraft's default implementation. Below is an example of such:

```nbt
{
    "modifiers": [
        {
            "type": "minecraft:generic.attack_damage",
            "id": "example:increased_damage_boost",
            "amount": 1,
            "operation": "add_value",
            "slot_name": "hat",
            "is_stackable": false,
        }
        //...
    ]
}
```

| <div style="width:118px">Field</div> | Usage | Examples |
|--|--|--|
|`"type"`| Refers to the attribute type to which should be adjusted with the given modifier data either registered or a slot attribute. | `"minecraft:generic.attack_damage"`, or `"accessories:hat"` |
|`"id"`| The unique resource location to identify this modifier | `"example:damage_boost"` |
|`"amount"`| The Amount of change from the modifier | `10` |
|`"operation"`| The type of calculation operation that should be performed out of the valid values. | `"add_value"`, `"add_multiplied_base"`, `"add_multiplied_total"` |
|`"slot_name"`| The slot to which must be equipped for the effect to apply or `"any"` if it's based on where it can and can't be equipped | `"any"`, `"hat"`, `"face"` |
|`"is_stackable"`| Indicates that if the given `"id"` passed should be appended with slot information to allow for additional copies of the attribute to function together as a compounding effect | `false` |

## Slot Validation

Any ItemStack can within its `accessories:slot_validation` item component can be adjusted to be prevented being equipped within a slot or be adjusted to be equipped into another slot if wanted.

| <div style="width:118px">Field</div> | Usage | Examples |
|--|--|--|
|`"valid_slot_overrides"`| A array of string values of valid slots that such stack can be equipped into when attempted | `"hat"`, `"ring"` |
|`"invalid_slot_overrides"`| A array of string values of invalid slots that such stack **can not** be equipped into when attempted | `"back"`, `"shoes"` |

## Slot Validation

Any ItemStack can have a component called `accessories:render_override` that allows for an item to have its render use the default variant if desired as its funny

| <div style="width:118px">Field</div> | Usage | Examples |
|--|--|--|
|`"default_render_override"`| A optional boolean value indicating if present that the default render should or should not be used | `true` |


**{WIP} TODO! {WIP}**