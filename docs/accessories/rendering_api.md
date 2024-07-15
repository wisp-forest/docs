---
title: Rendering API
project: accessories
---

Accessories allow for the ability to register a custom render if desired for an item, but dose include some default rendering behavior for included slots. Such can be added to within the `DefaultAccessoryRenderer` if you include your own slot and want similar behavior.

## Rendering Methods

An Accessory rendering can be down within the [`AccessoryRenderer`](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/client/AccessoryRenderer.java#L31) which gives you the ability to render you accessory based on the given entity and slot information passed through the render call with helper method used to position such called `transformToModelPart`. Such a method takes in the living entity's `ModelPart` and relative percent values to transform the stack based on the `ModelPart`.

Furthermore, such interface also adds the ability to render the Accessory within the first person view if desired though the [`shouldRenderInFirstPerson`](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/client/AccessoryRenderer.java#L76) method which may be desired for gloves or rings.

## Default Renderer

Provided by Accessories is a default rendering for items that have yet to register a render giving some visual for Accessories by default with the behavior being overridden either by toggling such within NBT or by registering an implemented renderer or even a null value to prevent rendering of such default behavior. 

As talked about you can register a slot for default rendering if a custom slot was created with the main method for such being `DefaultAccessoryRenderer#registerHelper` which requires an implemented `DefaultAccessoryRenderer.RenderHelper` allowing for the positioning on the entity and call of the basic item rendering.