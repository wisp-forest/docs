# Nested Lang

Nested Lang is a simple DRY (Don't Repeat Yourself) system for language files. It allows you to nest keys inside of objects and arrays to reduce repetition and make your language files cleaner, easier to read and smaller on disk.

> [!IMPORTANT]
> Nested Lang is flattened prior to language loading, this ensures full compatibility with any other language modifications and no performance impact.
> In fact, nesting may even provide *slight* performance improvements by decreasing the size of the language file on disk.

## Setup

Before you can use nested lang, you need to enable it in 1 of 2 ways:
1. Enable oωo's [Json5 Data Loading](json5.md) and use a `.json5` file.
2. Add a key `owo:nested_lang` or `owo:extended_lang` with the value `true` or `1` anywhere in your lang file (at the top level).

## Object Nesting

When writing language files, you tend to have a lot of repeated text. For example, a mod containing a lot of items might contain this in its language file:

::: code-group
```json [en_us.json]
{
    "item.modid.firstItem": "First Item",
    "item.modid.secondItem": "Second Item",
    "item.modid.thirdItem": "Third Item",
    "item.modid.fourthItem": "Fourth Item",
    "item.modid.fifthItem": "Fifth Item",
    "item.modid.sixthItem": "Sixth Item",
    "item.modid.seventhItem": "Seventh Item",
    "item.modid.eighthItem": "Eighth Item",
    "item.modid.ninthItem": "Ninth Item",
    "item.modid.tenthItem": "Tenth Item"
}
```
:::

That alone has 10 instances of `item.modid.`. oωo provides a way to reduce this repetition by allowing you to nest translations. Instead of writing out the entire path of each and every key, you simply nest the unique parts of each key inside an object with the common affix as the key and a `{}` where the unique part goes. For example, the above can be written as:

::: code-group
```json [en_us.json]
{
    "owo:nested_lang": true,
    "item.modid.{}": { // [!code highlight]
        "firstItem": "First Item",
        "secondItem": "Second Item",
        "thirdItem": "Third Item",
        "fourthItem": "Fourth Item",
        "fifthItem": "Fifth Item",
        "sixthItem": "Sixth Item",
        "seventhItem": "Seventh Item",
        "eighthItem": "Eighth Item",
        "ninthItem": "Ninth Item",
        "tenthItem": "Tenth Item"
    }
}
```
:::

If you want to be even crazier you can provide a prefix **and** a suffix, like so:

::: code-group
```json [en_us.json]
{
    "owo:nested_lang": true,
    "item.modid.{}Item": { // [!code highlight]
        "first": "First Item",
        "second": "Second Item",
        "third": "Third Item",
        "fourth": "Fourth Item",
        "fifth": "Fifth Item",
        "sixth": "Sixth Item",
        "seventh": "Seventh Item",
        "eighth": "Eighth Item",
        "ninth": "Ninth Item",
        "tenth": "Tenth Item"
    }
}
```
:::

You can also provide *only* a suffix, although our example isn't exactly a great use case for it:

::: code-group
```json [en_us.json]
{
    "owo:nested_lang": true,
    "{}Item": { // [!code highlight]
        "item.modid.first": "First Item",
        "item.modid.second": "Second Item",
        "item.modid.third": "Third Item",
        "item.modid.fourth": "Fourth Item",
        "item.modid.fifth": "Fifth Item",
        "item.modid.sixth": "Sixth Item",
        "item.modid.seventh": "Seventh Item",
        "item.modid.eighth": "Eighth Item",
        "item.modid.ninth": "Ninth Item",
        "item.modid.tenth": "Tenth Item"
    }
}
```
:::

## Array Nesting

Certain situations may call for indexed lists of keys, for example:

::: code-group
```json [en_us.json]
{
    "item.modid.overlyToolTippedItem": "Overly Tool Tipped Item",
    "item.modid.overlyToolTippedItem.tooltip.1": "This is the first line of the tooltip",
    "item.modid.overlyToolTippedItem.tooltip.2": "This is the second line of the tooltip",
    "item.modid.overlyToolTippedItem.tooltip.3": "This is the third line of the tooltip",
    "item.modid.overlyToolTippedItem.tooltip.4": "This is the fourth line of the tooltip",
    "item.modid.overlyToolTippedItem.tooltip.5": "This is the fifth line of the tooltip",
    "item.modid.overlyToolTippedItem.tooltip.6": "This is the sixth line of the tooltip",
    "item.modid.overlyToolTippedItem.tooltip.7": "This is the seventh line of the tooltip",
    "item.modid.overlyToolTippedItem.tooltip.8": "This is the eighth line of the tooltip",
    "item.modid.overlyToolTippedItem.tooltip.9": "This is the ninth line of the tooltip",
    "item.modid.overlyToolTippedItem.tooltip.10": "This is the tenth line of the tooltip"
}
```
:::

This is far too much text to have to write out 10 times, so instead you can use the array syntax:

::: code-group
```json [en_us.json]
{
    "owo:nested_lang": true,
    "item.modid.overlyToolTippedItem.{}": {
      "": "Overly Tool Tipped Item",
      "tooltip.{}": [ // [!code highlight]
        "This is the first line of the tooltip",
        "This is the second line of the tooltip",
        "This is the third line of the tooltip",
        "This is the fourth line of the tooltip",
        "This is the fifth line of the tooltip",
        "This is the sixth line of the tooltip",
        "This is the seventh line of the tooltip",
        "This is the eighth line of the tooltip",
        "This is the ninth line of the tooltip",
        "This is the tenth line of the tooltip"
      ]
    }
}
```
:::

> [!INFO] Note
> An empty string key `""` will strip any trailing non-alphanumeric characters from the prefix, in this case the trailing period.

By default, the indexing will start at 1, but you may specify a different starting index by adding a number between the curly braces, like so:

::: code-group
```json [em.json]
{
    "owo:nested_lang": true,
    "item.modid.overlyToolTippedItem.tooltip.{5}": [ // [!code highlight]
        "This is the fifth line of the tooltip",
        "This is the sixth line of the tooltip",
        "This is the seventh line of the tooltip",
        "This is the eighth line of the tooltip",
        "This is the ninth line of the tooltip",
        "This is the tenth line of the tooltip"
    ]
}
```
:::

## Nested Nesting

Nested Keys can also be nested, for example:

::: code-group
```json [en_us.json]
{
    "owo:nested_lang": true,
    "item.modid.{}": { // [!code highlight]
      "firstItem": "First Item",
      "secondItem": {
        "": "Second Item",
        "tooltip.{}": [ // [!code highlight]
          "This is the first line of the tooltip",
          "This is the second line of the tooltip",
          "This is the third line of the tooltip"
        ]
      }
    }
}
```
:::

This will produce the following keys:

::: code-group
```json [en_us.json]
{
    "item.modid.firstItem": "First Item",
    "item.modid.secondItem": "Second Item",
    "item.modid.secondItem.tooltip.1": "This is the first line of the tooltip",
    "item.modid.secondItem.tooltip.2": "This is the second line of the tooltip",
    "item.modid.secondItem.tooltip.3": "This is the third line of the tooltip"
}
```
:::

## Rich Translations

Nested keys work perfectly with [Rich Translations](rich-translations.md), for example this:

::: code-group
```json [en_us.json]
{
    "item.minecraft.echo_shard": [
        "Echo ",
        { "text": "Shard", "color": "#0096FF" }
    ],
    "item.minecraft.recovery_compass": [
        "",
        { "text": "Recovery Compass", "color": "yellow" },
        " made of ",
        { "translate": "item.minecraft.echo_shard" }
    ]
}
```
:::

can be simplified to:

::: code-group
```json [en_us.json]
{
    "owo:nested_lang": true,
    "item.minecraft.{}": {
      "echo_shard": [
        "Echo ",
        { "text": "Shard", "color": "#0096FF" }
      ],
      "recovery_compass": [
        "",
        { "text": "Recovery Compass", "color": "yellow" },
        " made of ",
        { "translate": "item.minecraft.echo_shard" }
      ]
    }
}
```
:::

<sub><sup>This page was brought to you by chyzman</sup></sub>
