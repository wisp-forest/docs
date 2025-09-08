<script setup lang="ts">
    defineProps({
        icon: String,
        size: {
            type: String,
            default: '1em'
        },
    })
</script>

<template>
    <iconify-icon :icon="icon" :width="size" :height="size"></iconify-icon>
</template>

<style>
iconify-icon {
    display: inline-block;
    vertical-align: middle;
}
</style>