---
title: Creating and Adjusting Slots
project: accessories
---

# Slots

Below is information going over the Data format for creating Slot Types and default implementations include within the mod to start off with some extra API for manipulating various aspects of such

## Data Pack Format

Slot types are added to allow for both mod creators and mod pack developers the ability to adjust parameters to their hearts content. By default, there exists base implications for many to start from inwhich such is listed in the next section but if you need to add a new one here is the general format. The file must be placed within the `data/{replace_with_pack_namespace}/accessories/slot/` with such `.json` file being the name to which the slot will be given. Here is the `back` slot as an example of the file format:

```json
{
  "replace": false,
  "amount": 1,
  "operation": "set",
  "order": 1000,
  "icon": "accessories:gui/slot/back"
}
```

| <div style="width:102px">Field Keys</div> | Data Type | Description |
|--|--|--|
| `"order"` | Integer | The order number to which the slot will appear within the Accessories Screen with lower being placed first and higher numbers being placed last |
| `"amount"` | Integer | The number to which be used when calculating the base size of the given slot using the given operation's: `"set"`, `"add"`, or `"remove"` |
| `"operation"` | String | The specific operation used in combination with the specified `amount` |
| `"validators"` | String[] | The Id's (`ResourceLocation` / `Identifier`) of all predicates to be used for the given slot |
| `"drop_rule"` | String | The specific rule used when attempting to drop the accessories: `"default"`, `"keep"`, `"drop"`, `"destroy"` |
| `"icon"` | String | The resource location of the given slot icon in which is used to find the texture within the block atlas |

??? note "Icon Location"
    It is recommended that such location for the icon follows the `assets/{replace_with_pack_namespace}/gui/slot/` as such has been set up to take any textures here and put them within the block atlas but any texture that is put within the block atlas will work

## Default Implementations

By default, Accessories attempts to add some generalized default slots to act as a starting point for mods to choose from rather than creating their own slots that may flood Accessories with alternatives of the same concept leading to issues. Below is the current default implemented list of Slot Types provided:

| Name | Usage | Examples |
|--|--|--|
| `charm` | Items equipped into a pocketed area of the entity's body | Magic Stuff |
| `hat` | Items equipped on top of the entity's head | Crowns or Hats |
| `face` | Items equipped over the entity's face i.e. a mask | Masks or Glasses |
| `cape` | Items equipped around the entity's neck and drape down their back | Cloaks or Shirts |
| `necklace` | Items equipped around the entity's neck and hang in the front of their body | Necklaces or Collar |
| `back` | Items equipped on the entity's back around the chest or around the arms on both side | Backpacks or Shields |
| `hand` | Items equipped on the entity's hands either covering them fully or partially | Gloves or Gauntlets |
| `ring` | Items equipped on the entity's fingers | Rings |
| `wrist` | Items equipped around the entity's wrist | Watches or Bracelets |
| `belt` | Items equipped around the entity's waist | Belt or Pouches |
| `anklet` | Items equipped around the entity's ankle | Anklets |
| `shoes` | Items equipped on the entity's feet | Shoes or Socks |

## Slot Adjustments Methods

Slots were designed with the potential for the given slot amount to be changeable if desired. Such can be accomplished with either using the above data format and the various `operation` types to adjust such or by using the other methods provided.

### Adjustment API

Within Accessories exists a programmatic way of adjusting slot amount similar in design to the data pack method but it is warned that you be careful with such operations on globally used slots as such operations are harder to track comparably. 

You can register such adjustments can be registered though `SlotAmountAdjustmentRegistry` main event object `AFTER_SLOT_LOAD`. What's passed back upon event invocation is the current instance of the `SlotAmountAdjustmentRegistry` allowing devs to register `SlotAmountAdjustment` for given Slots.

### Config File

Included within the Accessories Config file is the ability to adjust the slot amount for end users that want to tweak slot amount globally if they find such to not be at the desired level. I would recommend that you keep balance in mind but for the people who want to go crazy, such is an easy method of adjusting it to allow for your 100 ring setup if so desired.

Such file is located within the `./config/` folder directory within Minecraft instance under the file `accessories` in which the field for such is `"modifiers`" in the given format:

```json
{
	//...
	"modifiers": [ // Array of json objects comprising the below structure
		{
			"slotType": "test", // Targeted Slot Name
			"amount": 23 // The Amount to shoot for as the base
		}
	]
}
```

