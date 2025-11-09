# Quick Start

## Setup - Modpacks

Due to limitations with needing to register new blocks way before datapacks are loaded, modpacks are recommended to use the provided `moddata` folder for creating new Alloy Forges. When Alloy Forgery is loaded for the first time it generates this folder in the `.minecraft` directory. Under the `moddata` folder you can create new forge controllers, and override existing ones. 

To get started create enough folders so you can navigate to `moddata/custom_content/alloy_forge/controller`. Then, create a new `bedrock_forge.json` file inside.

Next up you might want to do the following:

- Add a new [Forge Controller](#controllers).
- Potentially add a new [Tier](#Tiers).
- Add a [Tier Binding](#tier-bindings) between your Forge Controller and a new/existing tier.

## Setup - Mods

TODO - The following:
- Adding AF to development environment for local testing
- Use built-in datapack instead of `moddata`

## Resources

## Controllers

## Tiers

| Property | Type | Description |
|--|--|--|
|`tier`|b|Number which|
|`speed_multiplier`|b|c|
|`fuel_consumption_multiplier`|b|c|
|`fuel_capacity`|b|c|
|`parent_tier`|Identifier|Example: `alloy_forgery:common_tier`|

## Tier Bindings

## Next Steps

TODO - Summarize, and link to the following:

- Adding new recipes
- Adding new fuels