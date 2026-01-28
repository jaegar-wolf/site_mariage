<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
import { ArrowRight } from 'lucide-vue-next'

defineProps<{
  currentChapter: number
  chapters: Array<{
    id: number
    imageLeft: string
    imageRight: string
    date: string
    message: string
  }>
}>()

defineEmits<{
  (e: 'goLeft'): void
  (e: 'goRight'): void
}>()
</script>

<template>
  <div class="flex justify-between w-48">
    <div class="w-22">
      <Transition name="fade-from-bottom">
        <button
          class="btn btn-secondary btn-xl mt-10 rounded-full w-full text-white"
          v-if="currentChapter !== 0"
          @click="$emit('goLeft')"
        >
          <ArrowLeft :size="32" :stroke-width="2.5" />
        </button>
      </Transition>
    </div>
    <div class="w-22">
      <Transition name="fade-from-bottom">
        <button
          class="btn btn-primary btn-xl mt-10 rounded-full w-full text-white"
          v-if="currentChapter !== chapters.length - 1"
          @click="$emit('goRight')"
        >
          <ArrowRight :size="32" :stroke-width="2.5" />
        </button>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-from-bottom-enter-active {
  transition: all 0.3s ease-out;
}
.fade-from-bottom-leave-active {
  transition: all 0.3s ease-in;
}
.fade-from-bottom-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-from-bottom-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
