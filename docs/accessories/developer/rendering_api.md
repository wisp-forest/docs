---
title: Rendering API Breakdown
project: accessories
---

To link a given item to a specific `AccessoryRenderer` you will need to register such within the `AccessoriesRendererRegistry` class. By **default** all accessory items that have no renderer registered will get the `DefaultAccessoryRenderer` which attempts to render the block/item on the player in a position where the slot is located on the entity. 

!!! info "Default Accessory Rendering Behavior"
    All default slots have implemented renderers for such but new slots will need to implement their own using the `DefaultAccessoryRenderer#registerHelper` method. More about the `DefaultAccessoryRenderer` can be found below.

If you need a simple item rendering for your accessory than you could look at `SimpleAccessoryRenderer` as such requires you to just override the `align` method to transform the rendering to specific location on the entity.

## Transformation Methods

Accessories provides some helper methods to assist with transforming your `AccessoryRenderer` to various locations on the body with the primary method being `transformToModelPart` which will transform the given `PoseStack` (`MatrixStack`) to a given location on the targeted `ModelPart`. 

Two methods exist with the first method transforms the `PoseStack` (`MatrixStack`) to the center of the `ModelPart` while the other allows for more control on the positioning on the `x`, `y`, and `z` axis by providing a number between `-1` and `1` as explained below:

| Axis | Negative Values | Positive Values |
|--|--|--|
|`x`| Left Movement | Right Movement |
|`y`| Bottom Movement | Top Movement |
|`z`| Back Movement | Front Movement |

This method of transformation allows for the Accessories renderer to follow the model parts better allowing for compatibility with mods like Entity Model Feature and is more precises than generic transformations to where given model part may be located.

Furthermore you can use `transformToFace` to target specific faces of a given model part by passing the given `Side` which such will transform the rendering to the outside of the given models face.

!!! info "First Person Rendering"
    By default Accessories has the ability to render within the first person mainly on the humanoid entities arm by overriding [`shouldRenderInFirstPerson`](https://github.com/wisp-forest/accessories/blob/fa06f044f5c7486b26a8c0774f7ca3edbd256cad/common/src/main/java/io/wispforest/accessories/api/client/AccessoryRenderer.java#L76) method within your renderer.

## Default Renderer

As stated above that Accessories provides a default rendering for items that have yet to registered. This can be manipulated using the `AccessoryRenderTransformations` data component {WIP TODO: ADD LINK} for use with Data driven Accessories.

New slots will need to implement their own using the `DefaultAccessoryRenderer#registerHelper` method for the Default renderer to render anything which is just a generic helper to transform the renderer to the slots location on the entity.

The only way for one to disable the Default Rendering for a given Accessory is by using the `AccessoriesRendererRegistry#registerNoRenderer` or adjusting the Data Component if actively toggled on