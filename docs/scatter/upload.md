---
title: scatter upload
project: scatter
---

# `scatter upload`

The core command of scatter. Used to initiate the upload process. General syntax: `scatter upload <mod id> [version]` where `version` is optional

### Options

#### :material-toggle-switch-outline: `-o, --override-game-versions`

Do not use the configured Minecraft versions. Instead, a prompt is shown into which you can enter the appropriate versions.

Example:
```
→ scatter upload <mod id> -o
...
Comma-separated game versions: 1.17,1.17.1,1.17.2
...
```

***

#### :material-toggle-switch-outline: `-f, --read-as-file`

Always interpret the `[version]` argument as a file location. This is used to disable the artifact selection prompt and prevents scatter from making an attempt at interpreting said argument as a version. Instead, the given file will be uploaded without further checks.

Example: `scatter upload <mod id> mod.jar -f`

***

#### :material-toggle-switch-outline: `-c, --confirm`

Do not upload to each supported host automatically. Instead, you can choose for each host individually whether the artifact should be submitted.

Example:
```
→ scatter upload <mod id> -c
...
Upload to Modrinth? [Y/n] n
Upload to CurseForge? [Y/n] n
Upload to GitHub? [Y/n] n
...
```

***

#### :material-toggle-switch-outline: `-r, --confirm-relations`

Do not declare each dependency automatically. Instead, you can choose individually for each dependency whether it should be declared.

Example:
```
→ scatter upload <mod id> -r
...
Declare dependency '<dependency id>'? [Y/n] n
...
```

***

#### :material-text: `-l <mode>, --changelog-mode <mode>`

Do not use the default changelog mode. Instead, use either `editor`, `file` or `prompt`.

Example: `scatter upload <mod id> -l file`
