<template>
  <div class="card w-96 shadow-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white">
    <div class="card-body items-center text-center">
      <h2 class="card-title">Composant affichage des données utilisateur</h2>
      <p class="text-lg font-semibold">{{ user.name }}</p>
      <p class="text-sm">{{ user.age }} ans</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  user: { type: Object, required: true }
})

</script>
