<script setup lang="ts">
import { SplitText } from 'gsap/SplitText'
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import WeddingRing from '@/assets/svg/WeddingRing.vue'

const animatedText = ref<HTMLElement | null>(null)

onMounted(() => {
  const split = new SplitText(animatedText.value, {
    type: 'chars,words,lines',
    charsClass: 'char',
    wordsClass: 'word',
    linesClass: 'line',
  })

  gsap.from(split.words, {
    opacity: 0,
    yPercent: 'random(-100, 100)',
    rotation: 'random(-60, 60)',
    ease: 'back.out',
    stagger: 0.2,
    onComplete: () => {
      split.revert()
    },
  })

  onUnmounted(() => {
    split.revert()
  })
})
</script>

<template>
  <div class="flex flex-col gap-5 items-center font-plusjakartasans" ref="animatedText">
    <div class="flex-row">Rejoignez-nous pour célébrer notre mariage</div>
    <div class="flex flex-row gap-4 items-center">
      <span class="font-dynalight text-neutral text-9xl font-normal">Mathieu</span>
      <div class="w-14 h-14">
        <WeddingRing />
      </div>
      <span class="font-dynalight text-neutral text-9xl font-normal">Mélanie</span>
    </div>
  </div>
</template>
