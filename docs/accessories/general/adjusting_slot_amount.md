---
title: Adjusting Slot Amount
project: accessories
---

# Slot Adjustments Methods

Slots were designed with the potential for the given slot amount to be changeable. This can be accomplished either by using the data format through the various `operation` type's, or by using the other methods provided.

## Attribute Modifier

Accessories adds a system for adjusting a specific Slot types amount of slots given to the entity who equips the Accessory. Such can be done either though a programmatic or the Data Component way.


### Programmatic Method

Accessories provides a programmatic way of adjusting slot amounts, which is similar in design to the data pack method. The method calls for this are found either on the `AccessoriesCapability` or the targeted `AccessoriesContainer` itself.

The following example shows how to add and remove additional ring slots, using the capability within a test Accessory:

```java
public class RingIncreaser implements Accessory {
	private static final ResourceLocation RING_ATTRIBUTE_LOCATION = ResourceLocation.fromNamespaceAndPath("test", "additional_rings")

	//...
	@Override
	public void onEquip(ItemStack stack, SlotReference reference) {
		var map = HashMultimap.<String, AttributeModifier>create();

		map.put("ring", new AttributeModifier(RING_ATTRIBUTE_LOCATION, 100, AttributeModifier.Operation.ADDITION));

		reference.capability().addTransientSlotModifiers(map);
	}

	@Override
	public void onUnequip(ItemStack stack, SlotReference reference) {
		var map = HashMultimap.<String, AttributeModifier>create();

		map.put("ring", new AttributeModifier(RING_ATTRIBUTE_LOCATION, 100, AttributeModifier.Operation.ADDITION));

		reference.capability().removeSlotModifiers(map);
	}
	//...
}
```

Another Programmatic method of such is by adjusting the slots Dynamic Modifiers instead of adding to entity on equipping of the accessory:

```java
public class HatIncreaser implements Accessory {
	private static final ResourceLocation HAT_ATTRIBUTE_LOCATION = ResourceLocation.fromNamespaceAndPath("test", "additional_hats")

	//...
	@Override
	public void getDynamicModifiers(ItemStack stack, SlotReference reference, AccessoryAttributeBuilder builder){
		// Exclusive Refers to only one instance of the modifier is allowed 
        builder.addExclusive(SlotAttribute.getSlotAttribute("hat"), HAT_ATTRIBUTE_LOCATION, 4, AttributeModifier.Operation.ADDITION);

		// Stackable Refers to any amount of the given modifier is allowed (Preappends Slot Info like the type and index to the location)
        builder.addStackable(SlotAttribute.getSlotAttribute("hat"), HAT_ATTRIBUTE_LOCATION, 4, AttributeModifier.Operation.ADDITION);
    }
	//...
}
```

### Data Component

As outlined within the {insert link to itemstack components} you can add a component to a given ItemStack to adjust the amount of equippable slots *when equipped*. This works through the XYZ attribute. 

## Config File

The Accessories config file allows you to adjust the slot amount globally. Keep in mind that changing the defaults can heavily change the balance of your game/modpack. You can go well above a hundred ring slots for example, although that would easily clutter up your Accessory screen. 

The config file is located within the `./config/` folder within your Minecraft instance under the file `accessories`. You can then specify new slot amounts using the `"modifiers`" field in the given format:

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