---
title: Binding Slots to Entities
project: accessories
---

Accessories requires that each slot is bound to the desired entity types for the given the entities to have such slots. By default, the given implemented slots are bound to any entity type found within the `accessories:defaulted_targets` entity type tag which currently includes players and armor stands. 

## Data Pack Format

For other slots create it is required that you create a file within the `data/{replace_with_pack_namespace}/accessories/entity/` with the given slots being added to the `"slots"` array. Below is details on the given format and an example of what such should look like:

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

| <div style="width:102px">Field Keys</div> | Data Type | Description |
|--|--|--|
| `"slots"` | String[] | An list of all slot names to be available to the given entities targeted |
| `"entities"` | String[] | A list containing either specific locations of entity types or an entity type tag prefix with a hashtag |
