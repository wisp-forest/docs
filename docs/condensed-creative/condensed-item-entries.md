---
title: Condensed Item Entries
project: condensed-creative
---

## Setting Up Condensed Entries Registry Entry point
 
For **all loaders** you will need a class that implements `CondensedCreativeInitializer`

=== "Fabric / Quilt"
    Add the following to your fabric.mod.json `entrypoints`:
    ```json
    ...
    "condensed_creative": [
        "Your.Path.To.Entrypoint"
    ],
    ...
    ```

=== "Forge"
    Use the `@InitializeCondensedEntries` annotation on the class that implements the interface
    ```java
    @InitializeCondensedEntries
    public class Main implements CondensedCreativeInitializer {
      //...
    }
    ```

???+ note 
    You must Register the Condensed Entries within the `onInitializeCondensedEntries(boolean refreshed)` method

## Registering Entries

You can start Registering Entries using the `CondensedEntryRegistry` which will give you a builder back allowing you to change certain things like:

| Attribute | <div style="width:7.9rem">Java Method</div> | <div style="width:7.2rem">JSON Method</div> | Value Type |
| ------ | :------: | :------: | :------: |
| **Item Comparison**: Enables comparison of the items within the ItemStacks rather than the stacks themselves | `useItemComparison()` | `"item_comparison":...` | Boolean |
| **Title**: Modifies the tooltip title with the provided Text[^1] [:material-information-outline:](){ title="Will default to using the given Identifier" } | `setTitle()` | `"title:..."` | Text |
| **Description**: Modifies the entries' tooltip by adding the given Text[^1] as a description | `setDescription()` | `"description:..."` | Text |
| **Entry Order**: Allows changing between sorting from Default or Itemgroup (Explained Below) | `setEntryOrder()` | `"entry_order":...` | Entry Order |
| **Strict Filtering**: Attempts to filter out any Entries not found within the Entries Item Group | `toggleStrictFiltering()` | `"strict_filter":...` | Boolean |
| **Entry Sorting**: Allows for custom sorting of children as ItemStacks within code | `setEntrySorting()` | NONE | Consumer |

???+ note "Entry Order"
    === "Default Order"
      	Such is based off of whatever method was used to generate the Condensed Entry either by the collections initial order or the Registry Order when using a Tag.

    === "ItemGroup Order"
      	Such is based off order of the given Items that were found within the specified ItemGroup. So depending on how the Items are added to the group will be the order within the Condensed Entry.

[^1]: Such is Parsed based on Minecraft's Internal [Text Serialization](https://minecraft.fandom.com/wiki/Raw_JSON_text_format)

***

???+ example "Code Example"
    The following are various ways constructing a Builder:
    === "Tag"
        ```java
        CondensedEntryRegistry.fromTag(
                new Identifier("minecraft", "wool"), //Identifier of the Entry
                Blocks.WHITE_WOOL, //ItemConvertible used for Starting point of the entry
                ItemTags.WOOL //Tag (Item or Block Tag) used to collect the Items for the Entry
            ).addItemGroup(ItemGroup.COLORED_BLOCKS);
        ```

    === "Predicate"
        ```java
        CondensedEntryRegistry.of(
                CondensedCreative.createID("spawn_eggs"), //Identifier of the Entry
                Items.AXOLOTL_SPAWN_EGG, //ItemConvertible used for Starting point of the entry
                item -> item instanceof SpawnEggItem //Predicate used to collect the Items for the Entry
            ).addItemGroup(ItemGroup.MISC);
        ```

    === "Collection"
        ```java
        CondensedEntryRegistry.fromItems(
                CondensedCreative.createID("ores"), //Identifier of the Entry
                Blocks.IRON_ORE, //ItemConvertible used for Starting point of the entry
                List.of(Blocks.IRON_ORE, Blocks.COAL_ORE, Blocks.DEEPSLATE_COAL_ORE) //ItemConvertables that will be contain within the Entry
            ).addItemGroup(ItemGroup.BUILDING_BLOCKS);
        ```

    

## Datapack Method

Another method for registering Condensed Entries is through the Datapack system within Minecraft. All files must be put into your mods assets folder: `assets/{your modid}/condensed_entries`.

Following the example below, the idea is to nest entries within a given ItemGroups JsonObject:

```JSON
{
  "minecraft:colored_blocks": { //(1)
    "condensed_creative:wool_carpets": { //(2)
      "base_item": "minecraft:white_carpet", //(3)
      "item_tag": "minecraft:wool_carpets"
    },
    "condensed_creative:wool": {
      "title": "Wools"
    },
    "0": { //(4)
      "condensed_creative:doors": {
        "base_item": "minecraft:iron_door",
        "block_tag": "minecraft:doors"
      }
    }
  },
  "sharded_entries": { //(5)
    "condensed_creative:wool": {
      "base_item": "minecraft:white_wool", 
      "item_tag": "minecraft:wool"
    }
  }
}
```

1. The ItemGroups given Identifier
2. The Condensed Entries Identifier with the given modid followed by the Entries Name
3. Starting Item in which this Entry should be placed
4. :material-information-outline: If such ItemGroup is a owoItemGroup, you can define Tab Indices as Strings
5. :octicons-tag-24: 3.0.0 : Shard entries allow you to template your entries if you add blocks to multiple ItemGroups or Tabs. You can use the Identifier of the Shard Entry and then edit that given instance within its JSON Object.

???+ note
	You can use Identifiers from either Forge or Fabric for Vanilla ItemGroups as there is an internal intercompatibility layer that handles translation to the correct platform

***

???+ example "JSON Example"
    
    === "Item Tag"
        ```JSON
        {
          "minecraft:colored_blocks": {
            "condensed_creative:wool_carpets": {
              "base_item": "minecraft:white_carpet",
              "item_tag": "minecraft:wool_carpets"
            }   
          }
        }
        ```

    === "Block Tag"
        ```JSON
        {
          "minecraft:redstone": {
            "condensed_creative:doors": {
              "base_item": "minecraft:iron_door",
              "block_tag": "minecraft:doors"
            }
          }
        }
        ```


    === "Collection"
        ```JSON
        {
          "minecraft:ingredients": {
              "condensed_creative:materials": {
              "base_item": "minecraft:string",
              "items": [
                "minecraft:string",
                "minecraft:feather",
                "minecraft:gunpowder"
              ]
            }
          }
        }
        ```

	
	The Title and Description will be parsed based on Minecraft's Internal [Text Deserialization](https://minecraft.fandom.com/wiki/Raw_JSON_text_format)

