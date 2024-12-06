---
title: ItemStack Data Components
project: accessories
---

## General

Below is the current set of available Data Components for ItemStacks that are supported with documentation about there function and format.

### Attribute Modifiers

Any ItemStack can have Attributes added onto such though the `accessories:attributes` item component with such being comprised of a list of attribute entries similar to Minecraft's default implementation. Below is an example of such:

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
|`"type"`| Refers to the attribute type to which should be adjusted with the given modifier data either registered or a slot attribute. |
|`"id"`| The unique resource location to identify this modifier |
|`"amount"`| The Amount of change from the modifier |
|`"operation"`| The type of calculation operation that should be performed out of the valid values. |
|`"slot_name"`| The slot to which must be equipped for the effect to apply or `"any"` if it's based on where it can and can't be equipped |
|`"is_stackable"`| Indicates that if the given `"id"` passed should be appended with slot information to allow for additional copies of the attribute to function together as a compounding effect |

### Slot Validation

Any ItemStack can define invalid or valid slots to which it can be equipped within the `accessories:slot_validation` item component allowing you to add the ability to equip such within a slot or override current equability for an existing accessory.

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
|`"valid_slots"`| A array of string values of valid slots that such stack can be equipped into when attempted |
|`"invalid_slots"`| A array of string values of invalid slots that such stack **can not** be equipped into when attempted |

### Stack Size

To adjust the Data driven components ability to stack, you can use this component to either use the stacks max size or use a overridden size instead but such size needs to be less than the stack size or such will be used instead.

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
|`"use_stack_size"`| Use the stacks given max size as the about allowed to stack to within Accessories |
|`"size_override"`| The amount that the size should be overridden to instead of stack size |

### Accessory Nest

Accessories has a system to allow for nesting an Accessory within another Accessory which can only be used within code or by creating a ItemStack with the given Nest component. 

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
    You will either need to add the Slot Validation component to the nest or add the given item the nest is made from to the given tag for the slot using the Tag Predicate for equipping

## Rendering

Below is the various components to adjust certain rendering aspects of Accessories.

### Rendering Override

Any ItemStack can have a component called `accessories:render_override` that allows for an item to have its render use the default variant if desired as it's funny... that's it

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
|`"default_render_override"`| A optional boolean value indicating if present that the default render should be used |
|`"armor_render_override"`| A optional boolean value indicating if present that the armor render should be used |

### Rendering Transformations

For any Accessory that use the Default renderer it is possible to use the provided Rendering Transforms component to adjust the positioning, rotation, and scale of the rendering to for instance wear a block as a hat or place a item on your arm. 

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

    The `"value"` would be a vector of the offset being in the `x`, `y`, and `z` format.

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

    The `"value"` would be a vector of the rotation being in the `x`, `y`, `z`, and `w` format.

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

    The `"value"` would be a structured format with a `Angle` (In **Degrees**) and an `Axis` vector in the `x`, `y`, and `z` format.

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

    The `"value"` would be a vector of the offset being in the `x`, `y`, and `z` format.

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

    The `"value"` will require a `ModelPart` in string format and either the positioning (`"raw_normal"`) `Vector` as discussed within Rendering API {TODO: WIP ADD LINK TO SUCH WITHIN DOCS} or a specific `Side` (`"side"`) to translate the rendering to for the given part.

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

    The `"value"` will be a list 16 long representing a 4x4 grid of values making the `Matrix`.