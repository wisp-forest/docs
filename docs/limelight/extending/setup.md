---
title: Setup
project: limelight
---

**:material-progress-alert: Work-in-progress**

To start setting up your addon, add an optional dependency on Limelight:

=== "gradle.properties"
    ```properties
    limelight_version=0.1.0+1.21
    ```

=== "build.gradle"
    ```groovy
    repositories {
        maven { url 'https://maven.wispforest.io/releases/' }
    }

    dependencies {
        modCompileOnly "me.basiqueevangelist:limelight:${project.limelight_version}"
        modLocalRuntime "me.basiqueevangelist:limelight:${project.limelight_version}"
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
