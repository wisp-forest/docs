---
title: Home
project: numismatic-overhaul
---

# Numismatic Overhaul

Welcome to the Numismatic Overhaul Wiki!  

## Useful Shortcuts
There are many useful shortcuts you can use to make your life easier when handling coins in Numismatic.  

- If you click the purse button while holding ++shift++, you can instantly **deposit ALL coins** in your inventory.  
    - This ignores Money Bags, so you don't have to worry when keeping tally of a certain amount.  

- If you hold ++shift++ while clicking the arrows in the purse, you can increase the counter in **steps of 10** instead of 1.  

- If you want to withdraw **every coin in your purse**, simply hold ++shift+ctrl++ and click the withdraw button

### Shop Blocks
The Shop Block is very useful for creating an economy with other players. For a reference on how they work, see their [own page here.](shop.md)

## Configuration
You might want to configure certain aspects of Numismatic Overhaul, whether you are a player, a modpack developer, or server admin.  

Some of the values are found in the **Configuration file**.  
You can find this file named `numismatic-overhaul.json5`, in your `.minecraft/config` folder.  

If you want to make or edit the villager trades, you need to make a Datapack following the [data format seen on this page.](trades.md) To disable them entirely, see [the section below.](#villager-trades)

### Dropped coins on death
By default you drop 10% of all the coins in your purse on death. To change this you only need to edit the gamerule `moneyDropPercentage`. You can do this when creating a world, or using the `/gamerule` command.  

**Example:** `/gamerule moneyDropPercentage 99` drops 99% of your coins on death.   

### Mob Drops
Only Pillagers in base Numismatic Overhaul drop currency. They randomly drop between 9 and 35 bronze coins, and occasionally a silver coin.  

To add more mobs to this list, you need to add them to the following entity tag:  
`numismatic-overhaul:the_bourgeoisie` 

### Villager Trades
By all villagers use coins instead of Emeralds when trading. Despite this Emeralds are still useful for a handful of vanilla things, for example building or activating a Beacon. 

If you do not want villagers to use Emeralds instead of coins, you can simply set the "Enable Villager Trading" option to false in the [config file](#configuration). 

Note that this option does not apply retroactively, meaning existing villagers will keep their old trades despite you changing this option. Unlocking new trades/finding new villagers will have the correct trades. 

### Moving the purse
The purse might not always be positioned correctly with other mods installed.  
Look for the values `purseX` and `purseY` in your [config file](#configuration).  

If you have **Mod Menu** installed, you can access the config via the "Configure" button.  

### Chest Loot
Numismatic Overhaul injects money bags into chest loot tables, which contain a varying amount of coins.  
As of version `0.2.4`, you are able to finely configure the amount of coins from structures via the [config file](#configuration).  

Here is a list of the loot tables that are affected by the "Structure" option:  

- Bastion Treasure Chests  
- Buried Treasure Chests  
- Chests in Stronghold Corridors  
- Pillager Outpost Chests   

*Note*: The "Dungeon Loot" option also affects Abandoned Mineshafts.  