---
title: Creating and Modifying Slots
project: accessories
---

If such information below is still leaving you with questions, you can look at each platform's test mod [[Fabric](https://github.com/wisp-forest/accessories/tree/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/fabric/src/testmod), [Neoforge](https://github.com/wisp-forest/accessories/tree/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/neoforge/src/testmod)] for starting points. You can also ask questions within the Discord {todo: add discord link} for more assistance.

Creating a slot within Accessories requires you follow the two options available to you:
- Datapack method: Allows for full ability to tweak Slot Properties and its bound Entities within `json` files loaded on server start
- Programmatic method: More restrictive control over a given slot type using the Unique slot API

???+ tip "Notice of Datapackablity"
    When using the Data Pack method it is recommend that you design your Mod with the ability to be adjusted by end users since much of accessories base system allows for items to be moved from one slot to another, remove your target slot, or even prevent a item from being equipped in any slot. 

    Such maybe your intention to attempt some sense of balance but will lead to issues when Modpack makers are unable to balance based on other mods.

## Data Pack Format

To create your own slot type or adjust an existing slot, you will need to need to make a new `.json` file at the following location, `data/{replace_with_pack_namespace}/accessories/slot/`, **that is named as the slots name**.

**For Unique slots**: it is required that you have the namespace of the given slot within the folder structure as follows: `data/{replace_with_pack_namespace}/accessories/slot/{unqiue_slot_namespace_here}/`.

Below is an example of the `back` slot file located within Accessories{todo: add link}:

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

???+ note "Icon Location"
    It is recommended that the location for the icon follows the `assets/{replace_with_pack_namespace}/gui/slot/` as such has been set up to take any textures here and put them within the block atlas and if such is not followed it is up to the developer to add such texture to the block atlas for rendering to work

To modify existing slots there is multiple methods to such:

- Modify Amount: Create a file with the same **same path** and **same name** with adjustments to amount either though the `add` or `remove` operation type
- Replace File: Create a file with the **same namespace**, **same path**, and **same name** that you then adjust with the `replace` field set to `true` which will replace
- Replace Data (Requires Datapack Ordering): Move your datapack using some tool or method(Not included by default) that allows for the adjustment of ordering allowing for your slot file to apply after the inital one allowing you to modify aspects of such

## Unique Slot API

This API is the alternative method for creating a slot which comes with the benefits of being able to lock down various aspects of a slot like equability, which entity a slot is bound to, and prevent certain operations like resizing from occurring. 

Its with this that you are primarily using Accessories backend as a common API target meaning you will need to implement your own screen to handle interacting with the slots if desired.

A breakdown of how such is to implement is below:

```java
public class UniqueSlotExample implements UniqueSlotHandling.RegistrationCallback  {
	private static final ResourceLocation MAGIC_BALL_PREDICATE = ResourceLocation.fromNamespaceAndPath("example", "magic_ball");
    
    public static final UniqueSlotExample INSTANCE = new UniqueSlotExample();

    private UniqueSlotExample(){
        SlotPredicateRegistry.registerPredicate(slotPredicate1, SlotBasedPredicate.ofItem(item -> item.equals(ExampleItems.MAGIC_BALL)));
    }

    private static SlotTypeReference MAGIC_BALL_REFERENCE;

    @Override
    public void registerSlots(UniqueSlotHandling.UniqueSlotBuilderFactory factory) {
        MAGIC_BALL_REFERENCE = factory.create(ResourceLocation.fromNamespaceAndPath("example", "magic_ball"), 1)
                .slotPredicates(MAGIC_BALL_PREDICATE)
                .validTypes(EntityType.PLAYER)
                .build();
    }

    @Nullable
    public static SlotTypeReference magicBallRef() {
        return MAGIC_BALL_REFERENCE;
    }

	// Call init method within your mods initializer to add the class to the main Unique Slot Handling event
	public static void init() {
		UniqueSlotHandling.EVENT.register(UniqueSlotTest.INSTANCE);
	}
}
```

???+ warning "Slot Initialization"
    You must call the init function of the example class or register the event invoker yourself

The given factory object that is returned by the registered method invocation or implementing object allows you to get a `UniqueSlotBuilder` which has the following methods:

| <div style="width:102px">Field Keys</div> | Description |
|--|--|
| `slotPredicates(ResourceLocation... locations)` | Used to pass the desired Slot Predicates for this slot as none are set by default |
| `validTypes(EntityType<?>... types)` | Used to pass any entity types that should be bound with this slot |
| `strictMode(boolean value)` | Used to prevent any modifications to key data like the given slot predicates or what entity have this slot bound |
| `allowResizing(boolean value)` | Used to prevent adjustments to the slot amount either though datapack or attributes |
| `allowEquipFromUse(boolean value)` | Used to prevent any Accessory valid for this slot type from being quickly equipped from hand |
| `allowTooltipInfo(boolean value)` | Used to prevent any tooltip information about this slot from appearing within a given Accessories Tooltip |