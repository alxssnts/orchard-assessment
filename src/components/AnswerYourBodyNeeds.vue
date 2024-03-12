<script setup lang="ts">
import { ref } from 'vue';

const imgs = [
  '/src/assets/images/component-01/Image-01@2x.jpg',
  '/src/assets/images/component-01/Image-02@2x.jpg',
  '/src/assets/images/component-01/Image-03@2x.jpg',
]

const visibleRef = ref(false)
const indexRef = ref(0)

const showImg = (index: number) => {
  visibleRef.value = true
  indexRef.value = index
}

const onHide = () => visibleRef.value = false
</script>

<template>
  <div class="flex flex-col md:flex-row gap-6 md:p-0">
    <div class="flex flex-col lg:flex-row gap-6 flex-0">
      <div class="flex-1">
        <div class="overflow-hidden">
          <img class="h-full hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            src="/src/assets/images/component-01/Image-01.jpg" alt="Featured Image" @click="showImg(0)">
        </div>
      </div>

      <div class="flex flex-col gap-6 flex-1">
        <div class="overflow-hidden">
          <img class="h-full hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            src="/src/assets/images/component-01/Image-02.jpg" alt="Featured Image" @click="showImg(1)">
        </div>
        <div class="overflow-hidden">
          <img class="h-full hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            src="/src/assets/images/component-01/Image-03.jpg" alt="Featured Image" @click="showImg(2)">
        </div>
      </div>
    </div>
    <div class="flex flex-col flex-1 gap-8">
      <div>
        <h2 class="text-2xl uppercase border-b-2 pb-4 font-light mb-6">Answer Your Body&apos;s Needs</h2>
        <p class="text-lg font-light">The way ingredients are sourced affects the way we nourish our bodies. Author Mark
          Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be
          healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on
          high-quality ingredients and being mindful as your appetite guides you to consume according to your
          body&apos;s needs.</p>
      </div>
      <div>
        <p class="text-md text-red-500 uppercase mb-3">Be mindful</p>
        <p class="text-lg font-medium">Sourcing local or organic food is a good way to start being more mindful
          about what you&apos;re cooking and eating.</p>
      </div>
    </div>

    <vue-easy-lightbox :visible="visibleRef" :imgs="imgs" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
  </div>
</template>
