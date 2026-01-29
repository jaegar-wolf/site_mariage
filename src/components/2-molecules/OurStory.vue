<script setup lang="ts">
import HeartSvg from '@/assets/svg/heartSvg.vue'
import ourStoryImage1 from '@/assets/images/ourStoryImg1.avif'
import ourStoryImage2 from '@/assets/images/ourStoryImg2.jpg'
import ourStoryImage3 from '@/assets/images/ourStoryImg3.avif'
import ourStoryImage4 from '@/assets/images/ourStoryImg4.jpg'
import ourStoryImage5 from '@/assets/images/ourStoryImg5.jpg'
import ourStoryImage6 from '@/assets/images/ourStoryImg6.jpg'
import ourStoryImage7 from '@/assets/images/ourStoryImg7.jpg'
import ourStoryImage8 from '@/assets/images/ourStoryImg8.jpg'

import StoryChapter from '@/components/1-atoms/StoryChapter.vue'
import { computed, ref } from 'vue'
import ChapterButtons from '../1-atoms/ChapterButtons.vue'
import { isMobile } from '@/composables'
import StoryChapterMobile from '../1-atoms/StoryChapterMobile.vue'

const chapters = [
  {
    id: 1,
    imageLeft: ourStoryImage1,
    imageRight: ourStoryImage2,
    date: '07-01-2020',
    message: 'On a décidé <br/> de sortir ensemble',
  },

  {
    id: 2,
    imageLeft: ourStoryImage3,
    imageRight: ourStoryImage4,
    date: '14-02-2020',
    message: 'Premier rendez-vous <br/> pour la Saint-Valentin',
  },
  {
    id: 3,
    imageLeft: ourStoryImage5,
    imageRight: ourStoryImage6,
    date: '20-06-2021',
    message: 'Voyage à Rome <br/> pour nos 1 an',
  },
  {
    id: 4,
    imageLeft: ourStoryImage7,
    imageRight: ourStoryImage8,
    date: '15-08-2023',
    message: 'Demande en mariage <br/> au bord de la mer',
  },
]

const currentChapter = ref(0)

const getChapter = computed(() => {
  return (
    chapters.at(currentChapter.value) ?? {
      id: 1,
      imageLeft: ourStoryImage1,
      imageRight: ourStoryImage2,
      date: '07-01-2020',
      message: 'On a décidé <br/> de sortir ensemble',
    }
  )
})

const goLeft = () => {
  if (currentChapter.value > 0) {
    currentChapter.value--
  }
}

const goRight = () => {
  if (currentChapter.value < chapters.length - 1) {
    currentChapter.value++
  }
}
</script>

<template>
  <div class="mt-20 -mb-40 md:mb-0 md:mt-0 h-210 flex flex-col items-center">
    <div id="ourStory" class="font-plusjakartasans text-sm text-primary pb-2 md:pb-0">
      NOTRE HISTOIRE
    </div>
    <div class="font-forum text-primary text-3xl md:text-[64px] text-center">
      TOUT A COMMECÉ AU COLLÈGE PAUL SYMPHOR, VOICI NOTRE HISTOIRE
    </div>
    <Transition appear name="route" mode="out-in">
      <template v-if="isMobile()">
        <StoryChapterMobile
          :key="getChapter.id"
          :imageLeft="getChapter.imageLeft"
          :imageRight="getChapter.imageRight"
          :date="getChapter.date"
          :message="getChapter.message"
        />
      </template>
      <template v-else>
        <StoryChapter
          :key="getChapter.id"
          :imageLeft="getChapter.imageLeft"
          :imageRight="getChapter.imageRight"
          :date="getChapter.date"
          :message="getChapter.message"
        />
      </template>
    </Transition>

    <ChapterButtons
      @goLeft="goLeft"
      @goRight="goRight"
      :chapters="chapters"
      :currentChapter="currentChapter"
    />
    <div class="grid grid-cols-2 relative size-5/10 md:size-auto -top-132 left-0 md:left-120">
      <div
        class="text-purple-100 size-9 md:size-22 relative -rotate-20 md:rotate-30 md:left-20 top-42 md:-top-4"
      >
        <HeartSvg class="size-full" />
      </div>
      <div
        class="text-neutral size-5 md:size-12 rotate-12 relative top-50 right-7 md:top-11 md:left-2"
      >
        <HeartSvg class="size-full" />
      </div>
      <div
        class="text-neutral size-18 md:size-42 -rotate-20 md:rotate-30 relative top-64 left-18 md:-top-6 md:left-10"
      >
        <HeartSvg class="size-full" />
      </div>
      <div
        class="text-purple-100 size-9 md:size-22 rotate-30 md:-rotate-12 relative top-18 md:top-0 left-10 md:left-8"
      >
        <HeartSvg class="size-full" />
      </div>
    </div>
  </div>
</template>
