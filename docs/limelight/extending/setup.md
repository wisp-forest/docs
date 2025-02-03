---
title: Setup
project: limelight
summary: Setting up Limelight integration for your mod.
---

<script>
    window.addEventListener('version-available', event => {
        [].forEach.call(document.querySelectorAll(".limelight-version"), v => {
            v.outerHTML = v.outerHTML.replaceAll("...", event.detail);
        });
    })
</script>

To start setting up your addon, add an optional dependency on Limelight:

=== "gradle.properties"
    ``` { .properties .limelight-version }
    limelight_version=...
    ```

=== "build.gradle"
    ```groovy
    repositories {
        maven { url 'https://maven.wispforest.io/releases/' }
    }

    dependencies {
        modCompileOnly "io.wispforest:limelight:${project.limelight_version}"
        modLocalRuntime "io.wispforest:limelight:${project.limelight_version}"
    }
    ```

Now that you have Limelight's code in your development environment, you need to define a Limelight entrypoint:

=== "fabric.mod.json"
    ```json
    {
        // ...

        "entrypoints": {
            "limelight": [
                "com.example.exampleextension.ExampleLimelightCompat"
            ]
        },

        // ...
    }
    ```

=== "ExampleLimelightCompat.java"
    ```java
    package com.example.exampleextension;

    import io.wispforest.limelight.api.LimelightEntrypoint;
    import io.wispforest.limelight.api.extension.LimelightExtension;

    import java.util.function.Consumer;

    public class ExampleLimelightCompat implements LimelightEntrypoint {
        @Override
        public void registerExtensions(Consumer<LimelightExtension> extensionRegistry) {
            // Register extensions here!
        }
    }
    ```

Continue by [adding an extension](./defining_extensions.md).