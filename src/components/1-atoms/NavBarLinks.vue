<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationNormalizedLoadedGeneric } from 'vue-router'

const { links } = defineProps<{
  links: { path: string; label: string }[]
  route: RouteLocationNormalizedLoadedGeneric
}>()

const activeClass = 'btn-neutral text-neutral '
const inactiveClass = 'btn-primary text-primary'

const labelToMajusc = computed(() =>
  links.map((link) => ({
    ...link,
    label: link.label.toUpperCase(),
  })),
)
</script>

<template>
  <RouterLink
    v-for="link in labelToMajusc"
    :key="link.path"
    :to="link.path"
    class="btn btn-ghost text-base font-medium group relative overflow-hidden hover:text-white transition-colors duration-300"
    :class="route.path === link.path ? activeClass : inactiveClass"
  >
    {{ link.label }}
  </RouterLink>
</template>
