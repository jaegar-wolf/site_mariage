<script setup lang="ts">
import FlowerForSchedule from '@/assets/svg/flowerForSchedule.vue'
import pinnedHeartSvg from '@/assets/svg/pinnedHeartSvg.vue'
import type { SchedulePartProps } from '@/types'
import { useRouter } from 'vue-router'

defineProps<SchedulePartProps>()
const router = useRouter()
</script>

<template>
  <div
    :class="(isFirst ? 'mt-20' : '') || (isLast ? 'mb-20' : '')"
    class="w-dvw h-240 flex flex-row"
  >
    <div class="h-full w-1/2 bg-primary">
      <div class="text-base-200 h-60">
        <FlowerForSchedule class="size-full" />
      </div>
      <div class="mx-18 my-10 flex flex-col text-base-200">
        <div class="font-plusjakartasans text-sm font-normal">ORDRE DU JOUR</div>
        <div class="font-forum text-[3.18rem]/normal mb-5">{{ title }}</div>
        <div class="flex flex-row my-1 items-center gap-2">
          <pinnedHeartSvg class="size-4 mt-1" />
          <div class="font-plusjakartasans text-base">Date: Samedi 15 Août, 2026 à {{ time }}</div>
        </div>
        <div class="flex flex-row my-1 items-center gap-2">
          <pinnedHeartSvg class="size-4 mt-2 self-start" />
          <div class="font-plusjakartasans text-base">
            Localisation:
            <a
              href="https://www.google.com/maps/search/?api=1&query=Domaine+de+l'Étoile+de+Forges"
              target="_blank"
              >Domaine de l'Étoile de Forges, 1 Le Mont au Bec, <br />
              76440 Longmesnil</a
            >
          </div>
        </div>

        <div class="my-1">
          <div class="font-plusjakartasans text-base">
            {{ comment }}
          </div>
        </div>

        <button
          class="btn btn-outline w-1/3 mt-4 font-plusjakartasans text-base"
          @click="router.push('#rsvp')"
        >
          Rejoignez-nous
        </button>
      </div>
    </div>
    <div v-if="linkOnImage" class="h-full w-1/2 relative">
      <a
        class="size-full flex justify-center"
        href="https://www.google.com/maps/search/?api=1&query=Domaine+de+l'Étoile+de+Forges"
        target="_blank"
      >
        <div class="mt-[5%] h-9/10 w-9/10 border-2 border-base-200 absolute opacity-45"></div>
        <img :src="image" class="h-full" :class="imageCover ? 'object-cover' : ''" />
      </a>
    </div>
    <div v-else class="h-full w-1/2 relative flex justify-center">
      <div class="mt-[5%] h-9/10 w-9/10 border-2 border-base-200 absolute opacity-45"></div>
      <img :src="image" class="h-full" :class="imageCover ? 'object-cover' : ''" />
    </div>
  </div>
</template>
