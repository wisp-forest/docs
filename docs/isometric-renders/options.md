---
title: Options
project: isometric-renders
template: math.html
---

# Options

All render screens share the settings in the **Render Options**, **Export Options** and **Animation Options** categories. This page details what each option does and how they are useful. All options marked with :material-restore-alert: reset every time you close the screen

***

## Render Options

### :material-eyedropper: Background Color
This is the background color used for [Studio Mode](home.md#studio-mode). It is not used in any other situations and thus you can usually ignore it.

### :octicons-clock-16: Run Animations
:material-restore-alert: This toggle controls whether your render is ticked. This mostly has a visible effect on entities, as they don't display any animations when this option is disabled. If particles look choppy, enable this as it also toggles tick interpolation on your render.

### :fontawesome-solid-wand-magic-sparkles: Show Particles
:material-restore-alert: With this option you can globally enable/disable particle spawning. While it is disabled, no particles can be emitted by your render. Do note that for this option to have any effect, [Run Animations](#run-animations) needs to be **enabled** - your render cannot create any particles while it is not being ticked.

## Export Options

### :material-folder: Dump Into Root
If this option is enabled, every render will be saved directly into `.minecraft/renders/`. If you like you renders to be saved in a more organized fashion, disable this setting and every render will be saved into its respective subfolder. A render of a Bee for example would be saved as `.minecraft/renders/minecraft/entity/bee.png`. 

### :material-content-duplicate: Overwrite latest file
Usually, a new render will not overwrite an older one - instead, the filenames will count up as you add more renders. If you don't care about previous iterations and just want to get this one render right, enable this option and the most recent render will be overwritten instead. 

### :material-image-size-select-large: Export Resolution
The resolution at which to export your renders. Every render is sqaure and under normal circumstances this field will not accept values larger than 16384. If you need higher resolutions and want to take the risk of your computer malding, enable [Unsafe Mode](home.md#unsafe-mode)

## Animation Options

### :fontawesome-regular-images: Animation Frames
How many individual frames should be rendered to create an animation. The final length of the animation in seconds is equal to $\frac{animation frames}{animation framerate}$

### :material-fast-forward-60: Animation Framerate
How many frames the exported animation should display per second. This, together with the amount of frames, determines the final length of the exported animation
