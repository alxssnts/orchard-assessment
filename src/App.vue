<script setup lang="ts">
  import AllTheLatest from './components/AllTheLatest.vue';
import AnswerYourBodyNeeds from './components/AnswerYourBodyNeeds.vue';
  
</script>

<template>
  <div class="h-full bg-main text-white font-sans">
    <div class="flex flex-col gap-16 md:gap-32 md:container max-w-7xl mx-auto p-6 md:py-24">
      <AnswerYourBodyNeeds />
      <AllTheLatest />
    </div>
  </div>
</template>
