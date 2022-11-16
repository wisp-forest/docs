---
title: Villager Trade Data Format
project: numismatic-overhaul
---

# Villager Trade Data Format

All trade definition files belong in `data/numismatic-overhaul/villager_trades`. You can define as many files for a villager profession as you like, although having multiple files per profession is discouraged for the sake of simplicity.

All the trades are collected based on profession, and for each level the villager randomly picks their trades.  

**Wandering Trader**

The Wandering Trader is a special case. Its profession ID is `wandering_trader`, and it only requires trades for the `novice` and `apprentice` levels. Any other trades will not load.

***

## File Format
Each trade definition file needs two elements in the root object: 

 - `profession`: The profession the following trades are for, without namespace (eg. `"profession": "farmer"`)

 - `trades`: The trades for this profession, one array for each level

**Example:**
```json
{
  "profession": "farmer",
  "trades": {
    "novice": [
      {
        "type": ...
        ...options...
      },
      {
        "type": ...
        ...options...
      }
    ]
  }
}
```

### ItemStack format

| Property | Description | Type |
| --- | --- | --- |
| `id` | The item ID | string |
| `count` | The item count | int *optional* |
| `tag` | An NBT tag | A nested object *optional* |

???+ example
    ```json
    {
      "id": "minecraft:diamond_pickaxe",
      "count": 1
      "tag": {
        "Damage": 75
      }
    }
    ```


## Trade Types
**All trades types** have these optional parameters:

| Parameter | Description | Type | Default |
| --- | --- | --- | --- | 
| `price_multiplier` | The multiplier to apply when a player has gossip | float | 0.05 |
| `max_uses` | The max uses of this trade before restocking | int | 12 |
| `villager_experience` | The experience awarded to the villager when using this trade | int | 5 |

***

### Buy Item
:material-identifier: `numismatic-overhaul:buy_stack`

The Villager **buys** the given stack for the given price

| Parameter | Description | Type |
| --- | --- | --- |
| `price` | Price in bronze coins | int |
| `buy` | The item to buy | ItemStack |

???+ example
    ```json
    {
      "type": "numismatic-overhaul:buy_item",
      "buy": {
        "item": "minecraft:brown_wool",
        "count": 6
      },
      "price": 74000
    }
    ```

***

### Sell Item
:material-identifier: `numismatic-overhaul:sell_stack`

The Villager **sells** the given stack for the given price

| Parameter | Description | Type |
| --- | --- | --- |
| `price` | Price in bronze coins | int |
| `sell` | The item to sell | ItemStack |

???+ example
    ```json
    {
      "type": "numismatic-overhaul:sell_stack",
      "sell": {
        "item": "minecraft:cookie",
        "count": 2
      },
      "price": 65,
      "max_uses": 2
    }
    ```

***

### Process Item
:material-identifier: `numismatic-overhaul:process_item`

Sells an item for another item and some money

| Parameter | Description | Type |
| --- | --- | --- |
| `sell` | The item to sell | ItemStack |
| `buy` | The item to process | ItemStack |
| `price` | The price in bronze coins | int |

???+ example
    ```json
    {
      "type": "numismatic-overhaul:process_item",
      "sell": {
        "item": "minecraft:diamond"
      },
      "buy": {
        "item": "minecraft:emerald"
      },
      "price": 2000
    }
    ```

***

### Sell Map
:material-identifier: `numismatic-overhaul:sell_map`

Sells a map for a specific structure

| Parameter | Description | Type |
| --- | --- | --- |
| `price` | The price in bronze coins | int |
| `structure` | The structure id, you can find these out using `/locate` | string |

???+ example
    ```json
    {
      "type": "numismatic-overhaul:sell_map",
      "structure": "minecraft:endcity",
      "price": 5,
      "villager_experience": 20
    }
    ```

***

### Sell Item in Dimension
:material-identifier: `numismatic-overhaul:dimension_sell_stack`

Sells the given stack for the given price, but only if the villager is in the given dimension

| Parameter | Description | Type |
| --- | --- | --- |
| `price` | The price in bronze coins | int |
| `sell` | The item to sell | ItemStack |
| `dimension` | The dimension to sell in | string |

???+ example
    ```json
    {
      "type": "numismatic-overhaul:dimension_sell_stack",
      "sell": {
        "item": "minecraft:cookie",
        "count": 2
      },
      "price": 65,
      "max_uses": 2,
      "dimension": "minecraft:the_end"
    }
    ```

***

### Sell Single Enchantment
:material-identifier: `numismatic-overhaul:sell_single_enchantment`

Sells a single random enchantment, prices are calculated based on the generated enchantments

| Parameter | Description | Type |
| --- | --- | --- |
| `price_multiplier` | Multiplier for the price | int *optional* |

???+ example
    ```json
    {
      "type": "numismatic-overhaul:sell_single_enchantment",
      "price_multiplier": 0.75
    }
    ```

***

### Sell Enchanted Item
:material-identifier: `numismatic-overhaul:enchant_item`

Sells an item enchanted at the given level, prices are calculated based on the generated enchantments

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| `level` | The level to enchant with, may exceed 30 | int | |
| `base_price` | A base price in bronze coins on which to base calculations | int *optional* | 200 |
| `allow_treasure` | Whether to allow treasure enchantments | boolean *optional* | false |
| `item` | The item to enchant | ItemStack *optional* | `minecraft:book` |

???+ example
    ```json
    {
      "type": "numismatic-overhaul:enchant_item",
      "base_price": 250,
      "level": 30,
      "allow_treasure": true,
      "item": {
        "item": "minecraft:diamond_sword"
      }
    }
    ```

***

### Sell Dyed Armor
:material-identifier: `numismatic-overhaul:sell_dyed_armor`

Sells a piece of randomly dyed piece of leather armor

| Parameter | Description | Type |
| --- | --- | --- |
| `item` | The ID of the item to dye | string |
| `price` | The price in bronze coins | int |

???+ example
    ```json
    {
      "type": "numismatic-overhaul:sell_dyed_armor",
      "item": "minecraft:leather_boots",
      "price": 200730
    }
    ```

*** 

### Sell Potion Container Item
:material-identifier: `numismatic-overhaul:sell_potion_container`

Sells an item that can have a potion effect applied (eg. potions, tipped arrows) with a random potion effect

| Parameter | Description | Type |
| --- | --- | --- |
| `container_item` | The item to apply the potion effect to | ItemStack |
| `buy_item` | The item to buy | ItemStack |
| `price` | The price in bronze coins | int |

???+ example
    ```json
    {
      "type": "numismatic-overhaul:sell_potion_container",
      "container_item": {
        "item": "minecraft:potion"
      },
      "buy_item": {
        "item": "minecraft:potion",
        "tag": {
          "Potion": "minecraft:water"
        }
      },
      "price": 76
    }
    ```