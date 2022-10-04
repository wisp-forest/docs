---
title: Options
project: owo
---

# Using the option system for fun and profit

## How and why
owo-config represents each option in your config as an instance of the `Option` class. You can obtain this internally used instance via the `optionByKey(...)` method on your wrapper by passing in the option's key. The returned object exposes a number of useful methods and properties of the option it represents.

In general, the options are a convenient way to handle the individual settings in a config programmatically. For actual usage in code it is usually preferable to use the methods generated on your wrapper, which internally delegate to their underlying options.

## Commonly interesting methods

### `backingField()`
Returns the field which is internally used to serialize the option's value and for storing the actual value when the `Option` object is detached. You can use it for annotation lookups as well as general reflection, if by getting the `field` record component. Technically, this also allows bypassing constraint and detached state, however any changes made won't actually ever apply.
 
### `constraint()`
Returns the constraint placed on this option's value, or `null` if the option is unconstrained. The returned object contains both a formatted description of the constraint and the actual predicate which you can use for verifying values.

### `observe(...)`
Registers a change callback which is invoked every time the value of this option actually *changes* - this means it won't be invoked if `set(...)` is called with a value for which the current value's `equals(...)` method returns `true`.
