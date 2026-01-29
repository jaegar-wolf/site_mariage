<script setup lang="ts">
import dresscodeBackgroundSvg from '@/assets/svg/dresscodeBackground.svg'
import gardenChicWomens from '@/assets/images/gardenChicWomens.jpg'
import gardenChicWomen from '@/assets/images/gardenChicWomen.jpg'
import gardenChicWomen1 from '@/assets/images/gardenChic.jpg'
import gardenChicMen1 from '@/assets/images/gardenChicMen.jpg'
import gardenChicCouple from '@/assets/images/gardenChicCouple.jpg'
import gardenChicMens from '@/assets/images/gardenChicMens.jpg'
import DressCodeTab from '../1-atoms/DressCodeTab.vue'
import type { DressCodeTabProps } from '@/types'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const gardenChicImages: Array<DressCodeTabProps & { id: number }> = [
  {
    id: 1,
    imageLeft: gardenChicWomen,
    imageCenter: gardenChicWomens,
    imageRight: gardenChicWomen1,
  },
  {
    id: 2,
    imageLeft: gardenChicMen1,
    imageCenter: gardenChicMens,
    imageRight: gardenChicCouple,
  },
]

const currentImageTab = ref(0)

const getCurrentImageTab = computed(
  () =>
    gardenChicImages.at(currentImageTab.value) ?? {
      id: 1,
      imageLeft: gardenChicWomen,
      imageCenter: gardenChicWomens,
      imageRight: gardenChicWomen1,
    },
)

let interval: number

onMounted(() => {
  interval = setInterval(() => {
    if (currentImageTab.value === 0) {
      currentImageTab.value = 1
    } else {
      currentImageTab.value = 0
    }
  }, 15000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div id="dressCode" class="flex flex-col items-center h-460 md:h-210 w-full">
    <div class="mb-5">
      <div class="font-plusjakartasans text-sm text-primary text-center">CHAMPÊTRE</div>
      <div class="font-forum text-3xl md:text-[4.19rem]">DRESS CODE DES INVITÉS</div>
    </div>
    <div class="hidden md:block md:text-neutral md:w-[110%] md:h-full">
      <img :src="dresscodeBackgroundSvg" />
      <DressCodeBackgroundSvg />
    </div>
    <Transition appear name="route" mode="out-in">
      <DressCodeTab
        :key="getCurrentImageTab.id"
        :image-left="getCurrentImageTab.imageLeft"
        :image-center="getCurrentImageTab.imageCenter"
        :image-right="getCurrentImageTab.imageRight"
      />
    </Transition>
  </div>
</template>
