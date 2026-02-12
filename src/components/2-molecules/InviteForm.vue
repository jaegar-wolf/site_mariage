<script setup lang="ts">
import { isMobile } from '@/composables'
import { reactive, ref, useTemplateRef, watch } from 'vue'
import axios from 'axios'
import { useDebounceFn } from '@vueuse/core'

interface Guest {
  firstName: string
  lastName: string
  meal: string
  willAttend: boolean
}
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, // 10 secondes max
})
const formData = reactive<{
  firstName: string
  lastName: string
  numberOfGuests: number
  guestList: Guest[]
  willAttend: boolean
  meal: string
}>({
  firstName: '',
  lastName: '',
  numberOfGuests: 1,
  guestList: [],
  willAttend: true,
  meal: 'Poulet',
})

const validationErrors = reactive({
  firstName: '',
  lastName: '',
  numberOfGuests: '',
  guests: [] as string[],
})

const validateForm = (): boolean => {
  let isValid = true

  // Réinitialiser les erreurs
  validationErrors.firstName = ''
  validationErrors.lastName = ''
  validationErrors.numberOfGuests = ''
  validationErrors.guests = []

  // Validation du prénom
  if (!formData.firstName.trim()) {
    validationErrors.firstName = 'Le prénom est obligatoire'
    isValid = false
  }

  // Validation du nom
  if (!formData.lastName.trim()) {
    validationErrors.lastName = 'Le nom est obligatoire'
    isValid = false
  }

  // Validation du nombre d'invités
  if (formData.numberOfGuests < 1 || formData.numberOfGuests > 6) {
    validationErrors.numberOfGuests = 'Le nombre d\'invités doit être entre 1 et 6'
    isValid = false
  }

  // Validation des invités supplémentaires (seulement s'il y en a)
  if (formData.guestList.length > 0) {
    formData.guestList.forEach((guest, index) => {
      if (!guest.firstName.trim() || !guest.lastName.trim()) {
        validationErrors.guests[index] = 'Le nom et le prénom sont obligatoires'
        isValid = false
      }
    })
  }

  return isValid
}

const sendData = async () => {
  // Valider le formulaire avant d'envoyer
  if (!validateForm()) {
    dialogMessage.status = 'error'
    dialogMessage.title = 'Formulaire incomplet'
    dialogMessage.message = 'Veuillez remplir tous les champs obligatoires (nom et prénom)'
    openDialog()
    return
  }

  try {
    isLoading.value = true
    await api.post('/sheets/add-guest', formData)

    dialogMessage.status = 'success'
    dialogMessage.title = 'Merci pour votre réponse !'
    dialogMessage.message =
      "Votre réponse a été enregistrée, à bientôt ! Si vous avez d'autres questions, adressez-vous à Sabrina"
    openDialog()
  } catch (error) {
    dialogMessage.status = 'error'
    dialogMessage.title = 'Une erreur est survenue'
    dialogMessage.message =
      "Nous sommes désolés, votre réponse n'a pas été enregistrée. Contactez Sabrina"
    openDialog()
    if (axios.isAxiosError(error)) {
      console.log('Status:', error.response?.status)
      console.log('Message:', error.response?.data)
    }
  } finally {
    isLoading.value = false
  }
}

const debouncedSend = useDebounceFn(sendData, 300)

const btnClass = isMobile() ? 'btn-primary' : 'btn-base-200'

const cachedGuests: Guest[] = []

const changeNumberOfGuest = (numberOfGuests: number) => {
  const targetLength = numberOfGuests - 1

  // Sauvegarde les données actuelles dans le cache
  formData.guestList.forEach((guest, i) => {
    cachedGuests[i] = guest
  })

  if (targetLength <= 0) {
    formData.guestList = []
  } else {
    const newList: Guest[] = []
    for (let i = 0; i < targetLength && i < 6; i++) {
      newList.push(
        cachedGuests[i] || {
          firstName: '',
          lastName: '',
          willAttend: true,
          meal: formData.meal,
        },
      )
    }
    formData.guestList = newList
  }
}

// Watch pour mettre à jour la liste des invités en temps réel
watch(() => formData.numberOfGuests, (newValue) => {
  // Ne mettre à jour que si la valeur est valide
  if (newValue >= 1 && newValue <= 6 && !isNaN(newValue)) {
    changeNumberOfGuest(newValue)
  }
})

const updateGuestField = <K extends keyof Guest>(index: number, field: K, value: Guest[K]) => {
  const guest = formData.guestList.at(index)
  if (guest) {
    guest[field] = value
  }
}

const updateGuestAttendance = (index: number, answer: string) => {
  updateGuestField(index, 'willAttend', answer === 'Oui')
}

const isLoading = ref(false)

const dialogRef = useTemplateRef<HTMLDialogElement>('dialogRef')

const dialogMessage = reactive({
  title: '',
  message: '',
  status: 'success' as 'success' | 'error',
})

const openDialog = () => {
  dialogRef.value?.showModal()
}

const closeDialog = () => {
  dialogRef.value?.close()
}
</script>

<template>
  <div class="bg-base-200 md:bg-primary h-full w-dvw flex flex-col items-center">
    <div
      id="rsvp"
      class="text-3xl md:text-6xl text-center font-forum mt-20 text-primary md:text-base-200"
    >
      SOYEZ NOTRE INVITÉ
    </div>

    <div class="w-full flex flex-col items-center mb-20">
      <div class="w-7/10 md:w-4/10 my-2">
        <div class="text-primary md:text-base-200 text-[16px] font-plusjakartasans">Nom</div>
        <input
          v-model="formData.lastName"
          type="text"
          class="input input-lg my-2 w-full"
          :class="{ 'border-error': validationErrors.lastName }"
        />
        <div v-if="validationErrors.lastName" class="text-error text-sm mt-1">
          {{ validationErrors.lastName }}
        </div>
      </div>

      <div class="w-7/10 md:w-4/10 my-2">
        <div class="text-primary md:text-base-200 text-[16px] font-plusjakartasans">Prénom</div>
        <input
          v-model="formData.firstName"
          type="text"
          class="input input-lg my-2 w-full"
          :class="{ 'border-error': validationErrors.firstName }"
        />
        <div v-if="validationErrors.firstName" class="text-error text-sm mt-1">
          {{ validationErrors.firstName }}
        </div>
      </div>

      <div class="w-7/10 md:w-4/10 my-2">
        <div class="text-primary md:text-base-200 text-[16px] font-plusjakartasans">
          Nombre d'invités
        </div>
        <input
          v-model.number="formData.numberOfGuests"
          @focus="(event) => (event.target as HTMLInputElement).select()"
          type="number"
          max="6"
          min="1"
          class="input input-lg my-2 w-full"
          :class="{ 'border-error': validationErrors.numberOfGuests }"
        />
        <div v-if="validationErrors.numberOfGuests" class="text-error text-sm mt-1">
          {{ validationErrors.numberOfGuests }}
        </div>
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
              :checked="formData.willAttend"
              :value="formData.willAttend"
              @click="() => (formData.willAttend = true)"
            />
            <div class="text-primary md:text-base-200">Oui</div>
          </div>
          <div class="flex flex-row gap-2">
            <input
              type="radio"
              name="radio-presence"
              class="radio radio-neutral"
              :checked="!formData.willAttend"
              :value="formData.willAttend"
              @click="() => (formData.willAttend = false)"
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
      <template v-if="formData.guestList.length > 0">
        <div class="text-base-200 md:w-4/10 font-plusjakartasans font-bold">Invités :</div>
        <div
          v-for="(guest, index) in formData.guestList"
          :key="index"
          class="w-full px-5 md:px-0 md:w-4/10"
        >
          <div class="grid grid-cols-4 gap-3 items-center">
            <div>
              <input
                type="text"
                class="input input-lg my-2"
                :class="{ 'border-error': validationErrors.guests[index] }"
                placeholder="Nom"
                :value="guest.lastName"
                @input="
                  (event) =>
                    updateGuestField(index, 'lastName', (event.target as HTMLInputElement).value)
                "
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Prénom"
                class="input input-lg my-2"
                :class="{ 'border-error': validationErrors.guests[index] }"
                :value="guest.firstName"
                @input="
                  (event) =>
                    updateGuestField(index, 'firstName', (event.target as HTMLInputElement).value)
                "
              />
            </div>
            <select
              class="select select-lg"
              :value="guest.meal"
              @change="
                (event) => updateGuestField(index, 'meal', (event.target as HTMLInputElement).value)
              "
            >
              <option disabled selected>Plat</option>
              <option>Poulet</option>
              <option>Poisson</option>
            </select>

            <select
              class="select select-lg"
              :value="guest.willAttend ? 'Oui' : 'Non'"
              @change="
                (event) => updateGuestAttendance(index, (event.target as HTMLInputElement).value)
              "
            >
              <option disabled selected>Présence</option>
              <option>Oui</option>
              <option>Non</option>
            </select>
          </div>
          <div v-if="validationErrors.guests[index]" class="text-error text-sm mt-1">
            {{ validationErrors.guests[index] }}
          </div>
        </div>
      </template>

      <div class="md:w-4/10 mt-10">
        <button
          class="btn hover:btn-neutral w-full btn-lg"
          :class="btnClass"
          @click="debouncedSend"
        >
          <template v-if="isLoading">
            <span class="loading loading-spinner loading-lg"></span>
          </template>
          <template v-else> Envoyer </template>
        </button>
      </div>

      <dialog ref="dialogRef" class="modal">
        <div
          class="modal-box border-t-4"
          :class="dialogMessage.status === 'success' ? 'border-success' : 'border-error'"
        >
          <h3
            class="text-lg font-bold"
            :class="dialogMessage.status === 'success' ? 'text-success' : 'text-error'"
          >
            {{ dialogMessage.title }}
          </h3>
          <p class="py-4">{{ dialogMessage.message }}</p>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button @click="closeDialog">close</button>
        </form>
      </dialog>
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
