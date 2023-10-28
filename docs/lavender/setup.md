---
title: Setup
project: lavender
---

!!! tip "Work-in-progress"
    The Lavender documentation is still being written and not quite complete yet. In places where an article here is still missing, feel free to refer to Lavender's Javadoc where present or simply ask for help on [our Discord](https://discord.gg/xrwHKktV2d)

<script>
    window.addEventListener('version-available', event => {
        const code = document.querySelector(".lavender-version-container").firstChild;
        code.innerHTML = code.innerHTML.replaceAll("...", event.detail);
    })
</script>

To add Lavender to you project, begin by including our maven in the repositories block of your `build.gradle`

```groovy title="build.gradle"
repositories {
    maven { url 'https://maven.wispforest.io' }
}
```

Then, declare the dependency inside your `dependencies` block and as well as the version you want to use inside your `gradle.properties`. Since Lavender depends on owo-lib, it's generally recommended to also include owo-sentinel as a means for your players to easily acquire the library without having to download it themselves. Check out [owo's setup page](../owo/setup.md) for more information

=== "build.gradle"
    ```groovy 
    dependencies {
        modImplementation "io.wispforest:lavender:${project.lavender_version}"
        include "io.wispforest:owo-sentinel:${project.owo_version}" // check owo's page for this version
    }
    ```

=== "gradle.properties"
    ```{ .properties .lavender-version-container }
    # https://maven.wispforest.io/io/wispforest/lavender/
    lavender_version=...
    ```

If you want to use a version other than the most current one, check the [GitHub releases page](https://github.com/wisp-forest/lavender/releases/)
