---
title: Defining new Forges though Data
project: alloy-forgery
---

## Where do I define it?

When Alloy Forgery is loaded for the first time it generates a folder in the `.minecraft` directory, which is called `moddata`. Under the `moddata` folder you can create new forges, and override existing ones. An example would be overriding the deepslate forge. For this we would create enough folders so that we can go into `moddata/alloy_forgery/alloy_forges`, and create a new `deepslate_bricks_forge.json` file. This new file *will override* the existing deepslate bricks forge, allowing us to change it.

For creating new forges simply create your own data folder. An example would be `moddata/custom_content/alloy_forges`, with a new `bedrock_forge.json` file inside.

## Defining the forge

An example is provided below: 
```JSON
{
  "material": "minecraft:deepslate_bricks",
  "additional_materials": [
    "minecraft:deepslate_tiles",
    "minecraft:polished_deepslate",
    "minecraft:chiseled_deepslate"
  ],
  "tier": 2,
  "speed_multiplier": 1.5,
  "fuel_capacity": 96000
}
```

- `material` - Defines the block used for crafting the Forge Controller and the block the Forge is built from.
- `additional_materials` - Defines extra materials the Forge structure can be built from.
- `tier` - The tier of the Forge. Determines what recipes it can process. 
- `fuel_capacity` - How much fuel the Forge can hold before needing to be refueled. 
- `speed_multiplier` - A multiplier which decides how fast the Forge processes a recipe. Does not impact fuel consumption.
