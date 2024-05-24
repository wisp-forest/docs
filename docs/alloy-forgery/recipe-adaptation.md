---
title: Recipe Adaptation
project: alloy-forgery
---

Since 2.1.0, Alloy Forgery added a system to adapt existing recipes to alloy forging recipes. Currently, only Blast Furnace recipes are adapted to work with the forge.

Developed alongside this adaptation system is the ability to create tags for Recipes with such following the same format as any other tag just being the tags should be placed within the `{your_namespace_here}/tags/recipes/` folder within your datapack.

## Blast Furnace Adaptation

By default, Alloy Forgery attempts to adapt all Blast Furnace recipes to work within the Alloy Forge combined with giving an output increase when reaching tier 3 forge. This System can be controlled by two methods:

### Tags

Included are some tags that are used to adjust the behavior of the recipe adapter. One of these is a blacklist for recipes altogether (`alloy_forge:blacklisted_blasting_recipes`) which, for each recipe ID within it, prevents the corresponding recipe from being adapted into an Alloy Forge recipe.

You can also specifically blacklist a blasting recipe from gaining the increased output by putting it within the (`alloy_forge:blacklisted_increased_blasting_outputs`) recipe tag.

### Config

More recent versions of Alloy Forgery include a config file which contains some more options on controlling blasting adaption, such outlined below:

| Option <p style="width: 230px;"/> | Description |
|--|--|
| `allowHigherTierOutput`| Allows for the ability to toggle on or off the tier increase on **ALL** Blasting Recipes. |
| `allowBlastingFurnaceAdaption`| Allows for the ability to toggle on or off the blasting adaption for **ALL** Blasting Recipes. |
| `baseInputAmount` | Adjusts the required input amount for the adapted Blasting Recipe. Such functions as a multiplier for both the input and output meaning that with the default value of '2', the required amount needed to craft is '2' with an output of '2'. |
| `higherTierOutputIncrease` | Controls the amount of increased output that is gotten when using a tier 3 Alloy Forge if such tier output was not disabled. |