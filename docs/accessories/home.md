---
title: Home
project: accessories
---

# Accessories

Welcome to the Accessories Wiki! This wiki attempts to how to use the API within Accessories, and gives examples to help you learn how to implement your own Accessories. 
These docs were written for the 1.2.0 version of Accessories and above, so if you are using any **older** versions there might be missing features or methods might have different names.

!!! tip "Work-in-progress"
    The Accessories documentation is still being improved, and currently lacks a quick start guide. If you are unsure about something, try to reference the JavaDoc or simply come ask in [our Discord](https://discord.gg/xrwHKktV2d) - we'll be happy to help

## Overview

Accessories is a data-driven accessory mod for NeoForge and Fabric and is designed to be loader agnostic. This allows for more common code base than typically implementations. The API is based on the works of [Curios](https://github.com/TheIllusiveC4/Curios) and [Trinkets](https://github.com/emilyploszaj/trinkets), 

### Credit

Thank you both [TheIllusiveC4](https://github.com/TheIllusiveC4) and [emilyploszaj](https://github.com/emilyploszaj) for their work on accessory mods for Minecraft. Combined with assistance of [Noaaan](https://github.com/Noaaan), [enjarai](https://github.com/enjarai), and [bconlon](https://github.com/bconlon1) for reviewing this documentation. 

#### Why Accessories?

- More powerful and better API
- Better support for rendering accessories
- Supports multiloader setups, which makes porting and maintenance much easier
- Built-in vanity slots, which allows for more customization

## Features

- Multiloader design allowing for both Platform Specific mods and support for Multiloader mods using Common code area
- Full support for `LivingEntity`, meaning the API supports not only players, but other mobs like Zombies, Skeletons or even Wolves!
- Integration with DataComponents, which allows any ItemStack to be usable as an accessory (useful for testing or just messing around). 
- Datapackable/Programmatic Unique Slot API allowing for either more user adjustable design or more restrictive method for mod specific accessory handling
- Events for adjusting behavior of Minecraft's mechanics depending on Accessories, like disabling Enderman aggro or Piglin neutrality.
- Optional compatibility layers for both competing Accessory APIs, which allows any accessory to be usable regardless of modpack configuration. 
    - Designed with Sinytra Connector in mind!
- Fully configurable support for gliders (I.E. Elytra), Totems, and Banners out of the box!