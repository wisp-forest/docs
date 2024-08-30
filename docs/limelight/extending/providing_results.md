---
title: Providing Results
project: limelight
summary: Defining result entries and providing them to the user.
---

## Defining results
`#!java ResultEntry` is the sealed base interface of all results in Limelight. While it has some common
members between all result types, the actual logic is determined by its permitted subinterfaces.

```java
public abstract class BaseFunnyResultEntry /* implements ResultEntry */ {
    public LimelightExtension extension() {
        return MyFunExtension.INSTANCE; // (1)
    }

    public String entryId() {
        return "example-extension:funny"; // (2)
    }

    public Text text() {
        return Text.literal("wow very funny");
    }
}
```

1. This should return whatever extension generated this result, to be shown to the user as the
result's source.

2. This identifier should include as much information about the result as possible, to allow Limelight
to identify equivalent results.

### Invoking result entries
`#!java InvokeResultEntry` represents a result that runs some generic action.

```java
public class MeowResultEntry extends BaseFunnyResultEntry implements InvokeResultEntry {
    @Override
    public void run() {
        MinecraftClient.getInstance().player.sendMessage(Text.literal("meow!"));
    }

    @Override
    public boolean closesScreen() {
        return false; // (1)
    }
}
```

1. Entries should ideally close the screen if the user is likely to not want to run anything else
after this entry (e.g. keybind entries).

![](../../assets/limelight/invoke_result_example.png){ .docs-image }

### Set search text result entries
`#!java SetSearchTextEntry` represents a result entry which is offered as an autocomplete suggestion or
to just redirect to different search text. The Limelight GUI will also show the text to be autocompleted to in the search box while this entry is highlighted.

```java
public class CompleteMeowResultEntry extends BaseFunnyResultEntry implements SetSearchTextEntry {
    @Override
    public String newSearchText() {
        return "meow";
    }
}
```

![](../../assets/limelight/autocomplete_result_example.png){ .docs-image }

### Toggle result entries

!!! warning
    This result entry type is experimental, and may be removed in a future update.

`#!java ToggleResultEntry` represents a toggleable result entry. The Limelight GUI includes a checkbox
in this result's component, which is toggled when the entry is used.

```java
public class ControlMeowResultEntry extends BaseFunnyResultEntry implements ToggleResultEntry {
    private static boolean MEOW_CONTROLLED = false;

    @Override
    public boolean getValue() {
        return MEOW_CONTROLLED;
    }

    @Override
    public void setValue(boolean value) {
        MEOW_CONTROLLED = value;
    }
}
```

![](../../assets/limelight/toggle_result_example.png){ .docs-image }


## Gathering results
To get results to the user, you need to not only define the result classes, but also provide them to
Limelight. `#!java ResultEntryGatherer` is the main interface for providing any results to the
Limelight screen, used everywhere where you can provide entries.

### Implicit providers
`#!java LimelightExtension` extends `#!java ResultEntryGatherer`, and the core result gatherer invokes
all extensions' gatherers if no extension handles it exclusively.

```java
public class MyFunExtension implements LimelightExtension {
    // ...

    @Override
    public void gatherEntries(ResultGatherContext ctx, Consumer<ResultEntry> entryConsumer) {
        if (!ctx.matches("meow", "kitty", "cat")) return; // (1)
        entryConsumer.accept(new MeowResultEntry());
    }
}
```

1. Provided entries aren't checked against the search text (in part to allow extensions like the
calculator to function), so entry providers need to check search text themselves.  
`#!java ResultGatherContext.matches` is provided for this purpose, and extension should give all
possible text that could be searched for to the method to allow users to search for their entries.

### Exclusive providers
Your extension might want to add custom search syntax that means "only let *this* extension handle it".
`#!java LimelightExtension#checkExclusiveGatherer` is provided for this purpose: the extension can check
the gather context and return a gatherer that will exclusively handle this search. This is used by the
built-in calculator extension (for `=` queries) and the bangs extension (for `!` queries).

```java
public class MyFunExtension implements LimelightExtension {
    // ...

    @Override
    public @Nullable ResultEntryGatherer checkExclusiveGatherer(ResultGatherContext ctx) {
        if (!ctx.searchText().startsWith("~")) return null;

        return (ctx1, entryConsumer) -> {
            entryConsumer.accept(new MeowResultEntry());
        };
    }
}
```

### Bangs

!!! note
    This requires the built-in **Bangs** (`limelight:bangs`) extension to be enabled.

Bangs ([a very original idea](https://duckduckgo.com/bangs)) can be used to let users quickly search
for specific types of result entries.

```java
public class MyFunExtension implements LimelightExtension, BangsProvider {
    @Override
    public List<BangDefinition> bangs() {
        return List.of(new BangDefinition(
            "meow",
            Text.literal("Meow!"),
            (ctx, entryConsumer) -> {
                entryConsumer.accept(new MeowResultEntry());
            }
        ));
    }
}
```

![](../../assets/limelight/bangs_example.png){ .docs-image }

### Asynchronous gathering
While most of Limelight's (and probably yours) extensions provide results synchronously, Limelight has
full support for gatherers which provide results asynchronously, after the initial gathering has
finished and the initial results are visible.

```java
public class MyFunExtension implements LimelightExtension {
    @Override
    public void gatherEntries(ResultGatherContext ctx, Consumer<ResultEntry> entryConsumer) {
        var future =
            ctx.cancellationToken().wrapFuture(doWork()) // (1)
                .thenAccept(value -> {
                    if (value > 10) return;
                    
                    entryConsumer.accept(new MeowResultEntry());
                });
        
        ctx.trackFuture(future); // (2)
    }
    
    private CompletableFuture<Integer> doWork() {
        return new CompletableFuture<Integer>()
            .completeOnTimeout(4, 5, TimeUnit.SECONDS);
    }
}
```

1. CancellationToken is an object similar to JavaScript's
[AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) and .NET's 
[CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken).
Here, it's used to represent the lifetime of this specific Limelight search, and it will be cancelled
if the screen is closed or if the search text changes. `#!java CancellationToken#wrapFuture` attaches
a subscription that will cancel the future when the token is cancelled.

2. This line makes the Limelight core track the future to show a progress indicator while it's
running, and notify the user if it fails (**WIP**).