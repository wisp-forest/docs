---
title: Setup
project: condensed-creative
---

<script>
    window.addEventListener('version-available', event => {
        const code = document.querySelector(".condensed-creative-version-container").firstChild;
        code.innerHTML = code.innerHTML.replaceAll("...", replaceLoaderInfo(event.detail));
    })

    function replaceLoaderInfo(value){
        if(typeof value == "string"){
            console.log(value)
            value = value.replace("-Fabric", "");
            value = value.replace("-Forge", "");
            console.log(value)
        }

        return value;
    }
</script>


## Overview

Condensed Creative is a small library mod that allows for Mod or Datapack Developers to reduce Creative ItemGroup clutter by compacting similar Items into Condensed Entries that can be expanded or shrunk similar to Bedrock Addition of the Game. 

### Build Setup

Add the given maven below to your repositories section within your `build.gradle`:

```groovy title="build.gradle"
repositories {
    maven { url 'https://maven.wispforest.io' }
}
```

Afterwards you must declare the dependency within your `dependencies` section and at the same time you will need to declare the version being used with your projects
`gradle.properties`. Depending on your given mod loader, you will need to use the specified dependency implementation below:

=== "build.gradle"
    ```groovy
    dependencies {
        //Loom (Fabric / Quilt / Forge Loom)
        modImplementation "io.wispforest:condensed_creative-fabric:${project.condensed_creative_version}"
        
        //Base Forge
        implementation fg.deobf("io.wispforest:condensed_creative-forge:${project.condensed_creative_version}")
    }
    ```

=== "gradle.properties"
    ```{ .properties .condensed-creative-version-container }
    condensed_creative_version=...
    ```

???+ note
    If you are using Architectury, you can get the Common version using `modImplementation "io.wispforest:condensed_creative-common:${project.condensed_creative_version}"`

