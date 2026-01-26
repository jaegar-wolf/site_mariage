<script setup lang="ts">
defineProps({
  carouselImages: { type: Array<{ id: number; img: string; alt: string }>, required: true },
})
</script>

<template>
  <div class="wrapper">
    <div class="my-carousel rounded-box">
      <div class="group">
        <div v-for="(image, index) in carouselImages" :key="index" class="card h-32 md:h-72">
          <img class="rounded-2xl h-full" :src="image.img" :alt="image.alt" />
        </div>
      </div>
      <div aria-hidden class="group">
        <div v-for="(image, index) in carouselImages" :key="index" class="card h-32 md:h-72">
          <img class="rounded-2xl h-full" :src="image.img" :alt="image.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100lvw;
  overflow-x: hidden; /* Cache le débordement */
  position: relative;
}
.my-carousel {
  width: 120%;
  display: flex;
}

.my-carousel::-webkit-scrollbar {
  display: none;
}

.group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  animation: spin 15s linear infinite;
  -webkit-animation: spin 15s linear infinite;
  padding-right: 1em;
}

.card {
  flex: 0 0 8em;
  width: 100%;
  padding: 0.5em;
  align-content: center;
}

@media (width >= 48rem /* 768px */) {
  .wrapper {
    width: 100vw;
  }
  .group {
    animation: spin 30s linear infinite;
    -webkit-animation: spin 30s linear infinite;
  }
  .card {
    flex: 0 0 25em;
    padding: 1em;
  }
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
