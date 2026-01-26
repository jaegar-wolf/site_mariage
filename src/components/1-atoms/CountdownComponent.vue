<script setup lang="ts">
defineProps<{
  timeLeft: number
  digits: number
  label: string
}>()
</script>

<template>
  <div class="flex flex-col text-sm md:text-base">
    <span class="countdown font-mono text-3xl md:text-5xl text-neutral">
      <span
        :style="'--value:' + timeLeft + '; --digits:' + digits + ';'"
        aria-live="polite"
        :aria-label="timeLeft.toString()"
        >{{ timeLeft }}</span
      >
    </span>
    {{ label }}
  </div>
</template>
