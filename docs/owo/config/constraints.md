---
title: Constraints
project: owo
---

There are three types of constraints you can put on your config options to declare which values are acceptable. If an option's value does not match its constraint during loading, it will be reset to its default value. If you try to apply an invalid value via code, the option will remain unchanged.

***

### `@RegexConstraint`
This type of constraint applies to `String` config options and allows values which match the given regular expression

Example:
```java
@RegexConstraint("[a-z]{1,10}")
public String aStringOption = "matched";
```

***

### `@RangeConstraint`
This type of constraint applies to numeric options and allows values which are between `min` and `max`, both *inclusive*

Example:
```java
@RangeConstraint(min = 10, max = 20)
public int anIntOption = 16;

@RangeConstraint(min = 5.5d, max = 11.3d)
public double aDoubleOption = 7.5;
```

***

### `@PredicateConstraint`
This type of constraint applies to any field and allows values which match the given predicate function. You declare said function as a `static` method on your config model class and pass its name into the annotation.

Example:
```java
@Config(...)
public class MyConfigModel {

    // we want to only allow lists of length 5
    @PredicateConstraint("predicateFunction")
    public List<String> someOption = new ArrayList<>(List.of("1", "2", "3", "4", "5"));

    // so we declare a predicate method
    public static boolean predicateFunction(List<String> list) {
        // and do the check in here
        // this could be arbitrarily complex code, but
        // we'll keep it simple for this demonstration
        return list.size() == 5;
    }

}
```
