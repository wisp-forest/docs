# Setup Environment  

Accessories supports both **Fabric** and **Neoforge**, and also support mods that are multiplatform by offering a **Common** target. 

## Groovy
To start you will need to add the following mavens to your `build.gradle`:

::: code-group
```groovy [build.gradle]
    maven { url 'https://maven.wispforest.io/releases' }
    maven { url 'https://maven.su5ed.dev/releases' }
    maven { url 'https://maven.fabricmc.net' }
```
:::

After declaring such, you will need to add the dependency within the `dependencies` block while also specifying the `accessories_version` within your `gradle.properties`:

::: code-group
```groovy [Fabric]
dependencies {
    modImplementation("io.wispforest:accessories-fabric:${project.accessories_version}")
}
```

```groovy [Neoforge]
dependencies {
    implementation("io.wispforest:accessories-neoforge:${project.accessories_version}")
}
```
:::

#### Multiloader

::: code-group
```groovy [Common - Arch Loom]
dependencies {
    modImplementation("io.wispforest:accessories-common:${project.accessories_version}")
}
```

```groovy [Neoforge - Arch Loom]
dependencies {
    modImplementation("io.wispforest:accessories-neoforge:${project.accessories_version}")

    // Required due to issues with JIJ dependency resolving in arch or something
    forgeRuntimeLibrary("blue.endless:jankson:1.2.2")

    // For versions greater than or equal to 1.21.4
    forgeRuntimeLibrary("io.wispforest:endec:0.1.9")
    forgeRuntimeLibrary("io.wispforest.endec:gson:0.1.6")
    forgeRuntimeLibrary("io.wispforest.endec:jankson:0.1.6")
    forgeRuntimeLibrary("io.wispforest.endec:netty:0.1.5")

    // For versions less than or equal to 1.21.1
    forgeRuntimeLibrary("io.wispforest:endec:0.1.5.1")
    forgeRuntimeLibrary("io.wispforest.endec:gson:0.1.3.1")
    forgeRuntimeLibrary("io.wispforest.endec:jankson:0.1.3.1")
    forgeRuntimeLibrary("io.wispforest.endec:netty:0.1.2")
}
```

```groovy [Common - Vanilla Gradle]
dependencies {
    // Yarn Intermediary 
    compileOnly("io.wispforest:accessories-common:${project.accessories_version}")
    
    // Mojang Mappings
    compileOnly("io.wispforest:accessories-common:${project.accessories_version}-mojmap")
}
```
:::

## Kotlin

To start you will need to add the following mavens to your `build.gradle`:

::: code-group
```kotlin [build.gradle.kts]
    maven("https://maven.wispforest.io/releases")
    maven("https://maven.su5ed.dev/releases")
    maven("https://maven.fabricmc.net")
```
:::

After declaring such, you will need to add the dependency within the `dependencies` block while also specifying the `accessories_version` within your `gradle.properties`:

::: code-group
```kotlin [Fabric]
dependencies {
    modImplementation("io.wispforest:accessories-fabric:${properties["accessories_version"]}")
}
```

```kotlin [Neoforge]
dependencies {
    implementation("io.wispforest:accessories-neoforge:${properties["accessories_version"]}")
}
```
:::

#### Multiloader

::: code-group
```kotlin [Common - Arch Loom]
dependencies {
    modImplementation("io.wispforest:accessories-common:${properties["accessories_version"]}")
}
```

```kotlin [Neoforge - Arch Loom]
dependencies {
    modImplementation("io.wispforest:accessories-neoforge:${properties["accessories_version"]}")

    // Required due to issues with JIJ dependency resolving in arch or something
    forgeRuntimeLibrary("blue.endless:jankson:1.2.2")

    // For versions greater than or equal to 1.21.4
    forgeRuntimeLibrary("io.wispforest:endec:0.1.9")
    forgeRuntimeLibrary("io.wispforest.endec:gson:0.1.6")
    forgeRuntimeLibrary("io.wispforest.endec:jankson:0.1.6")
    forgeRuntimeLibrary("io.wispforest.endec:netty:0.1.5")

    // For versions less than or equal to 1.21.1
    forgeRuntimeLibrary("io.wispforest:endec:0.1.5.1")
    forgeRuntimeLibrary("io.wispforest.endec:gson:0.1.3.1")
    forgeRuntimeLibrary("io.wispforest.endec:jankson:0.1.3.1")
    forgeRuntimeLibrary("io.wispforest.endec:netty:0.1.2")
}
```

```kotlin [Common - Vanilla Gradle]
dependencies {
    // Yarn Intermediary 
    compileOnly("io.wispforest:accessories-common:${properties["accessories_version"]}")
    
    // Mojang Mappings
    compileOnly("io.wispforest:accessories-common:${properties["accessories_version"]}-mojmap")
}
```
:::

::: tip
It is recommended to get the latest version either from Modrinth, Curseforge or check the [Maven](https://maven.wispforest.io/#/releases/io/wispforest/accessories-common) for latest dev builds.
:::