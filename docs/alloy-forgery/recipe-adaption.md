---
title: Recipe Adaption
project: alloy-forgery
---

# Recipe Adaption

Since 2.1.0 Alloy Forgery comes with a System to adapt existing Recipes to Alloy Forging Recipes with the only current implementation of the system being used to adapt existing Blasting Furnace recipes to work within the forge.
<p/>
Developed alongside this adaption system is the ability to create tags for Recipes with such following the same format as any other tag just being the tags should be placed within the `{your_namespace_here}/tags/recipes/` folder within your datapack

## Blast Furnace Adaption

By default, Alloy Forgery attempts to adapt all Blast Furnace recipes to work within the Alloy Forge combined with giving an output increase when reaching tier 3 forge. Such System can be controlled by two methods:

### Tags

Included are some tags that are used to adjust the behavior of the recipe adapter such being a blacklist for recipes altogether (`"alloy_forge:blacklisted_blasting_recipes"`) which when putting a recipe Identifier within such tag, will prevent such recipe from be ignored and not adapted to an Alloy Forge recipe.

You can also specifically blacklist a blasting recipe from gaining the increased output by putting it within the (`"alloy_forge:blacklisted_increased_blasting_outputs"`) recipe tag which will prevent such.

### Config

With more recent versions of Alloy Forgery, there now includes a config file which contains some more options on controlling blasting adaption, such outlined below:

| Option | Description |
|--|--|
| `allowHigherTierOutput` | Allows for the ability to toggle on or off the tier increase on **ALL** Blasting Recipes. |
| `allowBlastingFurnaceAdaption` | Allows for the ability to toggle on or off the blasting adaption for **ALL** Blasting Recipes. |
| `baseInputAmount` | Adjusts the required input amount for the adapted Blasting Recipe. Such functions as a multiplier for both the input and output meaning that with the default value of '2', the required amount needed to craft is '2' with an output of '2'. |
| `higherTierOutputIncrease` | Controls the amount of increased output that is gotten when using a tier 3 Alloy Forge if such tier output was not disabled. |