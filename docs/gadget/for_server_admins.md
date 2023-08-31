---
title: Server Owners and Operators
project: gadget
---

While gadget doesn't require a server mod for everything, the server mod is required for most privileged operations, including:

1. Server-side inspection of entities (`gadget.inspect` or op level 4)
2. Any modification of entity state via the inspector (`gadget.inspect` or op level 4)
3. Changing item stack NBT, even in creative mode (`gadget.replaceStack` or op level 4)
4. Requesting server datapack contents (`gadget.requestServerData` or op level 4)

Server owners should grant other players these permissions wisely, as some permissions (e.g. `gadget.inspect`) can allow players to break the server by editing important server fields. Generally, it's not recommended to put gadget on your production server unless you really need it.