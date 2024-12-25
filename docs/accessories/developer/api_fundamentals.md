---
title: API Fundamentals
project: accessories
---

### Creating an Accessory

You can either create an Accessory by implementing the `Accessory` interface or by extending the `AccessoryItem` which implements the `Accessory` interface. 

The first requires that you register your custom `Accessory` to the given `Item` using the `AccessoryRegistry#register` method. Using the `AccessoryItem` class will automatically register the accessory when the class is instantiated.

This `Accessory` interface contains various functions that can be performed. Some examples include `tick`ing, controlling equipability, listening to when equipment is changed, adding attribute modifiers (dynamically or statically), and adding custom tooltip info.

### Adding a Custom Accessory Renderer

Creating a custom `Accessory` comes with the ability to add some rendering that is attached to the player. You can do so by creating a custom instance of `AccessoryRenderer` and registering it using the `AccessoriesRendererRegistry.registerRenderer` method. More information about the rendering API be found in the [rendering API section](./rendering_api.md).

!!! warning "Default Rendering Behavior"
    By default within the Rendering API: all Accessories will use `DefaultAccessoryRenderer`, unless a custom `AccessoryRenderer` is registered, or an explicit "no renderer" is registered using `AccessoriesRendererRegistry#registerNoRenderer`.

### Creating a custom Slot Predicate

In cases where neither a Tag or using Data Components on your Item Stack are suitable, you may create a custom `SlotBasedPredicate` where you can have more control over what `Accessory` entries are allowed to be equipped in a given slot. 

This is useful for dynamic accessory types that may have multiple iterations that would make it difficult to use a Item Tag without possible issues.

!!! info "Entity Based Predicate"
    With the release of 1.2.0, `EntityBasedPredicate` exists as a way to have entity context when evaluating if a given Accessory should be equipped within a given slot. It is recommend that this is used only if needed, as it can be difficult to evaluate for cases like crafting where the target entity may differ.

### Accessing The Capability

Within Accessories there is the `AccessoriesCapability` which is used to access the slot containers, adjust slot attributes, or query the inventory for various possible item stacks. 

Any interaction involving a given entity will be exposed in its `AccessoriesCapability`, which only exists if the entity has slots bound it. Make sure to write your logic to respect the fact that not every entity has slots bound to it (since the capability could be `null`).

### Adjusting Accessory Equipping

A considerable difference between other Accessory API's is that `canEquip` is checked when Accessory data is loaded, and revalidated on reload. This requires you to use `isAnotherEquipped` found on the given entities `AccessoriesCapability` to prevent duplicate Accessory items from being equipped. This requires the current `ItemStack` and its `SlotReference` to be ignored when checking for another equipped accessory.

### Dealing with the Container

For each slot on an entity - there will be an `AccessoriesContainer` instance if the given Entity has the slot bound to it. Bear in mind that when checking this, the slot you specify may not exist on the entity (it can be `null`).

This object allows for getting information like the current equipped accessories, render toggles for given accessories and managing the slot attributes stored. It mainly not recommend to directly use the container to look for Accessories but instead use the methods on `AccessoriesCapability` instead.
