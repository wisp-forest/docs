---
title: Home
project: accessories
---

# Accessories

Welcome to the Accessories Wiki such will attempt to cover the API for using Accessories systems and give examples to learn how to implement your own accessories! 

!!! tip "Work-in-progress"
    The Accessories documentation is still being improved, and currently lacks a quick start guide. If you are unsure about something, try to reference the JavaDoc or simply come ask in [our Discord](https://discord.gg/xrwHKktV2d) - we'll be happy to help

## Overview

Accessories is a data-driven accessory mod for NeoForge and Fabric and is designed to be loader agnostic. This allows for more common code base than typically implementations. The API is based on the works of [Curios](https://github.com/TheIllusiveC4/Curios) and [Trinkets](https://github.com/emilyploszaj/trinkets), with credit going to both [TheIllusiveC4](https://github.com/TheIllusiveC4) and [emilyploszaj](https://github.com/emilyploszaj) for their work on accessory mods for Minecraft.

## Features

- Full support for `LivingEntity`, meaning the API supports not players, but other mobs like Zombies, Skeletons or even Wolves!
- Integration with DataComponents, which allows any ItemStack to be usable as an accessory (useful for testing or just messing around). 
- A Unique Slot API, which allows for adjusting or restricting what slots exist for Accessories. This can be accessed with both code or datapacks.
- Events for adjusting behavior of Minecraft's mechanics depending on Accessories, like disabling Enderman aggro or Piglin neutrality.
- Optional compatibility layers for both Curios and Trinkets, which allows any accessory to be usable regardless of modpack configuration. 


### Why Accessories?

- More powerful and better API
- Better support for rendering accessories
- Supports multiloader setups, which makes porting and maintenance much easier
- Built-in vanity slots, which allows for more customization