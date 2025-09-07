<script setup>
    defineProps({
        version: String
    })
</script>

<template>
    <Badge type="tip">
        <span>
            <Icon icon="mdi:tag-multiple"/>
            {{ version }}
        </span>
    </Badge>
</template>