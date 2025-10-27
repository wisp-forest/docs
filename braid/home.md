![the braid logo](../assets/braid/icon.svg){ .center-image width=200px }

braid is a modern, reactive UI framework for Desktop and Minecraft, written in [Dart](https://dart.dev) and Java respectively. Its core concepts are strongly inspired by library like [React](https://react.dev) and especially [Flutter](https://flutter.dev).

The development of braid was prompted by the desire to address a number of important shortcomings in owo-ui (owo-lib's [legacy UI framework](../owo/ui/index.md)). Over time, it has grown into a fully-fledged and flexible but also convenient library built on modern principles.

::: warning Alpha Cycle
**braid** is currently in early development, highly experimental and has no stable API.

**braid for Minecraft** is in its alpha cycle and does not guarantee a stable API either. While we will generally try our best not to break existing code, we won't be afraid to make breaking changes which we deem necessary for the project's long-term health.
:::

While the majority of concepts and API elements transfer 1:1 between the standalone reference implementation and owo-lib's Minecraft-specific version, there are a number of notable differences to be aware of. This documentation will primarily be written for the Minecraft implementation as we expect that to be our primary user base, but we'll attempt to provide relevant explainers and documentation in places where they deviate.
