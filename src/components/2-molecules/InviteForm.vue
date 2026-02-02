<script setup lang="ts">
import { isMobile } from '@/composables'
import { reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  numberOfGuest: 1,
  willAttempt: true,
  meal: 'Poulet',
})

const sendData = () => {
  console.log(formData)
}
const btnClass = isMobile() ? 'btn-primary' : 'btn-base-200'
</script>

<template>
  <div class="bg-base-200 md:bg-primary h-full w-dvw flex flex-col items-center">
    <div
      id="rsvp"
      class="text-3xl md:text-6xl text-center font-forum mt-20 text-primary md:text-base-200"
    >
      SOYEZ NOTRE INVITÉ
    </div>

    <div class="w-full flex flex-col items-center">
      <div class="md:w-4/10 my-2">
        <div class="text-primary md:text-base-200 text-[16px] font-plusjakartasans">
          Nom Complet
        </div>
        <input v-model="formData.name" type="text" class="input input-lg my-2 w-full" />
      </div>
      <div class="md:w-4/10 my-2">
        <div class="text-primary md:text-base-200 text-[16px] font-plusjakartasans">
          Adresse Email
        </div>
        <input v-model="formData.email" type="email" class="input input-lg my-2 w-full" />
      </div>
      <div class="md:w-4/10 my-2">
        <div class="text-primary md:text-base-200 text-[16px] font-plusjakartasans">
          Numéro de téléphone
        </div>
        <input v-model="formData.phone" type="tel" class="input input-lg my-2 w-full" />
      </div>
      <div class="md:w-4/10 my-2">
        <div class="text-primary md:text-base-200 text-[16px] font-plusjakartasans">
          Nombre d'invités
        </div>
        <input
          v-model="formData.numberOfGuest"
          type="number"
          max="5"
          class="input input-lg my-2 w-full"
        />
      </div>
      <div class="w-7/10 md:w-4/10 my-2">
        <div class="text-primary md:text-base-200 text-[16px] font-plusjakartasans font-bold">
          Serez-vous présent au mariage ?
        </div>
        <div class="flex flex-row md:w-4/10 my-2 gap-4">
          <div class="flex flex-row gap-2">
            <input
              type="radio"
              name="radio-presence"
              class="radio radio-neutral"
              :checked="formData.willAttempt"
              :value="formData.willAttempt"
              @click="() => (formData.willAttempt = true)"
            />
            <div class="text-primary md:text-base-200">Oui</div>
          </div>
          <div class="flex flex-row gap-2">
            <input
              type="radio"
              name="radio-presence"
              class="radio radio-neutral"
              :checked="!formData.willAttempt"
              :value="formData.willAttempt"
              @click="() => (formData.willAttempt = false)"
            />
            <div class="text-primary md:text-base-200">Non</div>
          </div>
        </div>
      </div>
      <div class="w-7/10 md:w-4/10 my-2">
        <div class="text-primary md:text-base-200 text-[16px] font-plusjakartasans font-bold">
          Choisissez votre plat :
        </div>
        <div class="flex flex-row md:w-4/10 my-2 gap-4">
          <div class="flex flex-row gap-2">
            <input
              type="radio"
              class="radio radio-neutral"
              :checked="formData.meal === 'Poulet'"
              :value="formData.meal"
              @click="() => (formData.meal = 'Poulet')"
            />
            <div class="text-primary md:text-base-200">Poulet</div>
          </div>
          <div class="flex flex-row gap-2">
            <input
              type="radio"
              class="radio radio-neutral"
              :checked="formData.meal === 'Poisson'"
              :value="formData.meal"
              @click="() => (formData.meal = 'Poisson')"
            />
            <div class="text-primary md:text-base-200">Poisson</div>
          </div>
        </div>
      </div>

      <div class="md:w-4/10 my-10">
        <button class="btn hover:btn-neutral w-full btn-lg" :class="btnClass" @click="sendData">
          Envoyer
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  appearance: textfield;
  -moz-appearance: textfield;
}
</style>
