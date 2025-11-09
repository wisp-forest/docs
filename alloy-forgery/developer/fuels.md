# Adding Fuels

Alloy Forgery loads fuels from a specific folder in data. The path is `data/<namespace>/alloy_forge_fuels`, and in here you put your fuel definition. A fuel file does not require a specific name, and can hold multiple different fuels. Currently, we only support items for fuels, tags are not accepted. An example is provided below: 

```JSON
{
  "fuels": [
    {
      "item": "minecraft:lava_bucket",
      "return_item": "minecraft:bucket",
      "fuel": 24000
    },
    {
      "item": "minecraft:coal",
      "fuel": 1000
    },
    {
      "item": "minecraft:charcoal",
      "fuel": 1000
    },
    {
      "item": "minecraft:blaze_rod",
      "fuel": 2000
    },
    {
      "item": "minecraft:coal_block",
      "fuel": 9000
    }
  ]
}
```  
The special field `return_item` is optional, and is used for returning an Item after being deposited into the Alloy Forge. An example is returning an Empty Bucket after inserting a Lava Bucket.