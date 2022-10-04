---
title: Exporting
project: isometric-renders
---

!!! tip ""
    **:octicons-clock-16: The Isometric Renders documentation is currently being rewritten - it is not accurate for versions >=0.3.0**

<br>

# Exporting

All exporting operations (including batches) use the parameters defined in the "Export" section of every render screen. This page details each option in what is does and what values are acceptable.

***
### :material-eyedropper: Background Color
This is the color the background of all renders will be. This is automagically keyed away when the images are saved, which can introduce artifacts should something you're rendering have spots of the same color. This field accepts hex color codes in RGB format.

***
### :material-export: Use External Renderer
If this option is unchecked, all renders will simply be screenshots of the gui with the background keyed away. This however means that you're limited to the vertical resolution of your monitor. Should you need bigger, or smaller for that matter, resolutions you can enable the external renderer which uses the resolution you specify in the *Renderer Resolution* field.

### :material-image-size-select-large: Renderer Resolution
The resolution which the external renderer uses. This has to be a power of two under normal conditions, to ensure nice scaling. If you want to try higher resolutions than 16384x16384, or non powers of two, use `/isorender insanity` to enable those. Be warned however, this can easily crash your client if you go too far.

***
### :material-shape-square-rounded-plus: Allow Multiple Export Jobs
When this is disabled, like it is by default, you can not manually add more than one job to the export queue (batch renders ignore this setting). This is to prevent running out of memory with bigger resolutions and just bad performance in general. If you have a few GB of ram available, you can safely turn this on when you need it.

***
### :material-folder: Dump Into Root
Under normal conditions all renders go into their respective subfolders like `.minecraft/renders/minecraft/entities/bee.png`. If you want easy access to all renders for a single project for example, toggle this on and all renders will be dumped into `.minecraft/renders/`