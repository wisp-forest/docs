# Recipe Adapters

Since 2.1.0, Alloy Forgery added a system to adapt existing recipes to Alloy Forging recipes. 
By default Alloy Forgery provides an adapter for Blast Furnace recipes. 

## Recipe Tags

You might not want some recipes to be automatically converted by Alloy Forgery. As such, you can use the included **Recipe tag** system to further configure the adapters. 
These follow the same format as any other tag, and should be placed within the `{your_namespace_here}/tags/recipe/` folder within your datapack.

Example:

```json
{
  "values": [
    "minecraft:copper_ingot_from_blasting_copper_ore"
  ]
}
```

## Blast Furnace Adapter

By default, Alloy Forgery attempts to adapt all Blast Furnace recipes to work within the Alloy Forge. It also adds an override for the rare tier (tier 3) forges with increased outputs. This System can be further configured via recipe tags or the config.

### Tags

Included are some tags that are used to adjust the behavior of the recipe adapter:
- `alloy_forge:blacklisted_blasting_recipes`: prevents the recipe from being adapted into an Alloy Forgery recipe entirely.
- `alloy_forge:blacklisted_increased_blasting_outputs`: prevents the adapted recipe from gaining increased output when smelted inside an Alloy Forge

### Config

In the Alloy Forgery config file you can configure the following settings:                
                                                                                                                                                           
| Option | Value | Description |
|--------|-------|-------------|
| `allowBlastingFurnaceAdaption`    | Boolean | Enables/Disables the Blast Furnace Adapter entirely. Default:`true`  |
| `allowHigherTierOutput`           | Boolean | Overrides the increased yield from **ALL** adapted recipes Recipes. Default:`true` |
| `baseInputAmount`                 | Integer | Adjusts the required input amount for the adapted Blasting Recipe. Such functions as a multiplier for both the input and output meaning that with the default value of '2', the required amount needed to craft is '2' with an output of '2'. Default:`2` |
| `higherTierOutputIncrease`        | Integer | Decides how much increased output the rare tier override provides. Default:`1` |