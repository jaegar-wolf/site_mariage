<script setup lang="ts">
import brideMaid1 from '@/assets/images/brideMaid1.jpg'
import brideMaid2 from '@/assets/images/brideMaid2.jpg'
import brideMaid3 from '@/assets/images/brideMaid3.jpg'
import groomMen1 from '@/assets/images/groomMen1.avif'
import groomMen2 from '@/assets/images/groomMen2.avif'
import groomMen3 from '@/assets/images/groomMen3.avif'
import witness1 from '@/assets/images/witness1.avif'
import witness2 from '@/assets/images/witness2.avif'
import { useObserver } from '@/composables/observerComposable'
import { gsap } from 'gsap'
import { ref, useTemplateRef } from 'vue'

const isMobile = () => screen.width <= 768
/*** Animations ***/
const beforeEnter = (el: Element) => {
  const target = el as HTMLElement

  if (isMobile()) {
    if (target.dataset.index && Number(target.dataset.index) % 2 === 0) {
      gsap.from(target, {
        opacity: 0,
        x: 100,
        duration: 0.8,
        delay: target.dataset.index ? Number(target.dataset.index) * 0.2 : 0,
      })
    } else {
      gsap.from(target, {
        opacity: 0,
        x: -100,
        duration: 0.8,
        delay: target.dataset.index ? Number(target.dataset.index) * 0.2 : 0,
      })
    }
  } else {
    if (target.dataset.index && Number(target.dataset.index) % 2 === 0) {
      gsap.from(target, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        delay: target.dataset.index ? Number(target.dataset.index) * 0.2 : 0,
      })
    } else {
      gsap.from(target, {
        opacity: 0,
        y: -100,
        duration: 0.8,
        delay: target.dataset.index ? Number(target.dataset.index) * 0.2 : 0,
      })
    }
  }
}
const enter = (el: Element, done: () => void) => {
  const target = el as HTMLElement
  if (isMobile()) {
    gsap.to(target, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      onComplete: done,
      delay: target.dataset.index ? Number(target.dataset.index) * 0.2 : 0,
    })
  } else {
    gsap.to(target, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      onComplete: done,
      delay: target.dataset.index ? Number(target.dataset.index) * 0.2 : 0,
    })
  }
}

const beforeLeave = (el: Element) => {
  const target = el as HTMLElement
  if (isMobile()) {
    gsap.from(target, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      delay: target.dataset.index ? Number(target.dataset.index) * 0.2 : 0,
    })
  } else {
    gsap.from(target, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: target.dataset.index ? Number(target.dataset.index) * 0.2 : 0,
    })
  }
}

const leave = (el: Element, done: () => void) => {
  const target = el as HTMLElement
  if (isMobile()) {
    if (target.dataset.index && Number(target.dataset.index) % 2 === 0) {
      gsap.from(target, {
        opacity: 0,
        x: 100,
        duration: 0.8,
        delay: target.dataset.index ? Number(target.dataset.index) * 0.2 : 0,
      })
    } else {
      gsap.from(target, {
        opacity: 0,
        x: -100,
        duration: 0.8,
        delay: target.dataset.index ? Number(target.dataset.index) * 0.2 : 0,
      })
    }
  } else {
    if (target.dataset.index && Number(target.dataset.index) % 2 === 0) {
      gsap.to(target, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        delay: target.dataset.index ? Number(target.dataset.index) * 0.2 : 0,
        onComplete: done,
      })
    } else {
      gsap.to(target, {
        opacity: 0,
        y: -100,
        duration: 0.8,
        delay: target.dataset.index ? Number(target.dataset.index) * 0.2 : 0,
        onComplete: done,
      })
    }
  }
}

/*** Component functions ***/
interface ImageAndName {
  img: string
  name: string
}

const defaultWitnessList: ImageAndName[] = [
  { img: witness1, name: 'Witness 1' },
  { img: witness2, name: 'Witness 2' },
]

const defaultHonorSquadList: ImageAndName[] = [
  { img: brideMaid1, name: 'Bridesmaid 1' },
  { img: brideMaid2, name: 'Bridesmaid 2' },
  { img: brideMaid3, name: 'Bridesmaid 3' },
  { img: groomMen1, name: 'Groom Men 1' },
  { img: groomMen2, name: 'Groom Men 2' },
  { img: groomMen3, name: 'Groom Men 3' },
]

const witnessList = ref(defaultWitnessList)
const honorSquadList = ref(defaultHonorSquadList)

const honorSquadListRef = useTemplateRef('honorSquad')
const witnessListRef = useTemplateRef('witnessSquad')

useObserver(witnessList, witnessListRef, defaultWitnessList, [])

useObserver(honorSquadList, honorSquadListRef, defaultHonorSquadList, [])
</script>

<template>
  <div class="flex flex-col items-center min-h-400">
    <div id="honorSquad" class="font-forum text-primary text-3xl md:text-[64px] text-center">
      C'EST LE MOMENT DE BRILLER GRÂCE À EUX
    </div>
    <div class="w-full min-h-110 flex flex-col items-center" ref="witnessSquad">
      <div class="font-plusjakartasans text-sm text-primary text-center">NOS TÉMOINS</div>
      <transition-group
        class="flex flex-row flex-wrap justify-center w-8/10 gap-8 mt-8"
        tag="ul"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
        css:false
        appear
      >
        <li
          v-for="(person, index) in witnessList"
          :key="index"
          :data-index="index"
          class="md:h-100 md:max-w-70 md:min-w-70 shadow-lg text-white border-15 border-b-60"
        >
          <img :src="person.img" :alt="person.name" class="size-full object-cover" />

          <div class="text-primary pt-3 text-center font-plusjakartasans font-bold">
            {{ person.name }}
          </div>
        </li>
      </transition-group>
    </div>
    <div class="w-full min-h-220 flex flex-col items-center justify-center" ref="honorSquad">
      <div class="font-plusjakartasans text-sm text-primary text-center mt-10">
        NOS DEMOISELLES ET GARÇONS D'HONNEUR
      </div>
      <transition-group
        class="flex flex-row flex-wrap justify-center w-8/10 gap-8 mt-8"
        tag="ul"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
        css:false
        appear
      >
        <li
          v-for="(person, index) in honorSquadList"
          :key="index"
          :data-index="index"
          class="h-100 max-w-70 min-w-70 shadow-lg text-white border-15 border-b-60"
        >
          <img :src="person.img" :alt="person.name" class="size-full object-cover" />

          <div class="text-primary pt-3 text-center font-plusjakartasans font-bold">
            {{ person.name }}
          </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>
