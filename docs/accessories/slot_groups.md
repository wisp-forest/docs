---
title: Slot Groupings
project: accessories
---

Slot Groups are manly a cosmetic system meant to wrap certain slots in specific parts the body as a way to better order specific sets of slots and act as an easy method to quickly move to such specific slots within the Accessories Screen. 

## Data Pack Format

Such files should be placed within the `data/{replace_with_pack_namespace}/accessories/slot/` with the file name corresponding to the group name. Further updates may provide a trinket style screen depending on development issues with such. Below is details on the given format and an example of what such should look like:

```json
{
  "replace": false,
  "order": 120,
  "slots": [
    "charm"
  ],
  "icon": "accessories:gui/group/any"
}
```

| <div style="width:102px">Field Keys</div> | Data Type | Description |
|--|--|--|
| `"order"` | Integer | The order number to which the group will appear within the Accessories Screen with lower being placed first and higher numbers being placed last |
| `"slots"` | String[] | The slot names to which belong to the given Slot Group |
| `"icon"` | String | The resource location of the given slot icon in which is used to find the texture within the block atlas |