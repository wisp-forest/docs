---
title: Adding Recipes and Fuels
project: alloy-forgery
---

# Creating a recipe
When creating an Alloy Forge recipe you want to use the `alloy_forgery:forging` type.  
The recipe can be placed anywhere under `data/namespace/recipes` in your data.  
Here is an example of a recipe:  

```JSON
{
  "type": "alloy_forgery:forging",
  "inputs": [
    {
      "tag": "minecraft:copper_ores"
    }
  ],
  "output": {
    "item": "minecraft:copper_ingot",
    "count": 3
  },
  "overrides": {
    "2": {
      "item": "minecraft:copper_ingot",
      "count": 4
    },
    "3+": {
      "item": "minecraft:copper_ingot",
      "count": 5
    }
  },
  "min_forge_tier": 1,
  "fuel_per_tick": 5
}
```

Here is what each of the objects do:

## Input Format
Inputs follows the Ingredient format with an addition of the `count` field within the Object declaration used to give info about how much of such is required. The max allowed amount of items that can be put within the recipes is **10**.

**TODO: ADD INFO ABOUT BOTH Item and Tag Ingredients combined with custom ingredients from fabric**

## Output Format

There currently exists two methods of returning an item as an output:

#### Item
Using the `item` field as the items identifier combined with a `count` for control on the stack size of such returned item. Such is shown above as the first example.

#### Tagged
**Supported as of version 2.0.16+**

Using the `tag` field supplied with the desired target tag will allow for which ever entries within such to be used as an output though due to tags random ordering, it's best to supply a `priority` array of outputs to chose from that are known to work out the gate if found. 

??? note "Tag Output Selection"
    Such array will be sequentially check to see if the specified entry exists and if none are found, will default to using the tag to try and find any entry to use as an output.

Tagged Output Example:
```JSON
{
  "fabric:load_conditions": [
    {
      "condition": "fabric:item_tags_populated",
      "values": [
        "c:raw_lead_ores",
        "c:lead_ingots"
      ]
    }
  ],
  "type": "alloy_forgery:forging",
  "inputs": [
    {
      "tag": "c:raw_lead_ores",
      "count": 2
    }
  ],
  "output": {
    "priority": [
      "techreborn:lead_ingot",
      "indrev:lead_ingot",
      "modern_industrialization:lead_ingot"
    ],
    "default": "c:lead_ingots",
    "count": 3
  },
  "overrides": {
    "2+": {
      "count": 4
    }
  },
  "min_forge_tier": 1,
  "fuel_per_tick": 5
}
```

### Overrides
Overrides allow changing the output item depending on the tier of the Forge. If using the Tagged output, it is not needed to supply any info on what output is wanted. Accepted formatting: 

| Examples | Description |
| --- | --- |
| `"2"` | The override applies only to tier 2. |
| `"3+"` | The override applies to tier 3, and anything above it. |
| `"2 to 5"` | The override only applies to the specified range of tiers, in this case from tier 2 to tier 5. |

### Minimum Forge Tier
`min_forge_tier` field indicates the minimum tier required to use this recipe.

#### Fuel Per Tick
`fuel_per_tick` field indicates the amount of fuel consumed by the Forge per tick. One bucket of lava is 24000 fuel.

## Recipe Remainders
**Supported as of version 2.0.17+, requires owo-lib 0.8.0+**

Due to Vanilla's very generic Recipe Remainders, you can use owo's [Recipe Specific Remainders]() instead, allowing for fully customizable recipe remainders, or use the built-in Global Remainer System loaded thru the `data/{your_mod_id_here}/forge_remainder` folder.

A example for Global Alloy Forgery Remainders is below:
```JSON
{
  "remainders": {
    // Count is supported
    "minecraft:iron_ore": {
      "item": "minecraft:cobblestone",
      "count": 4
    },

    // Turn copper in input to sand
    "minecraft:copper_ore": "minecraft:sand",
  }
}
```

In the upper example you can declare a map of your item to an object. 

The initial Item ID here is the input to be replaced. Supported settings:

| Field | Description |
| --- | --- |
| `item` | The ID of the returned item. |
| `count` | Custom stack counts (optional) |

In the lower example, the initial item (copper ore) is what is being checked for, and the second item (sand) is returned once the recipe completes.

# Adding new fuels  
Alloy Forgery loads fuel from a specific folder in data.   
The path is `data/namespace/alloy_forge_fuels`, and in here you put your fuel definition.  
A fuel file does not require a specific name, and can hold multiple different fuels.  
Currently we only support items for fuels, tags are not accepted.  
An example is provided below:  
```JSON
{
  "fuels": [
    {
      "item": "minecraft:lava_bucket",
      "return_item": "minecraft:bucket",
      "fuel": 24000
    },
    {
      "item": "minecraft:coal",
      "fuel": 1000
    },
    {
      "item": "minecraft:charcoal",
      "fuel": 1000
    },
    {
      "item": "minecraft:blaze_rod",
      "fuel": 2000
    },
    {
      "item": "minecraft:coal_block",
      "fuel": 9000
    }
  ]
}
```  
The special field `return_item` is optional, and is intended for when you want to do something similar to returning an empty bucket after using a lava bucket with the forge.