<script setup lang="ts">
defineProps({
  carouselImages: { type: Array<{ id: number; img: string; alt: string }>, required: true },
})
</script>

<template>
  <div class="my-carousel rounded-box">
    <div class="group">
      <div v-for="(image, index) in carouselImages" :key="index" class="card h-72">
        <img class="rounded-2xl h-full" :src="image.img" :alt="image.alt" />
      </div>
    </div>
    <div aria-hidden class="group">
      <div v-for="(image, index) in carouselImages" :key="index" class="card h-72">
        <img class="rounded-2xl h-full" :src="image.img" :alt="image.alt" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-carousel {
  width: 120%;
  display: flex;
  overflow-x: auto;
}

.my-carousel::-webkit-scrollbar {
  display: none;
}

.group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  animation: spin 30s linear infinite;
  padding-right: 1em;
}

.card {
  flex: 0 0 25em;
  width: 100%;
  padding: 1em;
  align-content: center;
}

@keyframes spin {
  from {
    translate: 0;
  }
  to {
    translate: -100%;
  }
}
</style>
