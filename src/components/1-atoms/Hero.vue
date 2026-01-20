<script lang="ts" setup>
// Logique TS ici si besoin (ex: gestion d'état)
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Fond champêtre avec motif floral subtil -->
    <div
      class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center"
    >
      <div class="absolute inset-0 bg-green-50/40"></div>
      <!-- Overlay vert pâle -->
    </div>

    <!-- Contenu principal -->
    <div class="relative z-10 text-center px-4 max-w-4xl">
      <h1 class="text-5xl font-serif text-white drop-shadow-md mb-4">Notre Mariage</h1>
      <p class="text-xl text-white/80 font-light italic mb-8">
        12 Septembre 2026 · Domaine de Lavande
      </p>
      <button
        class="px-8 py-3 bg-white/90 text-pink-600 rounded-full hover:bg-white hover:scale-105 transition-all"
      >
        Découvrir
      </button>
    </div>

    <!-- Fleurs décoratives (vrai style champêtre) -->
    <img
      src="https://cdn-icons-png.flaticon.com/512/3173/3173348.png"
      class="absolute top-10 left-10 w-20 h-20 animate-float opacity-80"
      alt="Pétales de rose"
    />
    <img
      src="https://cdn-icons-png.flaticon.com/512/3173/3173348.png"
      class="absolute bottom-20 right-20 w-24 h-24 animate-float-reverse opacity-80"
      alt="Fleur des champs"
    />
  </section>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(3deg);
  }
}
@keyframes float-reverse {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(15px) rotate(-3deg);
  }
}
.animate-float {
  animation: float 5s ease-in-out infinite;
}
.animate-float-reverse {
  animation: float-reverse 6s ease-in-out infinite;
}
</style>
