<script setup lang="ts">
import HeartSvg from '@/assets/svg/heartSvg.vue'
import inviteCardUs from '@/assets/images/inviteCardUs.jpeg'
import WeddingRing from '@/assets/svg/WeddingRing.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div id="invite" class="h-200 w-full my-20 relative flex">
    <div class="h-full min-w-50 w-1/2">
      <img :src="inviteCardUs" class="size-full" />
    </div>
    <div class="h-full w-1/2 flex flex-col items-center mt-20 gap-6">
      <div class="font-forum font-bold text-2xl w-60 text-center">
        VOUS ÊTES INVITEZ AU MARIAGE DE
      </div>
      <div class="flex flex-col gap-8 items-center">
        <span class="font-dynalight text-neutral text-8xl font-normal">Mathieu</span>
        <div class="w-14 h-14">
          <WeddingRing />
        </div>
        <span class="font-dynalight text-neutral text-8xl font-normal">Mélanie</span>
      </div>

      <div
        class="border-t-2 border-b-2 border-primary font-forum text-2xl h-16 w-60 flex flex-col justify-center"
      >
        <div class="text-center">15H30, 15 AOÛT, 2026</div>
      </div>

      <div class="font-forum text-primary text-[1.25rem]">L'étoile de Forge, Longmesnil</div>

      <button class="btn btn-neutral btn-lg z-10" @click="router.push('#rsvp')">
        Rejoignez-nous
      </button>
    </div>
    <div class="size-95/100 border-2 border-primary absolute top-5 left-5">
      <div class="size-full border-2 border-primary rotate-2 relative">
        <HeartSvg class="size-8 opacity-40 text-primary absolute -right-6 -top-8 rotate-16" />
        <HeartSvg class="size-12 text-primary absolute -right-1.5 -top-4 -rotate-12" />
        <HeartSvg class="size-12 text-primary absolute -right-12 -bottom-2 rotate-16" />
        <HeartSvg class="size-8 opacity-40 text-primary absolute -right-2 bottom-6 -rotate-12" />
      </div>
    </div>
  </div>
</template>
