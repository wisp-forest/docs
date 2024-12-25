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
    By default as discussed within the Rendering API section of the docs, all Accessories will use `DefaultAccessoryRenderer` unless a custom `AccessoryRenderer` is registered or no renderer is registered using `AccessoriesRendererRegistry#registerNoRenderer`.

### Creating a custom Slot Predicate

In cases where a Tag may not be the best solution or using Data Components on your ItemStack may not be suitable, one can create a custom `SlotBasedPredicate` where you can have more general control of allowing `Accessory` entries to be equipped to a given slot. 

This is useful for dynamic accessory types that may have multiple iterations that would make it difficult to use a Item Tag without possible issues.

!!! info "Entity Based Predicate"
    With the release of 1.2.0, `EntityBasedPredicate` exists as a way to have entity context when evaluating if a given Accessory should be equipped within a given slot. It is recommend that this is used only if needed, as it can be difficult to evaluate for cases like crafting where the target entity may differ.

### Accessing The Capability

Within Accessories there is the `AccessoriesCapability` which is used to access the slot containers, adjust slot attributes, or query the inventory for various possible item stacks. 

Any interaction involving the entity would be found here if they have a `AccessoriesCapability` as the entity needs to have slots bound to such to be able to get the capability. This means that your logic should revolve around the idea that not every entity can be capable of being interacted with unless they have slots bound to them.

### Adjusting Accessory Equipping

A considerable difference between other Accessory API's is that `canEquip` is checked on loading Accessory data and revalidate on reload requiring that you use `isAnotherEquipped` found on the given entities `AccessoriesCapability` to prevent duplicate Accessory items from being equipped. Such requires the current `ItemStack` and `SlotReference` of the current location to be ignored when checking for another equipped accessory.

### Dealing with the Container

For each slot there will be an `AccessoriesContainer` instance if the given Entity has the slot bound to such. That means that it has the possibility to not exist for every entity meaning you should confirm such to exist in all cases.

This object allows for getting information like the current equipped accessories, render toggles for given accessories and managing the slot attributes stored. It mainly not recommend to directly use the container to look for Accessories but instead use the methods on `AccessoriesCapability` instead.
