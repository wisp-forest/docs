# Trade Data Formatting

All trade definition files belong in `data/numismatic-overhaul/villager_trades`

You can define as many files for a villager profession as you like, although we discourage you to have multiple per profession in a single mod, for the sake of simplicity.  

All the trades are collected based on profession, and for each level the villager randomly picks their trades.  

**Wandering Trader**  
The Wandering Trader is a special case. Its profession id is `wandering_trader`, and he only requires trades for `novice` and `apprentice` levels. Any other trades will not load.  

***

## File Format
Each trade definition file needs two elements in the root object: 

`profession`: The profession the following trades are for, without namespace (eg. `"profession": "farmer"`)

`trades`: The trades for this profession, wrapped in JsonArrays prefixed by the respective level

**Example:**
```
{
  "profession": "farmer"
  "trades":{
    "novice": [
      {
        "type": ...
        ..options...
      },
      {
        "type": ...
        ..options...
      }
      ...
    ]
  }
}
```

### ItemStack format
`id`: The item id **string**

`count`: The item count **int** *optional*  

`tag`: An NBT tag **JsonObject** *optional*

**Example:**
```
{
  "id": "minecraft:diamond_pickaxe",
  "count": 1
  "tag": {
    "Damage": 75
  }
}
```

## Trade Types
All trade types have these optional parameters:

`price_multiplier`: The multiplier to apply when a player has gossip **float** *default: 0.05*

`max_uses`: The max uses of this trade before restocking **int** *default: 12*

`villager_experience`: The experience awarded to the villager when using this trade **int** *default: 5*

***

### Buy ItemStack
ID: `numismatic-overhaul:buy_stack`

The Villager __buys__ the given stack for the given price

**Parameters:**

`price`: Price in bronze coins **int**

`buy`: The item to buy **ItemStack definition**

**Example:**
```
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

### Sell ItemStack
ID: `numismatic-overhaul:sell_stack`

The Villager __sells__ the given stack for the given price

**Parameters:**

`price`: Price in bronze coins **int**

`sell`: The Item to sell **ItemStack definition**

**Example:**
```
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
ID: `numismatic-overhaul:process_item`

Sells an item for another item and some money

**Parameters:**

`sell`: The item to sell **ItemStack definition**

`buy`: The item to process **ItemStack definition**

`price`: The price in bronze coins **int**

**Example:**
```
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
ID: `numismatic-overhaul:sell_map`

Sells a map for a specific structure

**Parameters:**

`price`: Price in bronze coins **int**

`structure`: The structure id, you can find these out using `/locate` **string**

**Example:**
```
{
  "type": "numismatic-overhaul:sell_map",
  "structure": "minecraft:endcity",
  "price": 5,
  "villager_experience": 20
}
```

***

### Sell ItemStack in dimension
ID: `numismatic-overhaul:dimension_sell_stack`

Sells the given stack for the given price, but only if the villager is in the given dimension

**Parameters:**

`price`: Price in bronze coins **int**

`sell`: The Item to sell **ItemStack definition**

`dimension`: The target dimension **String**

**Example:**
```
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
ID: `numismatic-overhaul:sell_single_enchantment`

Sells a single random enchantment, prices are calculated based on the generated enchantments

`price_multiplier`: Multiplier for the price **float** *optional*

**Example:**
```
{
  "type": "numismatic-overhaul:sell_single_enchantment",
  "price_multiplier": 0.75
}
```

***

### Sell Enchanted Item
ID: `numismatic-overhaul:enchant_item`

Sells an item enchanted at the given level, prices are calculated based on the generated enchantments

**Parameters:**

`level`: The level to enchant with, can go above lvl 30 **int**

`base_price`: The basic price in coins, which is used with the enchantment calculation **int** *default: 200*

`allow_treasure`: Whether to allow treasure enchantments **boolean** *optional*

`item`: The item to enchant, defaults to book **ItemStack definition** *optional*

**Example:**
```
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
ID: `numismatic-overhaul:sell_dyed_armor`

Sells a piece of randomly dyed piece of leather armor

**Parameters:**

`item`: The id of the item do dye **string**

`price`: The price in bronze coins **int**

**Example:**
```
{
  "type": "numismatic-overhaul:sell_dyed_armor",
  "item": "minecraft:leather_boots",
  "price": 200730
}
```

*** 

### Sell Potion Container Item
ID: `numismatic-overhaul:sell_potion_container`

Sells an item that can have a potion effect applied(eg potions, tipped arrows) with a random potion effect

**Parameters:**

`container_item`: The item to apply the potion effect to **ItemStack definition**

`buy_item`: The item to buy **ItemStack definition**

`price`: The price in bronze coins **int**

**Example:**
```
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