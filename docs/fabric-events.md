---
title: Fabric API Events
project: docs
summary: All events currently in Fabric API
---
# Fabric API Events
:octicons-tag-24: Fabric API version: 0.96.11+1.20.4

:octicons-list-unordered-16: Total event count: 165

### Grouped events
***
#### [C2SConfigurationChannelEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/C2SConfigurationChannelEvents.java)

 - REGISTER
 - UNREGISTER

#### [C2SPlayChannelEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/C2SPlayChannelEvents.java)

 - REGISTER
 - UNREGISTER

#### [ClientBlockEntityEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientBlockEntityEvents.java)

 - BLOCK_ENTITY_LOAD
 - BLOCK_ENTITY_UNLOAD

#### [ClientChunkEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientChunkEvents.java)

 - CHUNK_LOAD
 - CHUNK_UNLOAD

#### [ClientConfigurationConnectionEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientConfigurationConnectionEvents.java)

 - INIT
 - READY
 - DISCONNECT

#### [ClientEntityEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientEntityEvents.java)

 - ENTITY_LOAD
 - ENTITY_UNLOAD

#### [ClientLifecycleEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientLifecycleEvents.java)

 - CLIENT_STARTED
 - CLIENT_STOPPING

#### [ClientLoginConnectionEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientLoginConnectionEvents.java)

 - INIT
 - QUERY_START
 - DISCONNECT

#### [ClientPlayConnectionEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-networking-api-v1/src/client/java/net/fabricmc/fabric/api/client/networking/v1/ClientPlayConnectionEvents.java)

 - INIT
 - JOIN
 - DISCONNECT

#### [ClientReceiveMessageEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientReceiveMessageEvents.java)

 - ALLOW_CHAT
 - ALLOW_GAME
 - MODIFY_GAME
 - CHAT
 - GAME
 - CHAT_CANCELED
 - GAME_CANCELED

#### [ClientSendMessageEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-message-api-v1/src/client/java/net/fabricmc/fabric/api/client/message/v1/ClientSendMessageEvents.java)

 - ALLOW_CHAT
 - ALLOW_COMMAND
 - MODIFY_CHAT
 - MODIFY_COMMAND
 - CHAT
 - COMMAND
 - CHAT_CANCELED
 - COMMAND_CANCELED

#### [ClientTickEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-lifecycle-events-v1/src/client/java/net/fabricmc/fabric/api/client/event/lifecycle/v1/ClientTickEvents.java)

 - START_CLIENT_TICK
 - END_CLIENT_TICK
 - START_WORLD_TICK
 - END_WORLD_TICK

#### [EntityElytraEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntityElytraEvents.java)

 - ALLOW
 - CUSTOM

#### [EntitySleepEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents.java)

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

#### [EntityTrackingEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/EntityTrackingEvents.java)

 - START_TRACKING
 - STOP_TRACKING

#### [LootTableEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-loot-api-v2/src/main/java/net/fabricmc/fabric/api/loot/v2/LootTableEvents.java)

 - REPLACE
 - MODIFY
 - ALL_LOADED

#### [ModelLoaderPluginContextImpl](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-model-loading-api-v1/src/client/java/net/fabricmc/fabric/impl/client/model/loading/ModelLoaderPluginContextImpl.java)

 - modelResolvers
 - onLoadModifiers
 - beforeBakeModifiers
 - afterBakeModifiers
 - legacyVariantProviders

#### [PlayerBlockBreakEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/PlayerBlockBreakEvents.java)

 - BEFORE
 - AFTER
 - CANCELED

#### [S2CConfigurationChannelEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/S2CConfigurationChannelEvents.java)

 - REGISTER
 - UNREGISTER

#### [S2CPlayChannelEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/S2CPlayChannelEvents.java)

 - REGISTER
 - UNREGISTER

#### [ScreenEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-screen-api-v1/src/client/java/net/fabricmc/fabric/api/client/screen/v1/ScreenEvents.java)

 - BEFORE_INIT
 - AFTER_INIT

#### [ServerBlockEntityEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerBlockEntityEvents.java)

 - BLOCK_ENTITY_LOAD
 - BLOCK_ENTITY_UNLOAD

#### [ServerChunkEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerChunkEvents.java)

 - CHUNK_LOAD
 - CHUNK_UNLOAD

#### [ServerConfigurationConnectionEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/ServerConfigurationConnectionEvents.java)

 - BEFORE_CONFIGURE
 - CONFIGURE
 - DISCONNECT

#### [ServerEntityEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerEntityEvents.java)

 - ENTITY_LOAD
 - ENTITY_UNLOAD
 - EQUIPMENT_CHANGE

#### [ServerEntityWorldChangeEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerEntityWorldChangeEvents.java)

 - AFTER_ENTITY_CHANGE_WORLD
 - AFTER_PLAYER_CHANGE_WORLD

#### [ServerLifecycleEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerLifecycleEvents.java)

 - SERVER_STARTING
 - SERVER_STARTED
 - SERVER_STOPPING
 - SERVER_STOPPED
 - SYNC_DATA_PACK_CONTENTS
 - START_DATA_PACK_RELOAD
 - END_DATA_PACK_RELOAD
 - BEFORE_SAVE
 - AFTER_SAVE

#### [ServerLivingEntityEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerLivingEntityEvents.java)

 - ALLOW_DAMAGE
 - ALLOW_DEATH
 - AFTER_DEATH
 - MOB_CONVERSION

#### [ServerLoginConnectionEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/ServerLoginConnectionEvents.java)

 - INIT
 - QUERY_START
 - DISCONNECT

#### [ServerMessageEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-message-api-v1/src/main/java/net/fabricmc/fabric/api/message/v1/ServerMessageEvents.java)

 - ALLOW_CHAT_MESSAGE
 - ALLOW_GAME_MESSAGE
 - ALLOW_COMMAND_MESSAGE
 - CHAT_MESSAGE
 - GAME_MESSAGE
 - COMMAND_MESSAGE

#### [ServerPlayConnectionEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-networking-api-v1/src/main/java/net/fabricmc/fabric/api/networking/v1/ServerPlayConnectionEvents.java)

 - INIT
 - JOIN
 - DISCONNECT

#### [ServerPlayerEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerPlayerEvents.java)

 - COPY_FROM
 - AFTER_RESPAWN
 - ALLOW_DEATH

#### [ServerTickEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerTickEvents.java)

 - START_SERVER_TICK
 - END_SERVER_TICK
 - START_WORLD_TICK
 - END_WORLD_TICK

#### [ServerWorldEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/ServerWorldEvents.java)

 - LOAD
 - UNLOAD

#### [WorldRenderEvents](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/WorldRenderEvents.java)

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
 - [AttackBlockCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/AttackBlockCallback.java)
 - [AttackEntityCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/AttackEntityCallback.java)
 - [ClientCommandRegistrationCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-command-api-v2/src/client/java/net/fabricmc/fabric/api/client/command/v2/ClientCommandRegistrationCallback.java)
 - [ClientPickBlockApplyCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-events-interaction-v0/src/client/java/net/fabricmc/fabric/api/event/client/player/ClientPickBlockApplyCallback.java)
 - [ClientPickBlockGatherCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-events-interaction-v0/src/client/java/net/fabricmc/fabric/api/event/client/player/ClientPickBlockGatherCallback.java)
 - [ClientPlayerBlockBreakEvents.AFTER](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-events-interaction-v0/src/client/java/net/fabricmc/fabric/api/event/client/player/ClientPlayerBlockBreakEvents.java)
 - [ClientPreAttackCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-events-interaction-v0/src/client/java/net/fabricmc/fabric/api/event/client/player/ClientPreAttackCallback.java)
 - [CombinedProvidersImpl$Provider.event](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-transfer-api-v1/src/main/java/net/fabricmc/fabric/impl/transfer/fluid/CombinedProvidersImpl$Provider.java)
 - [CommandRegistrationCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-command-api-v2/src/main/java/net/fabricmc/fabric/api/command/v2/CommandRegistrationCallback.java)
 - [CommonLifecycleEvents.TAGS_LOADED](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-lifecycle-events-v1/src/main/java/net/fabricmc/fabric/api/event/lifecycle/v1/CommonLifecycleEvents.java)
 - [CoreShaderRegistrationCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/CoreShaderRegistrationCallback.java)
 - [DynamicRegistrySetupCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-registry-sync-v0/src/main/java/net/fabricmc/fabric/api/event/registry/DynamicRegistrySetupCallback.java)
 - [FluidStorage.GENERAL_COMBINED_PROVIDER](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-transfer-api-v1/src/main/java/net/fabricmc/fabric/api/transfer/v1/fluid/FluidStorage.java)
 - [HudRenderCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/HudRenderCallback.java)
 - [InvalidateRenderStateCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/InvalidateRenderStateCallback.java)
 - [ItemGroupEvents.MODIFY_ENTRIES_ALL](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-item-group-api-v1/src/main/java/net/fabricmc/fabric/api/itemgroup/v1/ItemGroupEvents.java)
 - [ItemTooltipCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-item-api-v1/src/client/java/net/fabricmc/fabric/api/client/item/v1/ItemTooltipCallback.java)
 - [LivingEntityFeatureRenderEvents.ALLOW_CAPE_RENDER](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/LivingEntityFeatureRenderEvents.java)
 - [LivingEntityFeatureRendererRegistrationCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/LivingEntityFeatureRendererRegistrationCallback.java)
 - [ModifyItemAttributeModifiersCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-item-api-v1/src/main/java/net/fabricmc/fabric/api/item/v1/ModifyItemAttributeModifiersCallback.java)
 - [ParticleRenderEvents.ALLOW_BLOCK_DUST_TINT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-particles-v1/src/client/java/net/fabricmc/fabric/api/client/particle/v1/ParticleRenderEvents.java)
 - [ServerEntityCombatEvents.AFTER_KILLED_OTHER_ENTITY](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-entity-events-v1/src/main/java/net/fabricmc/fabric/api/entity/event/v1/ServerEntityCombatEvents.java)
 - [ServerMessageDecoratorEvent.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-message-api-v1/src/main/java/net/fabricmc/fabric/api/message/v1/ServerMessageDecoratorEvent.java)
 - [TooltipComponentCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-rendering-v1/src/client/java/net/fabricmc/fabric/api/client/rendering/v1/TooltipComponentCallback.java)
 - [UseBlockCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/UseBlockCallback.java)
 - [UseEntityCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/UseEntityCallback.java)
 - [UseItemCallback.EVENT](https://github.com/FabricMC/fabric/tree/1.20.4/fabric-events-interaction-v0/src/main/java/net/fabricmc/fabric/api/event/player/UseItemCallback.java)
### Deprecated events

***
 - <s>ClientPickBlockCallback.EVENT</s>
 - <s>ClientTickCallback.EVENT</s>
 - <s>CommandRegistrationCallback.EVENT</s>
 - <s>InvalidateRenderStateCallback.EVENT</s>
 - <s>ItemTooltipCallback.EVENT</s>
 - <s>LivingEntityFeatureRendererRegistrationCallback.EVENT</s>
 - <s>ServerStartCallback.EVENT</s>
 - <s>ServerStopCallback.EVENT</s>
 - <s>ServerTickCallback.EVENT</s>
 - <s>WorldTickCallback.EVENT</s>

