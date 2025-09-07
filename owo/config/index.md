# Config

<VersionMarker version="^0.8.0" />

oωo provides a highly flexible annotation-driven configuration system. It aims to be simple yet powerful and offers the following traits:

- <Icon icon="material-symbols:check-circle-rounded" /> **Highly Customizable**
    Thanks to the screens being built using owo-ui, you can easily customize them by simply editing some XML - no code required. Even resource packs can do this!

- <Icon icon="material-symbols:check-circle-rounded" /> **Feature-Complete**
    owo-config supports all your favorite features from Cloth Config and similar libraries. There are even some more features, like built-in [option constraints](constraints.md), automatic registration with ModMenu as well as option callbacks

- <Icon icon="material-symbols:check-circle-rounded" /> **[Simple & Quick to use](getting-started.md)**
    Setting up a config with owo-config is about as boilerplate-free and quick as it becomes - you put an annotation on your class and load the config in your mod initializer (just like [Cloth Config](https://modrinth.com/mod/cloth-config)).

- <Icon icon="material-symbols:check-circle-rounded" /> [**Safe**](synchronization.md)
    owo-config supports automatic, opt-in server-client config synchronization. This means all your dynamic config options can always be the same on both sides, but it can also prevent players from connecting if they have a mismatched option which would require a restart to apply.
