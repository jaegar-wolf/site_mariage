<script setup lang="ts">
import type { DressCodeTabProps } from '@/types'

defineProps<DressCodeTabProps>()
</script>

<template>
  <div
    class="md:relative md:bottom-85 md:left-10 flex flex-col items-center md:flex-row md:gap-8 md:w-full"
  >
    <div
      class="h-140 mb-10 md:mb-0 md:mt-10 flex flex-col w-70 md:w-93 shadow-2xl shadow-secondary rounded-t-full"
    >
      <img :src="imageLeft" class="h-95 w-full object-cover rounded-t-full flex-1" />
      <div class="bg-base-200 w-full flex flex-col items-center text-primary p-5">
        <span class="text-2xl md:text-[2.375rem] font-forum">TENUE ÉLÉGANTE</span>
        <p class="text-center text-sm font-normal font-plusjakartasans">
          Une tenue raffinée mais décontractée, aux accents bucoliques. <br />
          <span class="font-bold">
            Robes légères, jupes fluides, pantalons de toile ou chemises en lin à boutons seront
            parfaits.
          </span>
        </p>
      </div>
    </div>

    <div
      class="h-140 mb-10 md:mb-0 md:h-154 flex flex-col w-70 md:w-93 shadow-2xl shadow-secondary rounded-t-full"
    >
      <img :src="imageCenter" class="h-95 md:h-108 w-full object-cover rounded-t-full flex-1" />
      <div class="bg-base-200 w-full flex flex-col items-center text-primary p-5 md:p-7.5">
        <span class="text-2xl md:text-4xl font-forum text-center">TENUE DE CÉRÉMONIE</span>
        <p class="text-center text-sm font-normal font-plusjakartasans">
          Un smoking ou un costume élégant, une robe longue ou cocktail aux teintes pastel : <br />
          <span class="font-bold"
            >gris-perle, bleu lavande, sable, menthe douce, pêche claire ou lilas pâle.</span
          >
        </p>
      </div>
    </div>

    <div
      class="h-140 mb-10 md:mb-0 md:mt-10 flex flex-col w-70 md:w-93 shadow-2xl shadow-secondary rounded-t-full"
    >
      <img :src="imageRight" class="h-95 w-full object-cover rounded-t-full flex-1" />
      <div class="bg-base-200 w-full flex flex-col items-center text-primary p-5">
        <span class="text-2xl md:text-[2.375rem] font-forum">TENUE DE SOIRÉE</span>
        <p class="text-center text-sm font-normal font-plusjakartasans">
          Un smoking aux tons pastels subtils ou un costume de soirée élégant. Des robes longues ou
          des tenues de soirée raffinées. <br />
          <span class="font-bold"> Une élégance discrète et naturelle. </span>
        </p>
      </div>
    </div>
  </div>
</template>
