---
outline: [2, 3]
---

# Layout

braid uses a straightforward layout algorithm which is guaranteed to perform in linear time over the number of widgets. It proceeds in three stages:

1. **The parent passes constraints to its children, specifying a minimum and a maximum possible size.**

   When these sizes are identical on an axis, the axis is said to be *tightly constrained*. When the minimum size is zero on an axis, this axis is said to be *loosely constrained*. If the widget has no parent (i.e. it is at the root of the tree), it is tightly constrained to fill the entire screen or whichever other surface braid is rendering to.
2. **The child performs its layout calculations** (oftentimes repeating this algorithm for its own children) **and decides on a final size which it reports back to the parent.**

   This size must be within the constraints passed down by the parent.
3. **The parent, now knowing the exact size the child will have, sets its position.**

   All positions in braid are expressed in the coordinate space of the parent, which it can arbitrarily define.

This nicely summarizes as follows, which anyone familiar with Flutter will no doubt recognize:
> Constraints go down, sizes go up, parent sets position.

## Layout Widgets

braid includes a few essential layout widgets which you'll need to know about. Assuming you've read [Getting Started](getting-started.md), you'll already be familiar with `Center` and `Padding`.

### `Padding`
Padding inserts dead space around its child. It accepts a `Insets` object which specifies the padding for each edge separately and an optional child. If no child is provided, the widget just reserves the space dictated by the insets. When a child is provided, Padding tries to take up as much space as it needs to fit both the insets and its child. If it runs out of space trying, it will shrink the child to fit.

```java
// insert 5 pixels of padding on all sides
new Padding(
   Insets.all(5),
   new BraidLogo()
)
```

### `Align` and `Center`
Align takes an alignment and a child, grows to take up as much space as it is allowed to and aligns its child within that space as requested. The `Alignment` object specifies alignment on both axes, from 0 (meaning left on the horizontal and top on the vertical) to 1. The common alignments are provided as constants and instantiating an `Alignment` manually should rarely be necessary.

When an axis is unconstrained (like is the case inside a scroll view), Align shrinks to the size of its child. Alternatively, a width and height factor can be provided which forces to the Align to be the size of its child multiplied by the factor for that axis (subject to incoming constraints of course).

Center is a specialization of Align where the alignment is always center, everything else applies the same.

Both alignment widgets loosen the constraints passed to their children so that they are always allowed to be smaller than the alignment widget itself.

:::code-group
```java [Center]
// center the logo within the available space
new Center(
   new BraidLogo()
)
```

```java [Grow and align]
// move the logo to the bottom right of the
// available space
new Align(
   Alignment.BOTTOM_RIGHT,
   new BraidLogo()
)
```

```java [Align with size factors]
new Align(
   Alignment.TOP_LEFT,
   1.5, // width factor
   1.5, // height factor
   new BraidLogo()
)
```
:::

### `Sized` and `Constrain`
Sized accepts a width, a height (in pixels, both optional) and a child and, subject to incoming constraints, forces its child to have exactly those dimensions on the respective axes. It is a specialized version of Constrain.

Constrain accepts a set of [constraints](#layout) and a child which it passes those constraints to during layout. This can be used to, for instance, specify a range of acceptable sizes for the child.

::: code-group
```java [Sized]
// squish the braid logo on the vertical axis
new Sized(
   null,
   32, // the braid logo is normally 64x64, so this
       // makes it half that size vertically
   new BraidLogo()
)
```

```java [Constrain]
// force the braid logo to twice its normal size
new Constrain(
   Constraints.only(
      128.0, // minimum width
      128.0, // minimum height
      null,  // no maximum width
      null   // no maximum height
   ),
   new BraidLogo()
)
```
:::

## Layout Types

braid comes with three major layout types out of the box: Flex, Grid and Stack. The following sections will discuss each in detail.

### `Flex`: `Row` and `Column`

Flex widgets place their children one after another on their so-called main axis (which you must specify). The children are laid out unconstrained on the main axis and with cross-axis constraints passed down unmodified. This means that if the cross-axis is tightly constrained, the children will be too.

An optional separator widget can be specified, which is placed between every child. This can be used, for instance, to insert a gap between all children with a Padding widget.

Alignment on both the main and cross axis can be optionally specified, defaulting to `start` alignment for both. On the vertical axis this means top, on the horizontal axis it means left.

#### Flexible Children

Since dropping the main axis constraints for all children is not always desired, one or multiple children can be made *flexible* by wrapping them in a `Flexible` widget. It is essential that the path between the Flexible widget and the Flex which is supposed to contain it only contains stateless and stateful widgets - not instance widgets like `Label` or `Padding`. Flexible children are laid out after all non-flexible children, and are tightly constrained on the main axis to fill the space which remained after laying out the non-flexible children. If there is more than one flexible child, the space is divvied up between them according to their *flex factor*. For instance, if a Flex has two flexible children with flex factors 3 and 1, the one with flex factor 3 will be three times as large as the other one.

Row and Column are two specializations of Flex, where the main axis is always horizontal and vertical respectively. Everything in this section applies to them.

::: code-group
```java [Vertical Flex]
new Flex(
   LayoutAxis.VERTICAL,        // main axis is vertical
   MainAxisAlignment.END,      // align to the end of the main axis, i.e. the bottom
   CrossAxisAlignment.STRETCH, // stretch the cross axis to its maximum possible size
                               // and force the children to fill it
   Label.literal("child 1"),
   Label.literal("child 2")
)
```

```java [Row]
new Row(                     // main axis is always horizontal in a row
                             // by not specifying alignment for either axis,
                             // we default to start alignment on both
   Label.literal("child 1"), 
   Label.literal("child 2")
)
```

```java [Column]
new Column(                     // main axis is always vertical in a row
   MainAxisAlignment.CENTER,    // by setting the alignment to center on both axis we'll
   CrossAxisAlignment.CENTER,   // achieve the same thing a Center widget would

   new Padding(Insets.all(2)),  // we specify a separator (just padding in this case) to
                                // space the children out nicely
   List.of(
      Label.literal("child 1"), // when using a separator, we must specify the children
      Label.literal("child 2")  // in a List to differentiate the method signature and
   )                            // tell braid which widget should be the separator
)
```
:::

### `Grid`
Grid widgets arrange their children into a grid where each child occupies at most one cell. Each Grid must specify a `CellFit` which decides how children are fit into their cells: If it is tight, the children receive tight constraints forcing them to fill their respective cells. If it is loose, the children receive loose constraints capped at the respective cell's size. If they end up smaller than their cell, they'll be aligned within it according to the alignment specified in the cell fit.

The children of a grid are assigned to the cross axis first, up to the specified number of `crossAxisCells` after which they wrap and form a new row/column on the main axis. When a child is specified as `null`, the cell assigned to it by this algorithm is left empty.

An optional cell wrapper function can be specified, which must produce a widget 

#### Cell Layout Details

The maximum and minimum size of the cells on each axis are dictated by that axis' respective min and max constraints divided by the number of cells which exist on the axis. Thus, when an axis receives tight constraints, each of its cells will be exactly the size of those constraints divided by the number of cells on the axis. When an axis is loosely constrained, its cells grow to accommodate the largest of their sibling cells on the opposite axis.

When the cell fit is tight and axis is loosely constrained, the grid first measures how large the children in each row and column would be on their own and then passes tight constraints filling the cells to all children.

::: tip Performance Considerations
Measuring the sizes of all children (even on just one axis), necessitates an additional pre-layout pass (called the intrinsic layout pass) which means that the children of your grid will effectively be laid out twice for each layout iteration. See the [intrinsics page](intrinsic-layout.md) for more information.
:::

```java
new Sized(                  // since the boxes we'll be using are unsized,
   40.0, 60.0,              // we set the size of the grid explicitly
   new Grid(
      LayoutAxis.VERTICAL,  // main axis is vertical:
      2,                    // thus, 2 cross-axis cells means two columns

      Grid.CellFit.tight(), // we force all children to fill their cells
                            // and since the grid is tightly constrained, each
                            // cell will be exactly 20x20 pixels

      new Box(Color.WHITE), // arrange some white and black boxes such that
      new Box(Color.BLACK), // they create a checkerboard
      new Box(Color.BLACK),
      new Box(Color.WHITE),
      new Box(Color.WHITE),
      new Box(Color.BLACK)
   )
)
```

### `Stack`
Stack accepts a list of widgets, together with an optional alignment, and places its children on top of each other (in the depth dimension) with later children on top. Constraints are passed to the children unmodified and the Stack sizes itself to its largest child.

Children which end up smaller than the stack are aligned according the specified alignment, which defaults to center.

#### Specifying a sizing base
A single child of a stack can be wrapped in a `StackBase` widget, which marks that widget as the definitive sizing rule for the entire stack, i.e. all other children are forced to have the same size as the base. This is useful for emulating the behavior of widgets which are placed inside one another in situations where that itself is not possible.

It is essential that the path between the `StackBase` widget and the Stack which is supposed to contain it only contains stateless and stateful widgets - not instance widgets like `Label` or `Padding`.

::: code-group
```java [Stack]
// for this example to work, we assume the stack (and thus
// its children) is loosely constrained
new Stack(
   Alignment.BOTTOM_RIGHT,
   new Sized(
      Size.square(60),
      new Box(Color.RED)
   ),
   new Sized(
      Size.square(40),
      new Box(Color.GREEN)
   ),
   new Sized(
      Size.square(20),
      new Box(Color.BLUE)
   )
)
```

```java [Stack with base]
new Stack(
   new SpriteWidget(
      new SpriteIdentifier(
         SpriteAtlasTexture.BLOCK_ATLAS_TEXTURE,
         Identifier.ofVanilla("block/lava_flow") // the lava flow sprite is 32x32, which is smaller than
      )                                          // the 64x64 braid logo
   ),
   new StackBase(                                // but by making the logo the base, the lava will be
      new BraidLogo()                            // force to have the same size, effectively using it
   )                                             // as a backdrop for the logo
)
```
:::

## Code samples
All code samples on this page can be found in [the repository](https://github.com/wisp-forest/owo-lib/tree/braid-ui/src/testmod/java/io/wispforest/owo/samples/braid/layout). If you want to check them out in-game, launch the owo testmod, give yourself an `uwu:braid_samples` item, use it and open the "Layout Widget Examples".