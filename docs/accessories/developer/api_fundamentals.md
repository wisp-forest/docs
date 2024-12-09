---
title: API Fundamentals
project: accessories
---

### Creating an Accessory

You can either create an Accessory by implementing the `Accessory` interface or by extending the `AccessoryItem` which implements the `Accessory` interface. 

The first requires that you register your custom `Accessory` to the given `Item` instance using the `AccessoryRegistry#register` method while the later `AccessoryItem` will register the accessory when the class is instantiated

This `Accessory` interface contains various functions that can be preformed like `tick`ing, controlling equipablity, listening to when equipment is changed, adding attribute modifiers dynamically or staticlly, adding custom tooltip info, and more.

### Adding a Custom Accessory Renderer

With creating a custom `Accessory` comes with the ability to add some rendering that is attached to the player. You can do such by creating a custom instance of `AccessoryRenderer` and registering such using the `AccessoriesRendererRegistry.registerRenderer` method. More information about the API available to developers can be found in the rendering API section. {TODO: WIP ADD LINK TO SUCH}

!!! warning "Default Rendering Behavior"
    By default as discussed within the Rendering API section of the docs, All Accessories will use `DefaultAccessoryRenderer` unless a custom `AccessoryRenderer` is registered or no renderer is registered using `AccessoriesRendererRegistry#registerNoRenderer` as such is meant to have some rendering.

### Creating a custom Slot Predicate

In cases where a Tag may not the be the best solution or using Data Components on your ItemStack may not be suitable, one can create a custom `SlotBasedPredicate` where you can have more general control of allowing `Accessory` entries from being equipped to a given slot. 

This is useful for dynamically accessory types that may have multiple iterations that would make it difficult to use Tag without possible issues.

!!! info "Entity Based Predicate"
    With the release of 1.2.0, `EntityBasedPredicate` exists as a way to have entity context when evaluating if a given Accessory should be equipped within a given slot. It is recommend that this is used only if needed as it may be difficult to evaluate for things like crafting where the target entity may differ.

### Accessing The Capability

Within Accessories there is the `AccessoriesCapability` which is used to access the slot containers, adjust slot attributes, or query the inventory for various possible item stacks. 

Any interaction involving the entity would be found here if they have a `AccessoriesCapability` as the entity needs to have slots bound to such to be able to get the capability. This means that your logic should revolve around the idea that not every entity can be capable of being interacted with unless they have slots bound to them.

### Dealing with the Container

For each slot there will be a `AccessoriesContainer` instance if the given Entity has the slot bound to such. That means that it has the possibility to not exist for every entity meaning you should confirm such to exist in all cases.

This object allows for getting information like the current equipped accessories, render toggles for given accessories and managing the slot attributes stored. It mainly not recommend to directly use the container to look for Accessories but instead use the methods on `AccessoriesCapability` instead.
