---
title: Nested Translations
project: owo
---

## Object Nesting

When writing language files, you tend to have a lot of repeated text. For example, a mod containing a lot of items might contain this in its language file

```json title="en_us.json"
{
    ...
    "item.modid.firstItem": "First Item",
    "item.modid.secondItem": "Second Item",
    "item.modid.thirdItem": "Third Item",
    "item.modid.fourthItem": "Fourth Item",
    "item.modid.fifthItem": "Fifth Item",
    "item.modid.sixthItem": "Sixth Item",
    "item.modid.seventhItem": "Seventh Item",
    "item.modid.eighthItem": "Eighth Item",
    "item.modid.ninthItem": "Ninth Item",
    "item.modid.tenthItem": "Tenth Item",
    ...
}
```

That alone has 10 instances of "item.modid.". Owo provides a way to reduce this repetition by allowing you to nest translations. Instead of writing out the entire path of each and every key, you can simply write the first shared part of the key in an object followed by ".." then put the rest of the keys inside like so:

```json title="en_us.json"
{
    ...
    "item.modid...": {
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
    },
    ...
}
```

*do note that only 2 periods are required, the third one is part of the keys themselves.*

If you want to be even crazier you can provide a prefix and a suffix, like so:

```json title="en_us.json"
{
    ...
    "item.modid... ..Item": {
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
    },
    ...
}
```

*when using a prefix **and** a suffix you put 2 periods on both sides of where you want the inner text to be located and include a space.*

You can also provide only a suffix, like so:

```json title="en_us.json"
{
    ...
    "..Item": {
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
    },
    ...
}
```

*this example is a pretty terrible use of the feature but there are many cases where it can be useful.*

## Array Nesting

Certain situations may call for indexed lists of keys, for example:

```json title="en_us.json"
{
    ...
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
    "item.modid.overlyToolTippedItem.tooltip.10": "This is the tenth line of the tooltip",
    ...
}
```

This is far too much text to have to write out 10 times, so instead you can use the array syntax:

```json title="en_us.json"
{
    ...
    "item.modid.overlyToolTippedItem": "Overly Tool Tipped Item",
    "item.modid.overlyToolTippedItem.tooltip...": [
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
    ],
    ...
}
```

By default the indexing will start at 1, but you may specify a different starting index by adding a number after the key, like so:

```json title="en_us.json"
{
    ...
    "item.modid.overlyToolTippedItem.tooltip...5": [
        "This is the fifth line of the tooltip",
        "This is the sixth line of the tooltip",
        "This is the seventh line of the tooltip",
        "This is the eighth line of the tooltip",
        "This is the ninth line of the tooltip",
        "This is the tenth line of the tooltip"
    ],
    ...
}
```

When using a prefix and suffix you specify the start index in the middle of the 2 sets of periods instead of the space, for example, this:

```json title="en_us.json"
{
    ...
    "item.modid.overlyToolTippedItem.5.tooltip": "This is the fifth line of the tooltip",
    "item.modid.overlyToolTippedItem.6.tooltip": "This is the sixth line of the tooltip",
    "item.modid.overlyToolTippedItem.7.tooltip": "This is the seventh line of the tooltip",
    "item.modid.overlyToolTippedItem.8.tooltip": "This is the eighth line of the tooltip",
    "item.modid.overlyToolTippedItem.9.tooltip": "This is the ninth line of the tooltip",
    "item.modid.overlyToolTippedItem.10.tooltip": "This is the tenth line of the tooltip",
    ...
}
```

can be written as:

```json title="en_us.json"
{
    ...
    "item.modid.overlyToolTippedItem...5...tooltip": [
        "This is the fifth line of the tooltip",
        "This is the sixth line of the tooltip",
        "This is the seventh line of the tooltip",
        "This is the eighth line of the tooltip",
        "This is the ninth line of the tooltip",
        "This is the tenth line of the tooltip"
    ],
    ...
}
```

*When using both a prefix and suffix you must either put a space or a starting index*
