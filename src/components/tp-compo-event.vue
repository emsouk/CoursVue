<template>
  <div class="min-h-screen bg-base-200 flex flex-col items-center justify-center gap-8 p-6">
    <h1 class="text-2xl font-bold text-center">Composant qui recupère les données du User</h1>

    <UserActive :user="monObjet" />
    <UserData @update-user="updateUser" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UserActive from './UserActive.vue'
import UserData from './UserData.vue'

const monObjet = ref({ 
    name: 'Bertrand', 
    age: 34 
})

function updateUser(newUser) {
  monObjet.value = newUser
}
</script>
