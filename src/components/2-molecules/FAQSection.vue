<script setup lang="ts">
const faqDataList = [
  {
    question: 'What is the date and time of the wedding ?',
    answer:
      'Our wedding will take place on August 201th at 4PM. We ask that guests arrive at least 15 minutes early to ensure everyone is seated in time for the ceremony.',
  },
  {
    question: 'Where is the wedding venue located?',
    answer:
      'The wedding will be held at Saint Mery Church, Miami. Parking is available onsite, and directions can be found here.',
  },
  {
    question: 'Will the ceremony and reception be outdoors ?',
    answer:
      'The ceremony will be held outdoors, and the reception will be outdoors. We recommend bringing a light jacket if the weather is cool.',
  },
  {
    question: 'What should we do if we cannot attend ?',
    answer:
      ' If you’re unable to join us, please let us know as soon as possible by August 201th  so we can finalize our guest count.',
  },
  {
    question: 'Can we take photos during the ceremony ?',
    answer:
      'We ask that guests refrain from taking photos during the ceremony so our photographer can capture the moment without interruptions.',
  },
  {
    question: 'Are there hotels nearby ?',
    answer:
      'Yes, we have reserved a block of rooms at Chateau Hotel. Mention our wedding party to receive a discount when booking. The hotel address is [Address], and the phone number is [Phone Number].',
  },
  {
    question: 'What time should we arrive ?',
    answer:
      'Please plan to arrive by August 20th, 04:00pm,as the ceremony will begin promptly. We suggest allowing extra time for traffic or parking.',
  },
  {
    question: 'Can we bring gifts to the wedding ?',
    answer:
      'Your presence is truly our gift! However, if you’d like to give something, there will be a gift table at the reception.',
  },
  {
    question: 'Will there be a space for children ?',
    answer:
      'Yes, we have a designated children’s area with activities and games. Childcare will be available for children ages 8 and up',
  },
  {
    question: 'Who can we contact with additional questions?',
    answer:
      'For any other questions, feel free to contact [Name] at [Phone Number or Email Address]. We’re happy to help!',
  },
]
</script>

<template>
  <div>
    <div class="font-forum text-6xl text-primary text-center">FAQ'S</div>
    <div class="grid grid-cols-2 w-full mt-4">
      <div class="my-4 mx-1" v-for="(value, index) in faqDataList" :key="index">
        <div class="font-forum text-3xl">{{ value.question }}</div>
        <div class="mt-4 font-plusjakartasans text-lg">
          {{ value.answer }}
        </div>
      </div>
    </div>
  </div>
</template>
