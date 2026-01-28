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
  <div class="w-full relative text-center text-white mt-10 flex justify-center">
    <div ref="imageLeftRef" class="w-2/10 md:w-1/4 h-60 md:h-96 relative">
      <Transition name="slide-fade-inverse">
        <div v-if="imageLeftisInView" class="h-70 w-40 md:h-96 md:w-auto -rotate-12 md:-mr-17.5">
          <img
            :src="imageLeft"
            alt="our story image 1"
            class="size-full object-cover border-15 border-white shadow-lg"
          />
        </div>
      </Transition>
    </div>
    <div class="relative top-6 md:left-0 left-2 md:top-0 w-8/10 md:w-auto">
      <img :src="CoeurSvg" alt="coeur" class="w-full" />
      <div
        class="absolute left-[37%] top-[16%] md:top-[22%] font-forum text-base md:text-3xl text-center"
      >
        {{ date }}
      </div>
      <div
        class="absolute left-[26%] md:left-[24%] top-[26%] md:top-[35%] font-dynalight text-lg md:text-5xl w-5/10"
      >
        <span v-html="message"></span>
      </div>
    </div>

    <div ref="imageRightRef" class="w-2/10 md:w-1/4 h-60 md:h-96 relative">
      <Transition name="slide-fade">
        <div
          v-if="imageRightisInView"
          class="h-70 w-40 md:h-96 md:w-auto rotate-12 relative -ml-18 md:-ml-17.5"
        >
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
