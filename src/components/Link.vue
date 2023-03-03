
<script setup lang="ts">
defineProps<{
    to: string
}>()
</script>

<template>
    <a :href="to" target="_blank" class="text-blue-600 font-medium">
        <slot></slot>
    </a>
</template>