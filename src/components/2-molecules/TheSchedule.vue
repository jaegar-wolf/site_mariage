<script setup lang="ts">
import starForgeEntry from '@/assets/images/etoileDeForgesEntreeTest.jpg'
import arcAndFlower from '@/assets/images/arcAndFlower.avif'
import cheers from '@/assets/images/cheers.webp'
import receptionPicture from '@/assets/images/receptionPicture.webp'
import SchedulePartOdd from '../1-atoms/SchedulePartOdd.vue'
import type { SchedulePartProps } from '@/types'
import SchedulePartEven from '../1-atoms/SchedulePartEven.vue'
import { isMobile } from '@/composables'

const scheduleList: SchedulePartProps[] = [
  {
    title: '01. ACCEUIL DES INVITÉS',
    time: '15h30',
    isFirst: true,
    linkOnImage: true,
    image: starForgeEntry,
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est earum autemunde, nam architecto eligendi illum fugit? Architecto quis tenetur error similique totam non beatae, dolor commodi eveniet veritatis.',
    imageCover: true,
  },
  {
    title: '02. CÉRÉMONIE LAÏQUE',
    time: '17h00',
    image: arcAndFlower,
    linkOnImage: false,
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est earum autemunde, nam architecto eligendi illum fugit? Architecto quis tenetur error similique totam non beatae, dolor commodi eveniet veritatis.',
    imageCover: true,
  },
  {
    title: "03. VIN D'HONNEUR",
    time: '18h00',
    image: cheers,
    linkOnImage: false,
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est earum autemunde, nam architecto eligendi illum fugit? Architecto quis tenetur error similique totam non beatae, dolor commodi eveniet veritatis.',
    imageCover: true,
  },
  {
    title: '04. RÉCEPTION',
    time: '20h00',
    image: receptionPicture,
    linkOnImage: false,
    isLast: true,
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est earum autemunde, nam architecto eligendi illum fugit? Architecto quis tenetur error similique totam non beatae, dolor commodi eveniet veritatis.',
    imageCover: true,
  },
]
</script>

<template>
  <div id="schedule">
    <template v-for="(schedulePart, index) in scheduleList">
      <template v-if="isMobile()">
        <SchedulePartOdd
          :key="index"
          :title="schedulePart.title"
          :time="schedulePart.time"
          :comment="schedulePart.comment"
          :image="schedulePart.image"
          :is-first="schedulePart.isFirst"
          :is-last="schedulePart.isLast"
          :link-on-image="schedulePart.linkOnImage"
          :image-cover="schedulePart.imageCover"
        />
      </template>
      <template v-else-if="!(index % 2)">
        <SchedulePartOdd
          :key="index"
          :title="schedulePart.title"
          :time="schedulePart.time"
          :comment="schedulePart.comment"
          :image="schedulePart.image"
          :is-first="schedulePart.isFirst"
          :is-last="schedulePart.isLast"
          :link-on-image="schedulePart.linkOnImage"
          :image-cover="schedulePart.imageCover"
        />
      </template>
      <template v-else>
        <SchedulePartEven
          :key="index"
          :title="schedulePart.title"
          :time="schedulePart.time"
          :comment="schedulePart.comment"
          :image="schedulePart.image"
          :is-first="schedulePart.isFirst"
          :is-last="schedulePart.isLast"
          :link-on-image="schedulePart.linkOnImage"
          :image-cover="schedulePart.imageCover"
        />
      </template>
    </template>
  </div>
</template>
