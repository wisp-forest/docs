---
title: Setup Development Environment  
project: accessories
---

The platforms that Accessories supports currently is both **Fabric** and **Neoforge** with support for mods that are multiplatform by offering a Common target. 

=== "Groovy"

    To start you will need to add the the following mavens to your `build.gradle`:

    ```groovy title="build.gradle"
        maven { url 'https://maven.wispforest.io/releases' }
        maven { url 'https://maven.su5ed.dev/releases' }
        maven { url 'https://maven.fabricmc.net' }
    ```

    After declaring such, you will need to add the dependency('s) within the `dependencies` block while also specifying the `accessories_version` within your `gradle.properties`:

    === "Fabric"
        ```groovy title="build.gradle"
        dependencies {
            modImplementation("io.wispforest:accessories-fabric:${project.accessories_version}")
        }
        ```

    === "Neoforge"
        ```groovy title="build.gradle"
        dependencies {
            implementation("io.wispforest:accessories-neoforge:${project.accessories_version}")
        }
        ```

    #### Multiloader

    === "Common - Arch"
        ```groovy title="build.gradle"
        dependencies {
            modImplementation("io.wispforest:accessories-common:${project.accessories_version}")
        }
        ```

    === "Neoforge - Arch"
        ```groovy title="build.gradle"
        dependencies {
            modImplementation("io.wispforest:accessories-neoforge:${project.accessories_version}")

            // Required due to issues with JIJ dependency resolving in arch or something
            forgeRuntimeLibrary("blue.endless:jankson:1.2.2")
            forgeRuntimeLibrary("io.wispforest:endec:0.1.9")
            forgeRuntimeLibrary("io.wispforest.endec:gson:0.1.5")
            forgeRuntimeLibrary("io.wispforest.endec:jankson:0.1.6")
            forgeRuntimeLibrary("io.wispforest.endec:netty:0.1.6")
        }
        ```

    === "Common - Vanilla Gradle"
        ```groovy title="build.gradle"
        dependencies {
            // Yarn Intermediary 
            compileOnly("io.wispforest:accessories-common:${project.accessories_version}")
            
            // Mojang Mappings
            compileOnly("io.wispforest:accessories-common:${project.accessories_version}-mojmap")
        }
        ```

=== "Kotlin"

    To start you will need to add the the following mavens to your `build.gradle`:

    ```kotlin title="build.gradle.kts"
        maven("https://maven.wispforest.io/releases")
        maven("https://maven.su5ed.dev/releases")
        maven("https://maven.fabricmc.net")
    ```

    After declaring such, you will need to add the dependency('s) within the `dependencies` block while also specifying the `accessories_version` within your `gradle.properties`:

    === "Fabric"
        ```kotlin title="build.gradle.kts"
        dependencies {
            modImplementation("io.wispforest:accessories-fabric:${properties["accessories_version"]}")
        }
        ```

    === "Neoforge"
        ```kotlin title="build.gradle.kts"
        dependencies {
            implementation("io.wispforest:accessories-neoforge:${properties["accessories_version"]}")
        }
        ```

    #### Multiloader

    === "Common - Arch"
        ```kotlin title="build.gradle.kts"
        dependencies {
            modImplementation("io.wispforest:accessories-common:${properties["accessories_version"]}")
        }
        ```

    === "Neoforge - Arch"
        ```kotlin 
        dependencies {
            modImplementation("io.wispforest:accessories-neoforge:${properties["accessories_version"]}")

            // Required due to issues with JIJ dependency resolving in arch or something
            forgeRuntimeLibrary("blue.endless:jankson:1.2.2")
            forgeRuntimeLibrary("io.wispforest:endec:0.1.9")
            forgeRuntimeLibrary("io.wispforest.endec:gson:0.1.5")
            forgeRuntimeLibrary("io.wispforest.endec:jankson:0.1.6")
            forgeRuntimeLibrary("io.wispforest.endec:netty:0.1.6")
        }
        ```

    === "Common - Vanilla Gradle"
        ```kotlin title="build.gradle.kts"
        dependencies {
            // Yarn Intermediary 
            compileOnly("io.wispforest:accessories-common:${properties["accessories_version"]}")
            
            // Mojang Mappings
            compileOnly("io.wispforest:accessories-common:${properties["accessories_version"]}-mojmap")
        }
        ```

!!! tip
    Recommend to get the latest version either from Modrinth, Curseforge or check the maven for latest dev builds {TODO: WIP ADD LINKS}