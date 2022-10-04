# Fabric API Events
:octicons-tag-24: Fabric API version: 0.62.0+1.19.2

:octicons-list-unordered-16: Total event count: 130

### Grouped events
***
#### [C2SPlayChannelEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/C2SPlayChannelEvents.java)

 - REGISTER
 - UNREGISTER

#### [ClientBlockEntityEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientBlockEntityEvents.java)

 - BLOCK_ENTITY_LOAD
 - BLOCK_ENTITY_UNLOAD

#### [ClientChunkEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientChunkEvents.java)

 - CHUNK_LOAD
 - CHUNK_UNLOAD

#### [ClientEntityEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientEntityEvents.java)

 - ENTITY_LOAD
 - ENTITY_UNLOAD

#### [ClientLifecycleEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientLifecycleEvents.java)

 - CLIENT_STARTED
 - CLIENT_STOPPING

#### [ClientLoginConnectionEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientLoginConnectionEvents.java)

 - INIT
 - QUERY_START
 - DISCONNECT

#### [ClientPlayConnectionEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientPlayConnectionEvents.java)

 - INIT
 - JOIN
 - DISCONNECT

#### [ClientTickEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents.java)

 - START_CLIENT_TICK
 - END_CLIENT_TICK
 - START_WORLD_TICK
 - END_WORLD_TICK

#### [EntityElytraEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntityElytraEvents.java)

 - ALLOW
 - CUSTOM

#### [EntitySleepEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents.java)

 - ALLOW_SLEEPING
 - START_SLEEPING
 - STOP_SLEEPING
 - ALLOW_BED
 - ALLOW_SLEEP_TIME
 - ALLOW_NEARBY_MONSTERS
 - ALLOW_RESETTING_TIME
 - MODIFY_SLEEPING_DIRECTION
 - ALLOW_SETTING_SPAWN
 - SET_BED_OCCUPATION_STATE
 - MODIFY_WAKE_UP_POSITION

#### [EntityTrackingEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/EntityTrackingEvents.java)

 - START_TRACKING
 - STOP_TRACKING

#### [LootTableEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-loot-api-v2/src/main/java/net/fabricmc/fabric/api/loot/v2/LootTableEvents.java)

 - REPLACE
 - MODIFY

#### [PlayerBlockBreakEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/PlayerBlockBreakEvents.java)

 - BEFORE
 - AFTER
 - CANCELED

#### [S2CPlayChannelEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/S2CPlayChannelEvents.java)

 - REGISTER
 - UNREGISTER

#### [ScreenEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-screen-api-v1/src/client/java/net/fabricmc/fabric/api/client/screen/v1/ScreenEvents.java)

 - BEFORE_INIT
 - AFTER_INIT

#### [ServerBlockEntityEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerBlockEntityEvents.java)

 - BLOCK_ENTITY_LOAD
 - BLOCK_ENTITY_UNLOAD

#### [ServerChunkEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerChunkEvents.java)

 - CHUNK_LOAD
 - CHUNK_UNLOAD

#### [ServerEntityEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerEntityEvents.java)

 - ENTITY_LOAD
 - ENTITY_UNLOAD
 - EQUIPMENT_CHANGE

#### [ServerEntityWorldChangeEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerEntityWorldChangeEvents.java)

 - AFTER_ENTITY_CHANGE_WORLD
 - AFTER_PLAYER_CHANGE_WORLD

#### [ServerLifecycleEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents.java)

 - SERVER_STARTING
 - SERVER_STARTED
 - SERVER_STOPPING
 - SERVER_STOPPED
 - SYNC_DATA_PACK_CONTENTS
 - START_DATA_PACK_RELOAD
 - END_DATA_PACK_RELOAD

#### [ServerLoginConnectionEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/ServerLoginConnectionEvents.java)

 - INIT
 - QUERY_START
 - DISCONNECT

#### [ServerMessageEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-message-api-v1/src/main/java/net/fabricmc/fabric/api/message/v1/ServerMessageEvents.java)

 - ALLOW_CHAT_MESSAGE
 - ALLOW_GAME_MESSAGE
 - ALLOW_COMMAND_MESSAGE
 - CHAT_MESSAGE
 - GAME_MESSAGE
 - COMMAND_MESSAGE

#### [ServerPlayConnectionEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/ServerPlayConnectionEvents.java)

 - INIT
 - JOIN
 - DISCONNECT

#### [ServerPlayerEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerPlayerEvents.java)

 - COPY_FROM
 - AFTER_RESPAWN
 - ALLOW_DEATH

#### [ServerTickEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerTickEvents.java)

 - START_SERVER_TICK
 - END_SERVER_TICK
 - START_WORLD_TICK
 - END_WORLD_TICK

#### [ServerWorldEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerWorldEvents.java)

 - LOAD
 - UNLOAD

#### [WorldRenderEvents](https://github.com/FabricMC/fabric/tree/1.19/fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/WorldRenderEvents.java)

 - START
 - AFTER_SETUP
 - BEFORE_ENTITIES
 - AFTER_ENTITIES
 - BEFORE_BLOCK_OUTLINE
 - BLOCK_OUTLINE
 - BEFORE_DEBUG_RENDER
 - AFTER_TRANSLUCENT
 - LAST
 - END

### Non-grouped events

***
 - [AttackBlockCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/AttackBlockCallback.java)
 - [AttackEntityCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/AttackEntityCallback.java)
 - [ClientCommandRegistrationCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-command-api-v2/src/client/java/net/fabricmc/fabric/api/client/command/v2/ClientCommandRegistrationCallback.java)
 - [ClientPickBlockApplyCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/client/player/ClientPickBlockApplyCallback.java)
 - [ClientPickBlockGatherCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/client/player/ClientPickBlockGatherCallback.java)
 - [ClientSpriteRegistryCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-textures-v0/src/client/java/net/fabricmc/fabric/api/event/client/ClientSpriteRegistryCallback.java)
 - [CombinedProvidersImpl$Provider.event](https://github.com/FabricMC/fabric/tree/1.19/fabric-transfer-api-v1/src/main/java/net/fabricmc/fabric/impl/transfer/fluid/CombinedProvidersImpl$Provider.java)
 - [CommandRegistrationCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-command-api-v2/src/main/java/net/fabricmc/fabric/api/command/v2/CommandRegistrationCallback.java)
 - [CommonLifecycleEvents.TAGS_LOADED](https://github.com/FabricMC/fabric/tree/1.19/fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/CommonLifecycleEvents.java)
 - [DynamicRegistrySetupCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-registry-sync-v0/src/main/java/net/fabricmc/fabric/api/event/registry/DynamicRegistrySetupCallback.java)
 - [FluidStorage.GENERAL_COMBINED_PROVIDER](https://github.com/FabricMC/fabric/tree/1.19/fabric-transfer-api-v1/src/main/java/net/fabricmc/fabric/api/transfer/v1/fluid/FluidStorage.java)
 - [HudRenderCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/HudRenderCallback.java)
 - [InvalidateRenderStateCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/InvalidateRenderStateCallback.java)
 - [ItemTooltipCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-item-api-v1/src/client/java/net/fabricmc/fabric/api/client/item/v1/ItemTooltipCallback.java)
 - [LivingEntityFeatureRenderEvents.ALLOW_CAPE_RENDER](https://github.com/FabricMC/fabric/tree/1.19/fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/LivingEntityFeatureRenderEvents.java)
 - [LivingEntityFeatureRendererRegistrationCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/LivingEntityFeatureRendererRegistrationCallback.java)
 - [ModifyItemAttributeModifiersCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-item-api-v1/src/main/java/net/fabricmc/fabric/api/item/v1/ModifyItemAttributeModifiersCallback.java)
 - [ServerEntityCombatEvents.AFTER_KILLED_OTHER_ENTITY](https://github.com/FabricMC/fabric/tree/1.19/fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerEntityCombatEvents.java)
 - [ServerMessageDecoratorEvent.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-message-api-v1/src/main/java/net/fabricmc/fabric/api/message/v1/ServerMessageDecoratorEvent.java)
 - [SpriteRegistryCallbackHolder.EVENT_GLOBAL](https://github.com/FabricMC/fabric/tree/1.19/fabric-textures-v0/src/client/java/net/fabricmc/fabric/impl/client/texture/SpriteRegistryCallbackHolder.java)
 - [TooltipComponentCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/TooltipComponentCallback.java)
 - [UseBlockCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/UseBlockCallback.java)
 - [UseEntityCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/UseEntityCallback.java)
 - [UseItemCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.19/fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/UseItemCallback.java)
### Deprecated events

***
 - <s>C2SPacketTypeCallback.REGISTERED</s>
 - <s>ClientPickBlockCallback.EVENT</s>
 - <s>ClientTickCallback.EVENT</s>
 - <s>CommandRegistrationCallback.EVENT</s>
 - <s>InvalidateRenderStateCallback.EVENT</s>
 - <s>ItemTooltipCallback.EVENT</s>
 - <s>LivingEntityFeatureRendererRegistrationCallback.EVENT</s>
 - <s>LootTableLoadingCallback.EVENT</s>
 - <s>S2CPacketTypeCallback.REGISTERED</s>
 - <s>ServerStartCallback.EVENT</s>
 - <s>ServerStopCallback.EVENT</s>
 - <s>ServerTickCallback.EVENT</s>
 - <s>WorldTickCallback.EVENT</s>
