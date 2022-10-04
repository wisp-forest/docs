---
title: scatter config
project: scatter
---

# `scatter config`

Edit scatter's configuration. Used for managing tokens as well as default game versions

### Options

#### :material-toggle-switch-outline: `--tokens`

Configure the access token for a host. After selecting the host, you can safely enter the token - it will not be shown. When hitting enter, the token is saved, overriding one that's already present.

Example:
```
→ scatter config --tokens
Platform: Modrinth CurseForge GitHub 
                              ↑
Token (empty to remove): 
info: Token for platform 'github' updated
```

***

#### :material-toggle-switch-outline: `--set-changelog-mode`

Change the preferred changelog mode

Example:
```
→ scatter config --set-changelog-mode
Changelog mode: editor prompt file 
                ↑
info: Default changelog mode updated to 'editor'
```

***

#### :material-toggle-switch-outline: `--export`

Export scatter's configuration and database as a bundle, without the saved tokens for security reasons. The bundle will be saved as `scatter-config-export.json`

Example:
```
→ scatter config --export
info: Config exported to 'scatter_config_export.json'
```

#### :material-text: `--import <file>`

Import a scatter configuration bundle from the given file. This will replace the current configuration and database, so be mindful when you use this.

Example:
```
→ scatter config --import scatter_config_export.json
info: Config imported
```

***

#### :material-text: `--dump <type>`

Dump the given configuration file as well as its location on disk to the console, mainly useful for debugging purposes. Accepted types are `config`, `database` and `tokens` - be careful with the last one as it will dump all your tokens in plain text

Example:
```
→ scatter config --dump config
{
    "default_target_versions": [
        "1.18.2"
    ],
    "default_changelog_mode": "editor"
}
info: Config file location: /home/<user>/.config/scatter/config.json
```

***

#### :material-toggle-switch-outline: `--default-versions`

Change the list of Minecraft versions with which all uploaded artifacts are automatically marked compatible

```
→ scatter config --default-versions
info: Editing default versions. Prefix with '-' to remove a version, leave empty to exit
info: Use '-' to clear, '#' to display current default versions
info: Current default versions: []
Version: 1.18.2
info: Version '1.18.2' successfully added to default versions
Version: 
```