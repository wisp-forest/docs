---
title: Home
project: gadget
---

<script>
    window.addEventListener('version-available', event => {
        [].forEach.call(document.querySelectorAll(".gadget-version"), v => {
            v.outerHTML = v.outerHTML.replaceAll("...", event.detail);
        });
    })
</script>

gadget is a collection of tools meant to help debug mods by allowing you to inspect and change certain game features.

## Setup

If you aren't in a developer environment, you can just download the mod from <a href="https://modrinth.com/mod/gadget/version/..." class="gadget-version">Modrinth</a> or <a href="https://github.com/wisp-forest/gadget/releases/tag/..." class="gadget-version">GitHub</a>.

If you want to put gadget in your buildscript, however, you first just include the Wisp Forest repository:

```groovy title="build.gradle"
repositories {
    maven { url 'https://maven.wispforest.io' }
}
```

And then declare your dependency the usual way:

=== "build.gradle"
    ```groovy 
    dependencies {
        // modCompileOnly "io.wispforest:gadget:${project.gadget_version}" (1)
        modLocalRuntime "io.wispforest:gadget:${project.gadget_version}"
    }
    ```

    1. If you need to use the gadget API (e.g. if you want to make [a custom packet deserializer](packet-dumps/custom_packets.md)), uncomment this.

=== "gradle.properties"
    ```{ .properties .gadget-version }
    # https://maven.wispforest.io/io/wispforest/gadget/
    owo_version=...
    ```