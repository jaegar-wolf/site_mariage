<script setup lang="ts">
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
  <div class="flex flex-col items-center mt-10 mb-5">
    <div class="font-forum text-neutral text-2xl">{{ date }}</div>
    <div class="font-forum text-neutral text-lg font-bold text-center mb-5">
      {{ message.replace('<br'+'/>', "") }}
    </div>
    <div class="w-full text-center text-white  flex gap-2">
      <div ref="imageLeftRef" class="w-5/10 h-60 relative">
        <Transition name="slide-fade-inverse">
          <div v-if="imageLeftisInView" class="h-70 w-full md:h-96 md:w-auto md:-mr-17.5">
            <img
              :src="imageLeft"
              alt="our story image 1"
              class="size-full object-cover border-15 border-white shadow-lg"
            />
          </div>
        </Transition>
      </div>

      <div ref="imageRightRef" class="w-5/10 h-60 md:h-96 relative">
        <Transition name="slide-fade">
          <div v-if="imageRightisInView" class="h-70 w-full relative">
            <img
              :src="imageRight"
              alt="our story image 1"
              class="size-full object-cover border-15 border-white shadow-lg"
            />
          </div>
        </Transition>
      </div>
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
