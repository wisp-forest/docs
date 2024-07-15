---
title: Creating and Adjusting Slots
project: accessories
---

Below is information going over the Data format for creating Slot Types and the built-in default slot types with information about usage and examples for help on deciding what should you use combined with information about API pertaining to resizing and unique slot variants.

If such information below is still leaving you with questions, you can look at each platform's test mod [[Fabric](https://github.com/wisp-forest/accessories/tree/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/fabric/src/testmod), [Neoforge](https://github.com/wisp-forest/accessories/tree/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/neoforge/src/testmod)] for starting points or ask questions within the Discord if needing more assistance.

## Default Implementations

Accessories attempts to add some generalized default slots to act as a starting point for mods to choose from rather than creating their own slots that may flood Accessories with alternatives of the same concept leading to cluttered UI or introducing confusing equipment management. Below is the current default implemented list of Slot Types provided:

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

## Data Pack Format

Slot types are added to allow for both mod creators and mod pack developers the ability to adjust parameters to their hearts content. Such files must be placed within the `data/{replace_with_pack_namespace}/accessories/slot/` with such `.json` file corresponding to the name of the slot that will be added. Here is the `back` slot as an example of the file format:

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
    It is recommended that the location for the icon follows the `assets/{replace_with_pack_namespace}/gui/slot/` as such has been set up to take any textures here and put them within the block atlas and if such is not followed it is up to the developer to add such texture to the block atlas for rendering to work

## Slot Adjustments Methods

Slots were designed with the potential for the given slot amount to be changeable if desired. Such can be accomplished with either using the above data format, the various `operation` types to adjust such, or by using the other methods provided.

### Adjustment API

Within Accessories exists a programmatic way of adjusting slot amount similar in design to the data pack but using direct method calls found either on the `AccessoriesCapability` or the targeted `AccessoriesContainer` itself.

An example of adding and removing of additional ring slots are below using the capability within a Test Accessory:

```java
public class TestAccessory implements Accessory {
	//...
	@Override
	public void onEquip(ItemStack stack, SlotReference reference) {
		var map = HashMultimap.<String, AttributeModifier>create();

		map.put("ring", new AttributeModifier(ringAdditonUUID, "additional_rings", 100, AttributeModifier.Operation.ADDITION));

		reference.capability().addTransientSlotModifiers(map);
	}

	@Override
	public void onUnequip(ItemStack stack, SlotReference reference) {
		var map = HashMultimap.<String, AttributeModifier>create();

		map.put("ring", new AttributeModifier(ringAdditonUUID, "additional_rings", 100, AttributeModifier.Operation.ADDITION));

		reference.capability().removeSlotModifiers(map);
	}
	//...
}
```

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

### Unique Slot API

Provided by Accessories is a method of creating slots specific for your mod either though Datapack or within code for more control over aspects of the slot type size and such.

**{WIP} TODO! {WIP}**