<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Affichage des données ✏️</h2>

      <form @submit.prevent="submitForm" class="space-y-4">
        <label class="form-control w-full">
          <span class="label-text">Ton nom</span>
          <input v-model.trim="name" type="text" placeholder="Entrez votre nom" class="input input-bordered w-full" />
        </label>

        <label class="form-control w-full">
          <span class="label-text">Ton âge</span>
          <input v-model.number="age" type="number" min="0" placeholder="Entrez votre âge" class="input input-bordered w-full" />
        </label>

        <button class="btn btn-primary w-full" :disabled="!name || age === null || Number.isNaN(age)">
          Mettre à jour
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update-user'])

const name = ref('')
const age = ref(null)

function submitForm() {
  emit('update-user', { name: name.value, age: Number(age.value) })
  name.value = ''
  age.value = null
}
</script>
