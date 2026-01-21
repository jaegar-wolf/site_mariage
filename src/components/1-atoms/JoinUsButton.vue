<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="grid grid-cols-3 items-center gap-5 w-7/10">
    <div class="font-plusjakartasans font-bold text-primary text-end">Samedi 15 Août 2026</div>
    <div class="h-0.5 bg-primary rounded-3xl" />
    <div class="font-plusjakartasans font-bold text-primary">L'étoile de Forge, Longmesnil</div>
  </div>
  <button class="btn btn-neutral btn-lg" @click="router.push('#rsvp')">Rejoignez-nous</button>
</template>
