<script setup lang="ts">
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
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M6 12H18M6 12L11 7M6 12L11 17"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
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
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M6 12H18M18 12L13 7M18 12L13 17"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
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
