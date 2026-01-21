<script setup lang="ts">
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
</script>

<template>
  <div class="bg-primary w-dvw flex flex-col items-center">
    <div id="rsvp" class="text-6xl text-center font-forum mt-20 text-base-200">
      SOYEZ NOTRE INVITÉ
    </div>
    <div class="my-6 font-plusjakartasans text-[16px] text-base-200">
      Your kind respond in requested by August twentieth, 2024
    </div>
    <div class="w-full flex flex-col items-center">
      <div class="w-4/10 my-2">
        <div class="text-base-200 text-[16px] font-plusjakartasans">Nom Complet</div>
        <input v-model="formData.name" type="text" class="input input-lg my-2 w-full" />
      </div>
      <div class="w-4/10 my-2">
        <div class="text-base-200 text-[16px] font-plusjakartasans">Adresse Email</div>
        <input v-model="formData.email" type="email" class="input input-lg my-2 w-full" />
      </div>
      <div class="w-4/10 my-2">
        <div class="text-base-200 text-[16px] font-plusjakartasans">Numéro de téléphone</div>
        <input v-model="formData.phone" type="tel" class="input input-lg my-2 w-full" />
      </div>
      <div class="w-4/10 my-2">
        <div class="text-base-200 text-[16px] font-plusjakartasans">Nombre d'invités</div>
        <input
          v-model="formData.numberOfGuest"
          type="number"
          max="5"
          class="input input-lg my-2 w-full"
        />
      </div>
      <div class="w-4/10 my-2">
        <div class="text-base-200 text-[16px] font-plusjakartasans font-bold">
          Serez-vous présent au mariage ?
        </div>
        <div class="flex flex-row w-4/10 my-2 gap-4">
          <div class="flex flex-row gap-2">
            <input
              type="radio"
              name="radio-presence"
              class="radio radio-neutral"
              :checked="formData.willAttempt"
              :value="formData.willAttempt"
              @click="() => (formData.willAttempt = true)"
            />
            <div class="text-base-200">Oui</div>
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
            <div class="text-base-200">Non</div>
          </div>
        </div>
      </div>
      <div class="w-4/10 my-2">
        <div class="text-base-200 text-[16px] font-plusjakartasans font-bold">
          Choisissez votre plat :
        </div>
        <div class="flex flex-row w-4/10 my-2 gap-4">
          <div class="flex flex-row gap-2">
            <input
              type="radio"
              class="radio radio-neutral"
              :checked="formData.meal === 'Poulet'"
              :value="formData.meal"
              @click="() => (formData.meal = 'Poulet')"
            />
            <div class="text-base-200">Poulet</div>
          </div>
          <div class="flex flex-row gap-2">
            <input
              type="radio"
              class="radio radio-neutral"
              :checked="formData.meal === 'Poisson'"
              :value="formData.meal"
              @click="() => (formData.meal = 'Poisson')"
            />
            <div class="text-base-200">Poisson</div>
          </div>
        </div>
      </div>

      <div class="w-4/10 mt-6 mb-20">
        <button class="btn btn-base-200 hover:btn-neutral w-full btn-lg" @click="sendData">
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
