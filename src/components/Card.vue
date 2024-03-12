<script setup lang="ts">
interface CardProps {
    id: number
    image: string
    title: string
    description: string
    url: string
}

defineProps<{
    item: CardProps
}>()
</script>

<template>
    <a :href="item.url" class="card-wrapper" @click="(element) => console.log(element.target)">
        <img class="w-full border-b-4 border-red-500 mb-4 transition duration-300 ease-in-out" :src="item.image" alt="Card Image">
        <h3 class="text-lg font-bold mb-2">{{ item.title }}</h3>
        <p class="text-md font-light mb-2 md:mb-6">{{ item.description }}</p>
        <a :href="item.url" class="border-b-2 border-red-500 uppercase">Read more</a>
    </a>
</template>

<style scoped>
    .card-wrapper:hover {
        img {
            transform: scale(105%);
        }

        cursor: pointer;
    }
</style>