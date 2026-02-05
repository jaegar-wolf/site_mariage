<script setup lang="ts">
import lili from '@/assets/honorSquad/Lili.jpg'
import florian from '@/assets/honorSquad/Florian.jpg'
import inola from '@/assets/honorSquad/Inola.jpg'
import geraldine from '@/assets/honorSquad/Geraldine.jpg'
import ruchelle from '@/assets/honorSquad/Ruchelle.jpg'
import kenael from '@/assets/honorSquad/Kenael.png'
import laurent from '@/assets/honorSquad/Laurent.jpg'
import topher from '@/assets/honorSquad/Christopher.jpg'
import sabrina from '@/assets/honorSquad/Sabrina.jpeg'

import { useObserver, isMobile } from '@/composables'
import { gsap } from 'gsap'
import { ref, useTemplateRef } from 'vue'

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
  { img: lili, name: 'Alisson ALBIN' },
  { img: florian, name: 'Florian LIROY' },
]

const defaultHonorSquadList: ImageAndName[] = [
  { img: inola, name: 'Inola MOUNKALA' },
  { img: geraldine, name: 'Géraldine MILORD' },
  { img: ruchelle, name: 'Ruchelle EPHESTION ' },
  { img: kenael, name: 'Kénaël MOREAU' },
  { img: laurent, name: 'Laurent LAHELY' },
  { img: topher, name: 'Christopher LUDOSKY' },
]

const witnessList = ref(defaultWitnessList)
const honorSquadList = ref(defaultHonorSquadList)
const weddingPInView = ref(false)

const honorSquadListRef = useTemplateRef('honorSquad')
const witnessListRef = useTemplateRef('witnessSquad')
const weddingPlanneurRef = useTemplateRef('weddingPlanneur')

useObserver(witnessList, witnessListRef, defaultWitnessList, [])

useObserver(honorSquadList, honorSquadListRef, defaultHonorSquadList, [])

useObserver(weddingPInView, weddingPlanneurRef, true, false)
</script>

<template>
  <div class="flex flex-col items-center min-h-400 overflow-x-hidden">
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
    <div class="w-full min-h-240 flex flex-col items-center justify-center" ref="honorSquad">
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

    <div class="w-full min-h-110 flex flex-col items-center mt-20" ref="weddingPlanneur">
      <div class="font-plusjakartasans text-sm text-primary text-center mb-4">
        NOTRE WEDDING PLANNEUR
      </div>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
        css:false
        appear
      >
        <div
          v-if="weddingPInView"
          class="md:h-100 md:max-w-70 md:min-w-70 shadow-lg text-white border-15 border-b-60"
        >
          <img :src="sabrina" alt="Sabrina" class="size-full object-cover" />

          <div class="text-primary pt-3 text-center font-plusjakartasans font-bold">
            Sabrina VARGAS
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
