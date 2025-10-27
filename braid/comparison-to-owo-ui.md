# Comparison to owo-ui

braid's design fundamentally differs from that of owo-ui. Whereas owo-ui is a traditional retained-mode framework, braid is best described as a reactive one. To illustrate what this difference means, consider the following code snippets, both roughly containing the necessary code to implement a basic counter:

::: code-group
```java [owo-ui]
public Component createCounter(int startFrom) {
    var count = new MutableInt(startFrom);
    var counterLabel = Components.label(Text.literal(String.valueOf(count.intValue())));
    var counterButton = Components.button(Text.literal("count"), button -> {
        count.add(1);
        couterLabel.setText(Text.literal(String.valueOf(count.intValue())));
    });

    return Containers.verticalFlow(Sizing.content(), Sizing.content())
        .addChild(counterLabel)
        .addChild(counterButton)
        .horizontalAlignment(HorizontalAlignment.CENTER)
        .verticalAlignment(VerticalAlignment.CENTER);
}
```

```java [braid]
public class Counter extends StatefulWidget {
    public final int startFrom;

    public Counter(int startFrom) {
        this.startFrom = startFrom;
    }

    public WidgetState<Counter> createState() {
        return new State();
    }

    public static class State extends WidgetState<Counter> {
        public int count = 0;

        @Override
        public void init() {
            this.count = this.widget().startFrom;
        }

        @Override
        public Widget build(BuildContext context) {
            return new Center(
                new Column(
                    Label.literal(String.valueOf(this.count)),
                    new MessageButton(
                        Text.literal("count"), 
                        () -> this.setState(() -> this.count++)
                    )
                )
            );
        }
    }
}
```
:::

Besides the obvious fact that the braid version is less terse and thus takes up more visual space, this immediately highlights a two very important differences:
- There is no funtional distinction between widgets provided by the library (like `Center` or `MessageButton`) and new widgets authored by the user (like `Counter`). This means that there is clear way to package reusable components of a UI, unlike owo-ui where this concept of a "component made up of other components" doesn't really exist

- For owo-ui, it being a retained-mode framework, the user is responsible for managing the lifecycle of their components and keeping the state of the UI in sync with the state of the data it represents (by manually tracking `count` and applying it to the label when necessary). For braid, because all dependencies of the `build` method are encapsulated clearly in the surrounding `WidgetState`, the library can simply re-run the build method when a state change happens (caused by the call to `setState`). This encodes the current data (the state's fields) into a format the library understands (a widget tree), which it can then apply to the underlying widget instances to automatically synchronize the UI.

  This is what it means for braid to be *reactive* - it automatically *reacts* to state changes by updating the UI appropriately without the user needing to figure out the exact things that need to happen to transition the old state to the new state, they simply describe what the data looks like at the current moment.

  In general, the API of braid is centrally structured around **describing state changes**. This is diametrically opposed to owo-ui, where manual management of the internal UI data structures is front and center. This mandates a shift in thinking when developing with either library, but we have found that it is generally much more natural to think about state rather than UI internals and that it leads to more productive development overall.