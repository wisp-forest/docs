![the braid logo](../assets/braid/icon.svg){ .center-image width=200px }

braid is a modern, reactive UI framework for Desktop and Minecraft, written in [Dart](https://dart.dev) and Java respectively. Its core concepts are strongly inspired by library like [React](https://react.dev) and especially [Flutter](https://flutter.dev).

The development of braid was prompted first and foremost by the need to address a number of important shortcomings in owo-ui (owo-lib's legacy UI framework)

::: warning Alpha Cycle
**braid** is currently in early development, highly experimental and has no stable API.

**braid for Minecraft** is in its alpha cycle and does not guarantee a stable API either. While we will try our best not to break existing code, there are a number of outstanding changes which are necessary for the long-term health of the project.
:::

While the majority of concepts and API elements transfer 1:1 between the standalone reference implementation and owo-lib's Minecraft-specific version, there are a number of notable differences to be aware of. This documentation will primarily be written for the Minecraft implementation as we expect that to be our primary user base, but we'll attempt to provide relevant explainers and documentation in places where they deviate.
