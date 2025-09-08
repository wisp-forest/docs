<script lang="ts" setup>
import { useRoute } from 'vitepress';
import Icon from './Icon.vue';
import { projectMeta } from './meta.ts';

const { data } = useRoute();
const entryDir = data.filePath.split('/')[0];

const meta = projectMeta[entryDir]
const render = meta != null && 'repo' in meta
</script>

<template>
    <div v-if="render" class="repo-link">
        <a :href="`https://github.com/${meta.repo}`">
            <Icon class="gh-icon" icon="mdi:github" size="2em" />
            <div class="details">
                <div>
                    <strong>Project Repository </strong>
                    <Icon icon="mdi:link-variant" class="link-icon"></Icon>
                </div>
                <span class="link-text">{{ meta.repo }}</span>
            </div>
        </a>
    </div>
</template>

<style>
.repo-link {
    margin-top: 1rem;

    .gh-icon {
        color: var(--vp-c-text-2);
        margin-right: .75rem;
    }

    .link-icon {
        color: var(--vp-c-brand-1);
    }

    .link-text {
        color: var(--vp-c-text-2);
        font-size: .75rem;
        text-wrap-mode: nowrap;
    }

    a {
        display: flex;
        align-items: center;
    }

    .details {
        display: flex;
        flex-direction: column;
    }
}
</style>