# Layout

braid uses a straightforward layout algorithm which is guaranteed to perform in linear time over the number of widgets. It proceeds in three stages:

1. **The parent passes constraints its children, specifying a minimum and a maximum possible size.**

   When these sizes are identical on an axis, the axis is said to be *tightly constrained*. When the minimum size is zero on an axis, this axis is said to be *loosely constrained*. If the widget has no parent (ie. it is at the root of the tree), it is tightly constrained to fill the entire screen or whichever other surface braid is rendering to.
2. **The child performs its layout calculations** (oftentimes repeating this algorithm for its own children) **and decides on a final size which it reports back to the parent.**

   This size must be within the constraints passed down by the parent.
3. **The parent, now knowing the exact size the child will have, sets its position.**

   All positions in braid are expressed in the coordinate space of the parent, which it can arbitrarily define.

This nicely summarizes as follows, which anyone familar with Flutter will no doubt recognize:
> Constraints go down, sizes go up, parent sets position.

## Layout Widgets

braid includes a few essential layout widgets which you'll need to know about. Assuming you've read [Getting Started](getting-started.md), you'll already be familar with `Center` and `Padding`.

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
   2, // width factor
   2, // height factor
   new BraidLogo()
)
```
:::

### `Sized` and `Constrain`
Sized accepts a width, a height (in pixels, both optional) and a child and, subject to incoming constraints, forces its child to have exactly those dimensions on the respective axes. It is a specialized version of Constrain.

Constrain accepts a set of [constraints](#layout) and a child which it passes those constraints to during layout. This can be used to, for instance, specifiy a range of acceptable sizes for the child.

::: code-group
```java [Sized]
// squish the braid logo on the vertical axis
new Sized(
   null,
   32, // the braid logo is nomrally 64x64, so this
       // makes it half that size vertically
   new BraidLogo()
)
```

```java [Constrain]
// force the braid logo to twice its normal size
new Constrain(
   Constraints.only(
      128, // minimum width
      128, // minimum height
      null, // no maximum width
      null // no maximum height
   )
   new BraidLogo()
)
```
:::

## Layout Types

braid comes with three major layout types out of the box: Flex, Grid and Stack. The following sections will discuss each in detail.

### `Flex`: `Row` and `Column`