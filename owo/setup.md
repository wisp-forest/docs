# Setup

<script setup>
    import { insertVersion } from '../components/version_cache.ts';
    insertVersion('wisp-forest', 'owo-lib', '.language-properties');
</script>

To add oωo to you project, begin by including our maven in the repositories block of your `build.gradle`

```groovy title="build.gradle"
repositories {
    maven { url 'https://maven.wispforest.io/releases/' }
}
```

Then, declare the dependency inside your `dependencies` block and as well as the version you want to use inside your `gradle.properties`. 

::: code-group
```groovy [build.gradle (Fabric)]
dependencies {
    modImplementation "io.wispforest:owo-lib:${project.owo_version}"
    include "io.wispforest:owo-sentinel:${project.owo_version}"
}
```

```groovy [build.gradle (Neoforge)]
dependencies {
    // Moddev Projects - Neoforge
    implementation "io.wispforest:owo-lib-neoforge:${project.owo_version}"
    accessTransformer "io.wispforest:owo-lib-neoforge:${project.owo_version}"
    interfaceInjectionData "io.wispforest:owo-lib-neoforge:${project.owo_version}"

    // Arch Loom Projects - Neoforge
    modImplementation "io.wispforest:owo-lib-neoforge:${project.owo_version}"

    // Required due to issues with Arch Loom and JIJ within neo. May require bumping the version every once and awhile.
    forgeRuntimeLibrary("blue.endless:jankson:1.2.2")

    // For versions greater than or equal to 1.21.4
    forgeRuntimeLibrary("io.wispforest:endec:0.1.9")
    forgeRuntimeLibrary("io.wispforest.endec:netty:0.1.5")
    forgeRuntimeLibrary("io.wispforest.endec:gson:0.1.6")
    forgeRuntimeLibrary("io.wispforest.endec:jankson:0.1.6")

    // For versions less than or equal to 1.21.1
    forgeRuntimeLibrary("io.wispforest:endec:0.1.5.1")
    forgeRuntimeLibrary("io.wispforest.endec:netty:0.1.2")
    forgeRuntimeLibrary("io.wispforest.endec:gson:0.1.3.1")
    forgeRuntimeLibrary("io.wispforest.endec:jankson:0.1.3.1")
}
```

```groovy [build.gradle (Common)]
dependencies {
    // Moddev Projects - Neoforge
    compileOnly "io.wispforest:owo-lib-neoforge:${project.owo_version}"
    accessTransformer "io.wispforest:owo-lib-neoforge:${project.owo_version}"
    interfaceInjectionData "io.wispforest:owo-lib-neoforge:${project.owo_version}"

    // Arch Loom Projects - Neoforge
    // Don't worry about loading issues as it will only be present to get the arch interface injection and Access Widener 
    modImplementation "io.wispforest:owo-lib-fabric:${project.owo_version}" 
}
```

```properties [gradle.properties]
# https://maven.wispforest.io/io/wispforest/owo-lib/
owo_version=...
```
:::

::: info
As you can see, this example also includes `owo-sentinel`. sentinel is a super tiny mod which is designed to be Jar-in-Jar'd by mods that depend on owo. If a player then installs your mod without installing owo, sentinel will prevent their game from launching and instead open a window warning them that owo is required. It gives them the option to automatically install owo or open owo's page so they can do it manually.

**Important:** owo-sentinel *never* does anything without user consent. It has a built-in explanation and only establishes a network connection or modifies files on disk after the user explicitly requests it with a clearly labeled button.
:::

::: danger owo-sentinel dependency declaration
Even when using owo-sentinel, it is still necessary and **very important** that you correctly declare your dependency on owo in *both* your mod's `fabric.mod.json` and on whichever distribution platforms you use.

If you don't do this, you **will** cause for other developers and players. Launchers will not be able to correctly instally owo as a dependency, mod bisection tools will not detect your owo dependency and trigger an uncesssary sentinel launch, and so on and so forth.

owo-sentinel is meant to be a *last-resort* convenience option for users who install your mod without using a launcher or similar tool which takes care of installing the owo dependency. It does not absolve you of the responsibility to manage your dependencies correctly.
:::

If you want to use a version other than the most current one, check the [GitHub releases page](https://github.com/wisp-forest/owo-lib/releases/)
