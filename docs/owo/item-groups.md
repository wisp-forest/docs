---
title: Item Groups
project: owo
---

!!! bug ""
    This guide is only applicable for Minecraft versions 1.19.3 and onwards. There were significant changes to the item group system which mandated changes in owo's approach to stay compatible.

Creating a basic owo item group is easy - begin by calling `OwoItemGroup.builder(...)` and supply it with:

 - The identifier to register your group with
 - A function that creates the icon of your group - this is called at a later stage during the initialization process and should use one of the `Icon.of(...)` overloads

```java
public static final OwoItemGroup GROUP = OwoItemGroup
    .builder(new Identifier("mod-id", "item_group"), () -> Icon.of(Mod.ITEM))
    // additional builder configuration goes between these lines
    .build();
```

### Adding tabs
In order to add a tab to your item group, extend your group builder configuration with the `intializer(...)` method. Inside it, call `group.addTab(...)` - this accepts four parameters:

| Parameter | Description |
| --- | --- |
| `icon` | The icon of this tab. Look at the different methods available on the `Icon` class, as this supports more than just items |
| `name` | The name of this tab, used for the translation key |
| `contentTag` ⠀| The item tag used for populating the content of this tab. If you wish to populate your tabs in code using `OwoItemSettings.tab(...)`, this may be `null` |
| `primary` | If this is `true`, the tab's name is displayed as-is, otherwise the name of the item group itself gets prepended |

??? note "About custom tabs"
    If you want or need more precise control over how the tab is populated, you can use the `group.addCustomTab(...)` function instead. Instead of a tag, it takes a `ContentSupplier` function that is called and provided the `ItemGroup.Entries` to append to when the creative inventory is initialized

### Adding buttons
Buttons work in much the same way as tabs, except that they usually require fewer parameters. Given that most of the time you would want to link to some external resource, `ItemGroupButton.link(...)` and the related methods like `ItemGroupButton.modrinth(...)` should be of interest. You can then pass this button directly into the `group.addButton(...)` method.

If you want your button to execute a custom action, simply call the constructor directly. It accepts the following parameters:

| Parameter | Description |
| --- | --- |
| `group` | The item group the button belongs to, usually just `group` |
| `icon` | The icon of this button, this works identically as it does for tabs |
| `name` | The name of this button, used for the translation key |
| `action` | The action to run when this button is pressed |

### Configuring the Item Group further

#### Using a custom texture
In order to change the texture used to render your item group, insert `customTexture(...)` with the ID of the texture you want to use. This texture needs to follow a specific format in order to look correct, for this you can use the [template included in the testmod](https://github.com/wisp-forest/owo-lib/blob/1.19.3/src/testmod/resources/assets/uwu/textures/gui/group.png).

#### Configuring stacking height
The buttons to either side of your item group (that is, tabs on the left and buttons on the right), usually arrange themselves to stack up to a height of 4. Depending on how many tabs or buttons you have, it may make sense to change this. To do so, insert either `tabStackHeight(...)` or `buttonStackHeight(...)`.

#### Making the title static
You can insert `disableDynamicTitle()` to force the title of your item group to be static, instead of changing with the tab that is selected.

### Initializing the group
After all your items have been registered, it is very important that you call the `initialize()` method on your item group. This will run setup and create the group icon, both of which can cause trouble if executed earlier.

### Using custom stack generators
When using `OwoItemSettings` instead of the vanilla `Item.Settings` to configure your item's tabs, you may have noticed the `stackGenerator(...)` setter. Using this, you can change the function which appends your item to the item group. The default function will just call `getDefaultStack()` on your item, which may not always be sufficient. Particularly if you want variations of your item with different NBT data, changing this may prove useful
