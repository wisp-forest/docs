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

- If you are holding ++shift++ while clicking the arrows while withdrawing, you are able to increase the counter in **steps of 10** instead of 1.  

- If you want to withdraw **every coin in your purse**, simply hold ++shift+ctrl++ while clicking the withdraw button.  

### Shop Blocks  
The Shop Block is very useful for creating an economy with other players.  
For a reference on how they work, see their [own page here.](shop.md)

## Configuration
You might want to configure certain aspects of Numismatic Overhaul, whether you are a player, a modpack developer, or server admin.  
If you want to make or edit the villager trades, you need to make a Datapack following the [data format seen on this page.](trades.md)  

Some of the values are found in the **Configration file**.  
You can find this file named `numismatic-overhaul.json5`, in your `.minecraft/config` folder.  

### Dropped coins on death  
By default you drop 10% (10) of all the coins in your purse on death.  
To change this you only need to edit the gamerule `moneyDropPercentage`.  
You can do this when creating a world, or using the `/gamerule` command.  

Example:  `/gamerule moneyDropPercentage 99` drops 99% of your coins on death.   

### Mob Drops  
Only Pillagers in base Numismatic Overhaul drop currency.  
They randomly drop between 9 and 35 bronze coins, and occasionally a silver coin.  

To add more mobs to this list, you need to add them to the following entity tag:  
`numismatic-overhaul:the_bourgeoisie` 

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