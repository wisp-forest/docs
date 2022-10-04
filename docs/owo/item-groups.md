---
title: Item Groups
project: owo
---

Creating a basic owo Item Group is easy - simply extend `OwoItemGroup`

```java
public class MyItemGroup extends OwoItemGroup {
    
    public MyItemGroup(Identifier id) {
        super(id);
    }

    @Override
    public void setup(){
        // TODO
    }

    @Override
    public ItemStack createIcon() {
         // TODO
    }
}
```

You now have to implement both `setup()` and `createIcon()`, both of which perform important functions.

 - `createIcon()` is called at a later stage during the initialization process to create the icon which your group will show in the creative inventory

 - `setup()` is where the magic happens - in this method, you declare tabs, extra buttons and all the other features owo Item Groups support

### Adding tabs
In order to add a tab to your item group, call the `addTab(...)` method inside `setup()`. It accepts three parameters:

| Parameter | Description |
| --- | --- |
| `icon` | The icon of this tab. Look at the different methods available on the `Icon` class, as this supports more than just items |
| `name` | The name of this tab, used for the translation key |
| `contentTag` ⠀| The item tag used for populating the content of this tab. If you wish to populate your tabs in code using `OwoItemSettings.tab(...)`, this may be `null` |

### Adding buttons
Buttons work in much the same way as tabs, except that they usually require fewer parameters. Given that most of the time you would want to link to some external resource, `ItemGroupButton.link(...)` and the related methods like `ItemGroupButton.modrinth(...)` should be of interest. You can then pass this button directly into the `addButton()` method on your item group.

If you want your button to execute a custom action, simply call the constructor directly. It accepts the following parameters:

| Parameter | Description |
| --- | --- |
| `icon` | The icon of this button, this works identically as it does for tabs |
| `name` | The name of this button, used for the translation key |
| `action` | The action to run when this button is pressed |

### Configuring the Item Group further

#### Using a custom texture
In order to change the texture used to render your Item Group, call `setCustomTexture(...)` with the ID of the texture you want to use. This texture needs to follow a specific format in order to look correct, for this you can use the template included in the testmod on GitHub.

#### Configuring stacking height
The buttons to either side of your Item Group (that is, tabs on the left and buttons on the right), usually arrange themselves to stack up to a height of 4. Depending on how many tabs or buttons you have, it may make sense to change this. To do so, call either `setTabStackHeight(...)` or `setButtonStackHeight(...)`.

#### Making the title static
You can call `keepStaticTitle()` to force the title of your Item Group to be static, instead of changing with the tab that is selected.


### Initializing the group
After all your items have been registered, it is very important that you call the `initialize()` method on your Item Group. This will run setup and create the group icon, both of which can cause trouble if executed earlier.

### Using custom stack generators
When using `OwoItemSettings` instead of the vanilla `Item.Settings` to configure your item's tabs, you may have noticed the `stackGenerator(...)` setter. Using this, you can change the function which appends your item to the Item Group. The default function will just call `getDefaultStack()` on your item, which may not always be sufficient. Particularly if you want variations of your item with different NBT data, changing this may prove useful  
