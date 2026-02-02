<script setup lang="ts">
import TheHeader from '@/components/2-molecules/TheHeader.vue'
import InviteForm from './components/2-molecules/InviteForm.vue'
</script>

<template>
  <header>
    <TheHeader class="md:flex md:mb-5 md:justify-center" />
  </header>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <footer class="size-full mt-5 flex flex-col justify-start items-center">
    <InviteForm />
  </footer>
</template>

<style>
/* route transition */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
