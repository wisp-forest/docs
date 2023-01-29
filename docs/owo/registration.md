---
title: Registration
project: owo
---

!!! note ""
    The further down this article goes, the more advanced it becomes and the less likely it is you will need the information for a simple mod.

## Basics
:octicons-tag-24: 0.1.3

oωo offers a flexible system for automatically registering things into `Registry` instances. It revolves around the idea of storing the values to be registered into `public static` fields of a class. Consider this example:
```java
public class ItemInit {

    public static final Item BLACKBERRY = new Item(...);
    public static final Item BANANA = new Item(...);
    ...

    public static void init() {
        Registry.register(Registry.ITEM, Mod.id("blackberry"), BLACKBERRY);
        Registry.register(Registry.ITEM, Mod.id("banana"), BANANA);
        ...
    }

}
```

Because all this class does is register each of its fields into the `ITEM` registry, it can be easily shortened by implementing `ItemRegistryContainer`

```java
public class ItemInit implements ItemRegistryContainer {

    public static final Item BLACKBERRY = new Item(...);
    public static final Item BANANA = new Item(...);
    ...
    public static final String notAnItem = "this will be ignored";
    ...
}
```

As you can see, basically all boilerplate was eliminated and the code is now entirely declarative. Now you might be wondering when your items will be registered. Luckily, you still get to keep full control of that. Instead of calling `init()`, you now use the `FieldRegistrationHandler`.

```java
public class ModInit implements ModInitializer {

    public static final String MOD_ID = "based";

    @Override
    public void onInitialize() {
        ... // before
        ItemInit.init();
        ...

        ... // after
        FieldRegistrationHandler.register(ItemInit.class, MOD_ID, false);
        ...
    }
}
```

All the fields of your `ItemInit` class will now be registered the moment you call this method. Their IDs will be determined by the name of the field prefixed with the namespace you passed to the handler - e.g. the `BANANA` in this example would be registered as `based:banana`. The sneaky `String` inside the `ItemInit` class will be ignored - in fact, any field that does not match or extend the type you're registering will be.

### Blocks

Blocks are a bit of a special case because each block usually also requires a `BlockItem`. Conveniently, the `BlockRegistryContainer` takes care of that. You can just implement it without declaring any methods, however you won't get any control over the generated `BlockItem`s that way. As such, it is normally a good idea to also implement `createBlockItem(...)` in your class.

```java
public class BlockInit implements BlockRegistryContainer {

    public static final Block CLEAR_GLASS = new Block(...);

    @NoBlockItem // available since 0.3.13+1.18
    public static final Block DEBUG_BLOCK = new Block(...);

    @Override
    public BlockItem createBlockItem(Block block, String identifier) {
        return new BlockItem(block, new Item.Settings().group(Mod.MOD_GROUP));
    }
}
```
As you can see, you get full control over the BlockItem which is created. You might also have noticed the `@NoBlockItem` annotation on the debug block. It simply tells the registration system that this specific block should not have an item created for it.

### Non-Standard types
Up to this point, we've been using the pre-defined implementations of `AutoRegistryContainer<T>` that oωo provides. These don't exist for all registries however, thus we need to make our own. Implementing this interface is trivial though, we only need to provide the type of field to register as well as the matching `Registry`.

```java
public class BlockEntityInit implements AutoRegistryContainer<BlockEntityType<?>> {
    
    public static final BlockEntityType<ModBlockEntity> MOD_BLOCK_ENTITY = FabricBlockEntityTypeBuilder.create(...).build();
    
    @Override
    public Registry<BlockEntityType<?>> getRegistry() {
        return Registry.BLOCK_ENTITY_TYPE;
    }

    @Override
    @SuppressWarnings("unchecked")
    public Class<BlockEntityType<?>> getTargetFieldType() {
        return (Class<BlockEntityType<?>>) (Object) BlockEntityType.class;
    }
}
```

You may notice that there is some nasty casting going on inside `getTargetFieldType()`. You can safely copy and ignore it should you need it yourself, it is simply here to talk the compiler into doing its job.

### Running extra work after registration
Should you have some work you would have usually executed at the end of you `init()` method, you can implement the `afterFieldProcessing()` method on your container class.

```java
public class BlockInit implements BlockRegistryContainer {

    ...

    @Override
    public void afterFieldProcessing() {
        // do extra work here
    }
}
```

## Advanced Usage
### Annotations
```java 
@AssignedName
```
This annotation may be used if you wish your field to have a different name than the one it has in code. Refer to this example:
```java
public class ItemInit implements ItemRegistryContainer {

    public static final Item BANANA = new Item(...);
    // registered as 'mod_id:banana'

    @AssignedName("apple")
    public static final Item ORANGE = new Item(...);
    // registered as 'mod_id:apple' instead of 'mod_id:orange'
}
```

***

```java 
@IterationIgnored
```
Signals the `FieldRegistrationHandler` that the annotated field should be ignored when processing the class. Refer to this example:
```java
public class ItemInit implements ItemRegistryContainer {

    public static final Item BANANA = new Item(...);

    @IterationIgnored
    public static final Item NOT_REGISTERED = new Item(...);
}
```

### Inner classes
Should you want to organize your container class with subclasses, you're in luck as the system fully supports this scheme. In fact, there is an intended use-case - registering fields into different namespaces. To make use of this, create an inner class which implements the same type of registry container as the outer one. Then, annotate it with the `@RegistryNamespace` annotation to override the namespace of the generated identifiers.
```java
public class ItemInit implements ItemRegistryContainer {

    // registered as 'mod_id:banana'
    public static final Item BANANA = new Item(...);

    @RegistryNamespace("inner_class")
    public static class Inner implements ItemRegistryContainer {

        // registered as 'inner_class:damascus_ingot'
        public static final Item DAMASCUS_INGOT = new Item(...);
    }
}
```
Finally, to make this work, change the last argument in the call to `FieldRegistrationHandler.register(...)` to `true`. This tells it to also search the inner classes of the target class, which we usually keep disabled.

### Non-registry targets
As the field-traversal system used by the `AutoRegistryContainer<T>` is generic and exposed as part of oωo's API, you can also use to iterate the fields of something non-registry related.

Say, for example, you had a class which does many complex things and that needs to be initialized. Further imagine you had multiple instances of it stored in the fields of a container class. You could then implement `SimpleFieldProcessingSubject<T>` on that container class and initialize them all at once.
```java
public class ComplexInit implements SimpleFieldProcessingSubject<ComplexThing> {

    public static final ComplexThing A_COMPLEX_THING = new ComplexThing(...);
    public static final ComplexThing ANOTHER_COMPLEX_THING = new ComplexThing(...);
    ...

    @Override
    public void processField(ComplexThing thing, String identifier, Field field) {
        thing.init();
    }

    @Override
    public Class<ComplexThing> getTargetFieldType() {
        return ComplexThing.class;
    }
}
```

To then execute this code, simply use the `FieldRegistrationHandler`
```java
FieldRegistrationHandler.processSimple(ComplexInit.class, false);
```
For further information on how this system works and what it can do, take a look at the [javadoc](https://docs.wispforest.io/javadoc/owo/io/wispforest/owo/registration/reflect/package-summary.html) for the `io.wispforest.owo.registration.reflect` package.

### Determining block item settings with annotations 
:octicons-tag-24: 0.3.13+1.18

Sometimes, you might want to change the `Item.Settings` of a block item only for some blocks in your `BlockRegistryContainer`. If this applies to one or two of them, a simple `if (...)` in the `createBlockItem` method should suffice, but if a more flexible system is desired you can override `postProcessField(...)` in your container class. 

This method has a default implementation that simply calls `createBlockItem`, but we won't do that anymore and instead directly create the item in there. This has the advantage of having the `Field` object available, so annotation lookups are possible. First, let's define our annotation, in its own class file:

```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface NoItemGroup {}
```

This is just a simple annotation with no value that can only applied to a field and that is retained for runtime-access, unlike the default `SOURCE` policy. 

We can then use it to annotate a field and check for its presence in our overridden `postProcessField(...)` method.

```java
public class BlockInit implements BlockRegistryContainer {

    public static final Block CLEAR_GLASS = new Block(...);

    @NoItemGroup
    public static final Block DEBUG_BLOCK = new Block(...);

    @Override
    public void postProcessField(String namespace, Block value, String identifier, Field field) {
        // preserve normal traversal behaviour
        if (field.isAnnotationPresent(NoBlockItem.class)) return;

        // create basic item settings
        var settings = new Item.Settings();

        // check if our annotation is present and only 
        // assign the itemgroup if it is not
        if (!field.isAnnotationPresent(NoItemGroup.class)){
            settings.group(Mod.MOD_GROUP)
        }

        // finally, create and register the block item
        Registry.register(Registry.ITEM, new Identifier(namespace, identifier), new BlockItem(value, settings)));
    }
}
```

This is only a simple example, although it should make it clear how this system can be expanded to cover more of the items' properties.