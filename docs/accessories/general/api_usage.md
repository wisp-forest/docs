---
title: Adjusting Accessory Equability
project: accessories
---

# Slot Adjustments Methods

Slots were designed with the potential for the given slot amount to be changeable if desired. Such can be accomplished with either using the above data format, the various `operation` types to adjust such, or by using the other methods provided.

## Attribute Modifier

Accessories adds a system for adjusting a specific Slot types amount of slots given to the entity who equips the Accessory. Such can be done either though a programmatic or the Data Component way.


### Programmatic Method

Within Accessories exists a programmatic way of adjusting slot amount similar in design to the data pack but using direct method calls found either on the `AccessoriesCapability` or the targeted `AccessoriesContainer` itself.

An example of adding and removing of additional ring slots are below using the capability within a Test Accessory:

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

Another Programmatic method of such is by adjusting the slots Dynamic Modifiers instead of adding to entity on equiping of the accessory:

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

As outlined within the {insert link to itemstack components} you can add a Data component to a given ItemStack to adjust the amount when equipped

## Config File

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