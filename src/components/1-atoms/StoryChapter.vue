<script setup lang="ts">
import CoeurSvg from '@/assets/svg/coeur.svg'
import { useObserver } from '@/composables/observerComposable'
import { ref, useTemplateRef } from 'vue'

const { imageLeft, imageRight, date, message } = defineProps<{
  imageLeft: string
  imageRight: string
  date: string
  message: string
}>()

const imageLeftRef = useTemplateRef('imageLeftRef')
const imageRightRef = useTemplateRef('imageRightRef')
const imageLeftisInView = ref(false)
const imageRightisInView = ref(false)

useObserver(imageLeftisInView, imageLeftRef, true, false)

useObserver(imageRightisInView, imageRightRef, true, false)
</script>

<template>
  <div class="test w-full relative text-center text-white mt-10 flex justify-center">
    <div ref="imageLeftRef" class="w-1/4 h-96 relative">
      <Transition name="slide-fade-inverse">
        <div v-if="imageLeftisInView" class="h-96 -rotate-12 mr-[-70px]">
          <img
            :src="imageLeft"
            alt="our story image 1"
            class="size-full object-cover border-15 border-white shadow-lg"
          />
        </div>
      </Transition>
    </div>
    <div class="relative">
      <img :src="CoeurSvg" alt="coeur" class="w-full" />
      <div class="absolute left-[37%] top-[22%] font-forum text-3xl text-center">{{ date }}</div>
      <div class="absolute left-[24%] top-[35%] font-dynalight text-5xl">
        <span v-html="message"></span>
      </div>
    </div>

    <div ref="imageRightRef" class="w-1/4 h-96 relative">
      <Transition name="slide-fade">
        <div v-if="imageRightisInView" class="h-96 rotate-12 relative ml-[-70px]">
          <img
            :src="imageRight"
            alt="our story image 1"
            class="size-full object-cover border-15 border-white shadow-lg"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100px) rotate(48deg);
  opacity: 0;
}

.slide-fade-inverse-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-inverse-enter-from,
.slide-fade-inverse-leave-to {
  transform: translateX(-100px) rotate(-48deg);
  opacity: 0;
}
</style>
