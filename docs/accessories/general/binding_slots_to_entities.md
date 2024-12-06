---
title: Binding Slots to Entities
project: accessories
---

It is required that each Slot created needs to be implicitly bound to the desired entity type. By default, the given implemented slots are bound to any entity type found within the `accessories:defaulted_targets` **EntityType** tag which currently includes the `Player` and `ArmorStand` type. 

## Data Pack Format

To bind a slot to a given **EntityType**('s) you will need to create a `.json` file at the following location: `data/{replace_with_pack_namespace}/accessories/entity/`. This file will need to contain to required fields: `entities` and `slots`.

| <div style="width:102px">Field Keys</div> | Data Type | Description |
|--|--|--|
| `"entities"` | String[] | A list containing either specific locations of entity types or an entity type tag prefix with a hashtag |
| `"slots"` | String[] | An list of all slot names to be available to the given entities targeted |

The example below is what Accessories uses to bind the Builtin Slots to the defaulted entity targets:

```json
{
  "replace": false,
  "entities": [
    "#accessories:defaulted_targets"
  ],
  "slots": [
    "hat",
    "face",
    "necklace",
    "cape",
    "back",
    "hand",
    "ring",
    "wrist",
    "belt",
    "anklet",
    "shoes",
    "charm"
  ]
}
```