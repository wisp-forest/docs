---
title: scatter edit
project: scatter
---

# `scatter edit <mod>`

Edit a mod's entry in the database. This command launches an interactive session in which you can make edits without committing to any changes - type `save` to commit them or `done` to save and exit.

### Commands

#### :octicons-code-16: `set <property> <value>`

Update a single property of the mod being edited. Available properties are: 

| Property | Description |
| --- | --- |
| name | The display name of the mod |
| id | The ID used to reference the mod in the database - changing this will forcefully save changes and exit |
| modloaders | The modloaders the mod should be marked compatible with. Accepts multiple, comma separated values |
| artifact_directory | The directory where scatter searches for artifacts to upload |
| filename_pattern | A filename pattern by which to filter when searching the artifact directory |
| changelog_location | The location of a file from which to read the changelog when uploading a new version |
| version_name_pattern | The pattern by which to generate the name of versions when uploading, defaults to `[{game_version}] {mod_name} - {version}` |


#### :octicons-code-16: `depmod <subcommand> <argument>`

Manage the dependencies of the mod being edited. There are two possible subcommands:

 - `depmod add <slug> <type>` <br>
    Add the mod with the specified slug to the dependencies, using the given type. This type must be one of `optional`, `required` and `embedded`

 - `depmod remove <slug>` <br>
    Remove the mod with the specified slug from the dependencies