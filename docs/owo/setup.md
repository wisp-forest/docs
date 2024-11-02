---
title: Setup
project: owo
---

<script>
    window.addEventListener('version-available', event => {
        const code = document.querySelector(".owo-version-container").firstChild;
        code.innerHTML = code.innerHTML.replaceAll("...", event.detail);
    })
</script>

To add oωo to you project, begin by including our maven in the repositories block of your `build.gradle`

```groovy title="build.gradle"
repositories {
    maven { url 'https://maven.wispforest.io/releases/' }
}
```

Then, declare the dependency inside your `dependencies` block and as well as the version you want to use inside your `gradle.properties`. 

=== "build.gradle (Fabric)"
    ```groovy 
    dependencies {
        modImplementation "io.wispforest:owo-lib:${project.owo_version}"
        include "io.wispforest:owo-sentinel:${project.owo_version}"
    }
    ```

    !!! hint ""
        As you can see, this example also includes `owo-sentinel`. sentinel is a super tiny mod which is designed to be Jar-in-Jar'd by mods that depend on owo. If a player then installs your mod without installing owo, sentinel will prevent their game from launching and instead open a window warning them that owo is required. It gives them the option to automatically install owo or open owo's page so they can do it manually

=== "build.gradle (Neoforge)"
    ```groovy 
    dependencies {
        // Vanilla/Moddev Projects - Neoforge
        implementation "io.wispforest:owo-lib-neoforge:${project.owo_version}"
        accessTransformer "io.wispforest:owo-lib-neoforge:${project.owo_version}"
        interfaceInjectionData "io.wispforest:owo-lib-neoforge:${project.owo_version}"

        // Arch Loom Projects - Neoforge
        modImplementation "io.wispforest:owo-lib-neoforge:${project.owo_version}"

        // Required due to issues with Arch Loom and JIJ within neo. May require bumping the version every once and awhile.
        forgeRuntimeLibrary("io.wispforest:endec:0.1.8")
        forgeRuntimeLibrary("io.wispforest.endec:netty:0.1.4")
        forgeRuntimeLibrary("io.wispforest.endec:gson:0.1.5")
        forgeRuntimeLibrary("io.wispforest.endec:jankson:0.1.5")
        forgeRuntimeLibrary("blue.endless:jankson:1.2.2")
    }
    ```

=== "build.gradle (Common)"
    ```groovy 
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

=== "gradle.properties"
    ```{ .properties .owo-version-container }
    # https://maven.wispforest.io/io/wispforest/owo-lib/
    owo_version=...
    ```

If you want to use a version other than the most current one, check the [GitHub releases page](https://github.com/wisp-forest/owo-lib/releases/)
