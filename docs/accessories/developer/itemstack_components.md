---
title: ItemStack Data Components
project: accessories
---

## General

Below is the current set of available Data Components for ItemStacks that are supported with documentation about their function and format.

### Attribute Modifiers

Any ItemStack can have Attributes added onto it with the `accessories:attributes` Item Component. It is composed from a list of attribute entries similar to Minecraft's default implementation. Below is an example:

```JSON
{
    "accessories:attributes": {
        "modifiers": [
            {
                "type": "minecraft:attack_damage",
                "id": "example:increased_damage_boost",
                "amount": 1,
                "operation": "add_value",
                "slot_name": "hat",
                "is_stackable": false,
            }
        ]
    }
}
```

| <div style="width:118px">Field</div> | Usage |
|--|--|
|`"type"`| Refers to the attribute type that should be adjusted with the given modifier data. This can either be a slot attribute or a registered slot. |
|`"id"`| The unique resource location to identify this modifier |
|`"amount"`| The amount of change from the modifier |
|`"operation"`| The type of calculation operation that should be performed out of the valid values. |
|`"slot_name"`| Specify a slot to add a strict requirement to where the accessory must be equipped for the effect to apply. Use `"any"` to allow for the attribute to be applied to whatever slot the given item can be equipped into. |
|`"is_stackable"`| Allows for additional copies of the attribute to function together as a compounding effect |

!!! note "Stacking Attributes"
    If the given attribute entry is desired to be stacked with other equipped accessory it may be good to use `"is_stackable"` which indicates that the given `"id"` passed should be appended with slot information to allow.

### Slot Validation

Any ItemStack can define invalid or valid slots to which it can be equipped to using the `accessories:slot_validation` Item Component. Using it allows you to add to or override the equipability for an existing Accessory.

```JSON
{
    "accessories:slot_validation": {
        "valid_slot": [
            "hat"
        ]
        "invalid_slot": [
            "shoes"
        ]
    }
}
```

| <div style="width:118px">Field</div> | Usage |
|--|--|
|`"valid_slots"`| An array of string values of valid slots that the stack can be equipped into |
|`"invalid_slots"`| An array of string values of invalid slots that the stack **can not** be equipped into |

### Stack Size

To adjust the data-driven components ability to stack, you can use this component to either use the stacks max size or use a overridden size instead but such size needs to be less than the stack size or that will be used instead.

```JSON
{
    "accessories:stack_size": {
        "use_stack_size": false,
        "size_override": 69
    }
}
```

| <div style="width:118px">Field</div> | Usage |
|--|--|
|`"use_stack_size"`| Use the stack's given max size as the amount allowed to stack to within Accessories |
|`"size_override"`| The amount that the size should be overridden to instead of stack size |

### Accessory Nest

Accessories has a system that allows for nesting an Accessory within another Accessory. This can only be done explicitly with the API (code), or when creating a new ItemStack that has the `nested_accessories` Data Component. Example: 

```JSON
{
    "accessories:nested_accessories": {
        "accessories": [
            {
                "id": "minecraft:diamond",
                "count": 1,
                "components": {
                    "accessories:attributes": {
                        "modifiers": [
                            {
                                "type": "minecraft:attack_damage",
                                "id": "example:increased_damage_boost",
                                "amount": 1,
                                "operation": "add_value",
                                "slot_name": "any",
                                "is_stackable": false,
                            }
                        ]
                    }
                }
            }
            {
                "id": "minecraft:emerald",
                "count": 1,
                "components": {
                    "accessories:attributes": {
                        "modifiers": [
                            {
                                "type": "minecraft:attack_speed",
                                "id": "example:increased_damage_speed",
                                "amount": 1,
                                "operation": "add_value",
                                "slot_name": "any",
                                "is_stackable": false,
                            }
                        ]
                    }
                }
            }
        ]
    }
}
```

| <div style="width:118px">Field</div> | Usage |
|--|--|
|`"accessories"`| A list of `ItemStack`s that have various components and will be used to get Accessory info from when equipping the nest |

!!! warning "Nest Equitability"
    You will either need to add the Slot Validation component to the nest or add the given item that the nest is made from to the given tag for the slot using the Tag Predicate for equipping

## Rendering

This section covers the various components you can use to adjust certain rendering aspects of Accessories.

### Rendering Override

Any ItemStack can have a component called `accessories:render_override` that allows for an item either not have the default renderer or force an item to use the default renderer instead of its registered render for the funny if desired.

```JSON
{
    "accessories:render_override": {
        "default_render_override": false,
        "armor_render_override": true
    }
}
```

| <div style="width:118px">Field</div> | Usage |
|--|--|
|`"default_render_override"`| An optional boolean value indicating if present that the default render should be used |
|`"armor_render_override"`| An optional boolean value indicating if present that the armor render should be used |

### Rendering Transformations

For any Accessory that uses the default renderer: It is possible to use the `render_transformations` data component to adjust the positioning, rotation, and scale of the rendering. Some examples are wearing a block as a hat, or placing an item on your arm. 

```JSON
{
    "accessories:render_transformations": {
        "disable_default_translations": true,
        "transformations": [
            {
                "type": "translation",
                "value": [-25, 0, 5]
            },
            {
                "type": "axis_rotation",
                "value": {
                    "angle": 90,
                    "axis": [1, 0, 1],
                }
            }
        ]
    }
}
```

#### Transformations

=== "Translation"

    Translates the given rendering position based on the provided offset `Vector`.

    ```JSON
    {
        {
            "type": "translation",
            "value": [-25, 0, 5]
        }
    }
    ```

    The `"value"` should be a vector with the offset being in the `x`, `y`, and `z` format.

=== "Raw Rotation"

    Rotates the given rendering based on the given `Quarternion` provided.

    ```JSON
    {
        {
            "type": "raw_rotation",
            "value": [-0.323, 0.111, 0, 0.1232]
        }
    }
    ```

    The `"value"` should be a vector with the rotation being in the `x`, `y`, `z`, and `w` format.

=== "Axis Rotation"

    Rotates the given rendering based on `Angle` (In Degrees) and `Axis` vector to rotate around.

    ```JSON
    {
        {
            "type": "axis_rotation",
            "value": {
                "angle": 90,
                "axis": [1, 0, 1],
            }
        }
    }
    ```

    The `"value"` needs to be in the structured format with an `Angle` in **Degrees**, and an `Axis` vector in the `x`, `y`, and `z` format.

=== "Scale"

    Scales the size of the rendering based on the given scale `Vector`.

    ```JSON
    {
        {
            "type": "scale",
            "value": [-25, 0, 5]
        }
    }
    ```

    The `"value"` should be a vector with the offset being in the `x`, `y`, and `z` format.

=== "Transform To"

    Transforms the Rendering to the targeted `ModelPart` name based on the raw positioning `Vector` or specific `Side` of the part.

    ```JSON
    {
        {
            "type": "axis_rotation",
            "value": {
                "model_part": "head",
                "raw_normal": [1, 1, 1],
            }
        }
    }
    ```

    The `"value"` requires a `ModelPart` in string format and either the positioning (`"raw_normal"`) `Vector` as discussed within [Rendering API](./rendering_api.md#transformation-methods) or a specific `Side` (`"side"`) to translate the rendering to for the given part.

=== "Matrix"

    Applies a precomputed matrix to transform the renderer.

    ```JSON
    {
        {
            "type": "axis_rotation",
            "value": [
                0.99985, -0.01745, 0.00030, 1.00000,  
                0.01745, 0.99970, -0.01745, 1.00000, 
                -0.00000, 0.01745, 0.99985, 1.00000,
                0.00000, 0.00000, 0.00000, 1.00000
            ]
        }
    }
    ```

    The `"value"` is a list of 16 doubles, representing the values of a 4x4 grid `Matrix`.