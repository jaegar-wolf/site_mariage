<script setup lang="ts">
import JoinUsButton from '@/components/1-atoms/JoinUsButton.vue'
import TheTimer from '@/components/2-molecules/TheTimer.vue'
import Welcome from '@/components/2-molecules/WelcomeComponent.vue'
import Carousel from '@/components/1-atoms/Carousel.vue'
import image1 from '@/assets/images/35328565-l_3_256645-163759244248377.jpeg'
import image2 from '@/assets/images/56699345-une-jeune-couple-de-africain-americain-la-mariee-et-jeune-marie-a-leur-mariage-la-ceremonie-photo.jpg'
import image3 from '@/assets/images/C3V3LMt.jpg'
import image4 from '@/assets/images/Laela-Samuel-MC2MonAmour-Destination-Wedding-Miami-14.jpg'
import image5 from '@/assets/images/istockphoto-1399000012-612x612.jpg'
import image6 from '@/assets/images/istockphoto-2090025382-612x612.jpg'
import image7 from '@/assets/images/istockphoto-929904308-612x612.jpg'
import image8 from '@/assets/images/mariages.jpg'
import image9 from '@/assets/images/photographe-mariage-00013.jpg'
import OurStory from '@/components/2-molecules/OurStory.vue'
import HonorSquad from '@/components/2-molecules/HonorSquad.vue'
import TheSchedule from '@/components/2-molecules/TheSchedule.vue'
import TheDressCode from '@/components/2-molecules/TheDressCode.vue'
import TheLetterCard from '@/components/2-molecules/TheLetterCard.vue'
import FAQSection from '@/components/2-molecules/FAQSection.vue'

const carouselImages = [
  { id: 1, img: image1, alt: 'Couple heureux 1' },
  { id: 2, img: image2, alt: 'Couple heureux 2' },
  { id: 3, img: image3, alt: 'Couple heureux 3' },
  { id: 4, img: image4, alt: 'Couple heureux 4' },
  { id: 5, img: image5, alt: 'Couple heureux 5' },
  { id: 6, img: image6, alt: 'Couple heureux 6' },
  { id: 7, img: image7, alt: 'Couple heureux 7' },
  { id: 8, img: image8, alt: 'Couple heureux 8' },
  { id: 9, img: image9, alt: 'Couple heureux 9' },
]
</script>

<template>
  <main class="size-full flex flex-col justify-start items-center gap-8 p-4">
    <Welcome />
    <TheTimer />
    <JoinUsButton />
    <Carousel :carouselImages="carouselImages" />
    <OurStory />
    <HonorSquad />
    <TheSchedule />
    <TheDressCode />
    <TheLetterCard />
    <FAQSection />
  </main>
</template>
