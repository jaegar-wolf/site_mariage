<script setup lang="ts">
import LogoVue from '@/components/1-atoms/LogoM&M.vue'
import NavBarLinks from '@/components/1-atoms/NavBarLinks.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const leftLinks = [
  { path: '/', label: 'Accueil' },
  { path: '#ourStory', label: 'Notre Histoire' },
  { path: '#honorSquad', label: 'Nos amis' },
]

const rightLinks = [
  { path: '#schedule', label: 'Programme' },
  { path: '#dressCode', label: 'Dress code' },
  { path: '#invite', label: 'Invitation' },
]
</script>

<template>
  <header class="navbar max-w-6xl bg-white-100 px-6 h-24">
    <!-- Liens gauche -->
    <div class="flex justify-center w-100 gap-2 h-13 border-b-2 border-neutral rounded-r-3xl">
      <NavBarLinks :links="leftLinks" :route="route" />
    </div>

    <!-- Logo centre -->
    <RouterLink to="/" class="hover:scale-110 transition-transform duration-300 rounded-full">
      <LogoVue />
    </RouterLink>

    <!-- Liens droite -->
    <div class="flex justify-center w-100 gap-2 h-13 border-b-2 border-neutral rounded-l-3xl">
      <NavBarLinks :links="rightLinks" :route="route" />
    </div>
  </header>
</template>
