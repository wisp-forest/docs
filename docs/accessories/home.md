---
title: Home
project: accessories
---

# Accessories

Welcome to the Accessories Wiki such will attempt to cover the API for using Accessories systems and give examples to learn how to implement your own accessories! 

**Currently underdevelopment and may be lacking in certain areas. Plans are in place to include a more tutorialized documentation on how you can create an accessory within the future.**

## Overview

Accessories is a data-driven accessory mod for NeoForge and Fabric with its design around being loader agnostic allowing for more common code base than typically implementations. Such API is based on the works of [Curios](https://github.com/TheIllusiveC4/Curios) and [Trinkets](https://github.com/emilyploszaj/trinkets) with credit going to both [TheIllusiveC4](https://github.com/TheIllusiveC4) and [emilyploszaj](https://github.com/emilyploszaj) for their work on Accessory mods for Minecraft.

## Features

The benefits to alternative solutions are:

- Multiloader design allowing for both Platform Specific mods and support for Multiloader mods using Common code area
- Datapackable/Programmatic Unique Slot API allowing for either more user adjustable design or more restrictive method for mod specific accessory handling
- ItemStack Data Component based Accessory system allowing for any item with proper data to be an accessory for datapack or just to mess around with.
- Compatibility layers for other competing Accessory APIs with Sinytra connector in mind for there designs.
- Builtin Events for general adjustments to Minecraft's mechanics like Enderman Mask or Piglin neutrality.