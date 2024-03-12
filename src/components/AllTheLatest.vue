<script setup lang="ts">
    import Card from './Card.vue';
    import data from '@/data'
</script>

<template>
    <div>
        <h2 class="text-4xl uppercase text-center">All the latest from AEG</h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto mt-16">
            <template v-for="item in data">
                <Card :item="item" />
            </template>
        </div>
    </div>
</template>
