<script setup lang="ts">
import Countdown from '@/components/1-atoms/CountdownComponent.vue'

import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { gsap } from 'gsap'
import SplitText from 'gsap/SplitText'

const countdownDate = new Date('2026-08-15T00:00:00')

const timeLeft = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

const animatedText = ref<HTMLElement | null>(null)

const countDown = () => {
  const now = new Date().getTime()

  const distance = countdownDate.getTime() - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

onMounted(() => {
  const interval = setInterval(() => {
    const { days, hours, minutes, seconds } = countDown()
    timeLeft.days = days
    timeLeft.hours = hours
    timeLeft.minutes = minutes
    timeLeft.seconds = seconds
  }, 1000)

  onUnmounted(() => {
    clearInterval(interval)
  })
})

onMounted(() => {
  const split = new SplitText(animatedText.value, {
    type: 'chars,words,lines',
    charsClass: 'char',
    wordsClass: 'word',
    linesClass: 'line',
  })

  gsap.from(split.words, {
    delay: 1.8,
    stagger: 0.1,
    duration: 0.5,
    opacity: 0,
    yPercent: 'random(-100, 100)',
    rotation: 'random(-60, 60)',
    ease: 'back.out',
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
  <div ref="animatedText" class="font-plusjakartasans font-bold text-primary">
    Le mariage aura lieu dans
  </div>
  <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
    <Countdown :time-left="timeLeft.days" :digits="3" label="jours" />

    <Countdown :time-left="timeLeft.hours" :digits="2" label="heures" />

    <Countdown :time-left="timeLeft.minutes" :digits="2" label="min" />

    <Countdown :time-left="timeLeft.seconds" :digits="2" label="sec" />
  </div>
</template>

<style></style>
