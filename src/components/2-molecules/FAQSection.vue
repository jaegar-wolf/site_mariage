<script setup lang="ts">
const faqDataList = [
  {
    question: "Quelle est la date et l'horaire de la cérémonie ?",
    answer:
      'Notre mariage est prévu le 15 août à 17h. Pour profiter pleinement de ce moment, nous vous accueillerons avec joie dès 15h30.',
  },
  {
    question: 'Où se déroulera le mariage ?',
    answer: "La cérémonie aura lieu au Domaine de l'Étoile de Forges, à Longmesnil.",
  },
  {
    question: 'La cérémonie et la réception auront-elles lieu en extérieur ?',
    answer:
      'La cérémonie ainsi que la réception se dérouleront en plein air. Nous vous conseillons de prévoir un vêtement léger en cas de fraîcheur.',
  },
  {
    question: 'Que faire si nous ne pouvons pas venir ?',
    answer:
      'Si vous ne pouvez malheureusement pas être des nôtres, merci de nous prévenir au plus tard le 30 mai afin que nous puissions arrêter définitivement la liste des invités.',
  },
  {
    question: 'Pouvons-nous photographier pendant la cérémonie ?',
    answer:
      "Afin de ne pas perturber le travail de notre photographe et de préserver l'intimité du moment, nous vous prions de ne pas prendre de photos pendant la cérémonie.",
  },
  {
    question: 'Y a-t-il des hôtels à proximité ?',
    answer:
      'Il y a un certain nombre de couchages sur le domaine et des gîtes/hôtels dans les environs. Veuillez contacter Sabrina notre wedding planneur concernant les hébergements.',
  },
  {
    question: "À quelle heure est-il recommandé d'arriver ?",
    answer:
      "La cérémonie débutant à 17h précises, nous vous conseillons d'arriver vers 15h30 pour anticiper d'éventuels retards liés à la circulation ou au stationnement.",
  },
  {
    question: 'Pouvons-nous apporter des cadeaux ?',
    answer:
      'Votre présence nous comble déjà de bonheur ! Si toutefois vous souhaitez nous offrir un présent, une table sera prévue à cet effet lors de la réception.',
  },
]
</script>

<template>
  <div>
    <div class="font-forum text-3xl md:text-6xl text-primary text-center">
      Questions et Conseils
    </div>

    <p class="text-base font-plusjakartasans md:text-xl mt-10 font-bold text-primary text-center">
      Afin que cette journée reste un moment de joie et de sérénité pour tous, nous précisons que la
      présence d’enfants demande une vigilance particulière. Nous vous invitons, si possible, à
      privilégier une organisation sans enfants. Si toutefois ils vous accompagnent, leur
      surveillance restera sous votre responsabilité. Merci pour votre compréhension et votre
      bienveillance.
    </p>
    <div class="flex flex-col md:grid md:grid-cols-2 w-full mt-4">
      <div class="my-4 mx-1" v-for="(value, index) in faqDataList" :key="index">
        <div class="font-forum text-xl md:text-3xl">{{ value.question }}</div>
        <div class="mt-4 font-plusjakartasans text-base md:text-lg">
          {{ value.answer }}
        </div>
      </div>
    </div>
    <p class="font-forum text-xl md:text-3xl mt-5 text-primary text-center">
      Qui contacter pour toute question supplémentaire ?
    </p>
    <p class="mt-4 font-plusjakartasans text-base md:text-lg text-center">
      Pour toutes précisions veuillez contacter notre wedding planneur Sabrina Vargas au numéro
      suivant: <a href="tel:++330637402108">+33 06 37 40 21 08</a>
    </p>
  </div>
</template>
