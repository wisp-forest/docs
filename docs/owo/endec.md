---
title: Endecs
project: owo
---

!!! tip "Work-in-progress"
    The Endec documentation is still being written and not quite complete yet. If you are unsure about something, try to reference the JavaDoc or simply come ask in [our Discord](https://discord.gg/xrwHKktV2d) - we'll be happy to help

The Endec API is a format-agnostic serialization framework conceptually related to [serde](https://serde.rs) and interoperable with Mojang's own Codec API (found in [DFU](https://github.com/Mojang/DataFixerUpper) and used throughout the vanilla codebase). Given the endec for a certain type, it can be serialized to and from any format with a (`De`)`Serializer` implementation.

Importantly, endecs can serialize to both sequential and hierarchical formats - this means that, contrary to DFU's Codec, **endecs can be used directly for networking** without needing an intermediary format like NBT and wasting a bunch of space on structure information.

## The Data Model

The framework models all possible serialized formats using the following 11 primitive and 4 compound types which each (de)serializer must support. This table lists the types with their representations in NBT and JSON:

| Type     | Description                                                                 | NBT          | JSON                    |
|----------|-----------------------------------------------------------------------------|--------------|-------------------------|
| byte     | Signed 8-bit integer                                                        | NbtByte      | JsonPrimitive           |
| short    | Signed 16-bit integer                                                       | NbtShort     | JsonPrimitive           |
| int      | Signed 32-bit integer                                                       | NbtInt       | JsonPrimitive           |
| var_int  | Signed 32-bit [variable-length](https://wiki.vg/VarInt_And_VarLong) integer | NbtInt       | JsonPrimitive           |
| long     | Signed 32-bit integer                                                       | NbtLong      | JsonPrimitive           |
| var_long | Signed 64-bit [variable-length](https://wiki.vg/VarInt_And_VarLong) integer | NbtLong      | JsonPrimitive           |
| float    | Single-precision floating point number                                      | NbtFloat     | JsonPrimitive           |
| double   | Double-precision floating point number                                      | NbtDouble    | JsonPrimitive           |
| boolean  | true or false                                                               | NbtByte      | JsonPrimitive           |
| string   | A UTF-8 character sequence                                                  | NbtString    | JsonPrimitive           |
| bytes    | A sequence of bytes                                                         | NbtByteArray | JsonArray               |
| optional | A single value or nothing                                                   | NbtCompound  | JsonElement \| JsonNull |
| sequence | Sequence of values, each of the same type                                   | NbtList      | JsonArray               |
| map      | Mapping from strings to single values                                       | NbtCompound  | JsonObject              |
| struct   | Mapping from strings to single values with all keys statically known        | NbtCompound  | JsonObject              |

???+ info "Optional fields in JSON and NBT"
    For both JSON and NBT, when the optional being serialized is the field of a struct, the field will be omitted to indicate an empty optional and simply be the value otherwise

## Using Endecs

The framework comes with a number of built-in endecs ready for you to use - the 11 primitive types from the data model accessible as constants on the `Endec` interface and the rest in the `BuiltInEndecs` class. Additionally, any DFU codec, vanilla or modded, can be used through `Endec.ofCodec`

Now, say we want to encode a single `BlockPos` as JSON. For this, we use the endec supplied in `BuiltInEndecs`, the `JsonSerializer` class and the `Endec#encodeFully` method - like this:

```java
var pos = new BlockPos(1, 2, 3);
JsonElement result = BuiltInEndecs.BLOCK_POS.encodeFully(JsonSerializer::of, pos);
```

If you now printed this result, it'd look something like this: `[1,2,3]`. Next, let's turn this JSON back into a `BlockPos`. For this we use the same endec as we used for encoding, the `JsonDeserializer` class and the `Endec#decodeFully` method:

```java
BlockPos decoded = BuiltInEndecs.BLOCK_POS.decodeFully(JsonDeserializer::of, result);
```

Unlike DFU, if an endec encounters an error while decoding it throws an exception - so make sure you catch those if you're deserializing unknown data.

## Building Endecs

Of course, often times you'll be serializing your own types for which no endec exists yet - thus we must also know how to construct ones of our own.

### Basic compound types

The 3 simple trivial compound types from the data model all have direct operators on each endec. For example, we can easily turn an `Endec<UUID>` into an `Endec<List<UUID>>` with `Endec#listOf()`. Generally:

| Method           | Type Signature                        |
|------------------|---------------------------------------|
| Endec#listOf     | `Endec<T>` 🠖 `Endec<List<T>>`        |
| Endec#mapOf      | `Endec<T>` 🠖 `Endec<Map<String, T>>` |
| Endec#optionalOf | `Endec<T>` 🠖 `Endec<Optional<T>>`    |

Using these, you can realize a lot of basic data structures.

For maps with non-string keys, you have two options

- If your keys have a good string representation, use `Endec.map(Function, Function, Endec)` which encodes to a proper data model map by serializing each key using the provided `keyToString` and `keyFromString` functions. For example, for a map from `Identifier` to `boolean`, you might do something like this:
  ```java
  Endec<Map<Identifier, Boolean>> endec = Endec.map(Identifier::toString, Identifier::new, Endec.BOOLEAN);
  ```

- Otherwise, use `Endec.map(Endec, Endec)` and supply an endec for your keys. Since the data model cannot represent a map like this without somehow requiring a string representation for the keys, this instead serializes to a list of key-value pairs. This example is quite contrived but still demonstrates the principle:
  ```java
  Endec<Map<BlockPos, Identifier>> endec = Endec.map(BuiltInEndecs.BLOCK_POS, BuiltInEndecs.IDENTIFIER);
  ```

### Structs

Assume we have the following class which we wish to serialize:

```java
public class FabledBananasClass {
    private final int bananaAmount;
    private final Item bananaItem;
    private final List<BlockPos> bananaPositions;

    public FabledBananasClass(int bananaAmount, Item bananaItem, List<BlockPos> bananaPositions) {...}

    public int bananaAmount() { return this.bananaAmount; }
    public Item bananaItem() { return this.bananaItem; }
    public List<BlockPos> bananaPositions() { return this.bananaPositions; }
}
```

For this, we want to use the 4th compound type from the data model - structs. There are two reasons for this: For one, the API is specifically designed for this and thus very easy to use - but also, binary formats like the `ByteBufSerializer` (used for networking) can omit the field names and save a bunch of space this way over just using a map.

To create an endec for a struct, we first need endecs for all its fields. In this case, those are reasonably simple to obtain:

- For `bananaAmount` we use `Endec.INT`
- Since the values of `bananaItem` are stored in the item registry, we can serialize them as their identifiers using `BuiltInEndecs.ofRegistry(Registries.ITEM)`
- Finally, for `bananaPositions` we use the `listOf` operator from above: `BuiltInEndecs.BLOCK_POS.listOf()`

Now we may proceed using the aptly named `StructEndecBuilder` and the `fieldOf` operator which turns an endec into a struct field specification:
```java
Endec<FabledBananasClass> thisEndecIsBananas = StructEndecBuilder.of(
        Endec.INT.fieldOf("banana_amount", FabledBananasClass::bananaAmount),
        BuiltInEndecs.ofRegistry(Registries.ITEM).fieldOf("banana_item", FabledBananasClass::bananaItem),
        BuiltInEndecs.BLOCK_POS.listOf().fieldOf("banana_positions", FabledBananasClass::bananaPositions),
        // up to 17 fields can be declared here (1)
        FabledBananasClass::new
);
```

1. It's 17 specifically because that is one more than DFU supports. Take that!

For each field, we specify the name to use in the serialized representation and a getter function the endec should use for getting the value of that field from an instance of the class. Also, we supply a constructor the endec uses for instantiating the class when decoding, which accepts the same fields in the same order as declared.

If you wanted any of these fields to be optional, you would use the `optionalFieldOf` operator for that field instead and supply a default value to use when the field is missing from the serialized data.

!!! warning "Optional fields are not always supported"
    Optional fields are generally only supported by self-described formats. The packet buffer format, for example, does not support optional fields since it omits the fields names and thus cannot tell whether a field is missing. 
    
    Should a field be missing there, deserialization failure will generally result. However, since those formats are not usually authored by humans, this should never be an issue in practice

---

The structure and bananas of this guide are somewhat inspired by [enjarai](https://enjarai.dev/#/)'s excellent [Codec guide](https://fabric.moddedmc.wiki/misc-topics/codecs)