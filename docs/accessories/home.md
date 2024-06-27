---
title: Home
project: accessories
---

# Accessories

Welcome to the Accessories Wiki such will attempt to cover the API for using Accessories systems and give examples to learn how to implement your own accessories! 

**Currently underdevelopment and may be lacking in certain areas. Plans are in place to include a more tutorialized documentation on how you can create an accessory within the future.**\

## Overview

Accessories is a data-driven accessory mod for NeoForge and Fabric with its design around being loader agnostic allowing for more common code base than typically implementations. Such API is based on the works of [Curios](https://github.com/TheIllusiveC4/Curios) and [Trinkets](https://github.com/emilyploszaj/trinkets) with credit going to both [TheIllusiveC4](https://github.com/TheIllusiveC4) and [emilyploszaj](https://github.com/emilyploszaj) for their work on Accessory mods for Minecraft.

## Features

The benefits to alternative solutions are:

- Multi-loader mods can now have more common code for handling their implemented Accessory items
- All Entities of the Living Entity Variant can be used within the API meaning not just Player, but other mobs like Zombies, Skeletons or even dogs!
- Full support for NBT based Accessories with the ability to for instance an obsidian block give the player armor if placed within the ring slot!
- Unique Slot API for mods that need accessories specific to its mod for progression or mechanics to expand the experience
- Builtin Events for general adjustments to Minecraft's mechanics like Enderman Mask or Piglin neutrality.