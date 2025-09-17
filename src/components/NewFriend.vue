 <!-- Enfants  -->

<template>
    <div class="bg-base-200 min-h-screen p-6">
        <div class="container mx-auto max-w-4xl">
            <!-- Section Informations personnelles -->
            <div class="card bg-base-100 shadow-xl mb-8">
                <div class="card-body">
                    <h1 class="card-title text-3xl mb-6">Tu n'as pas d'amis ? Remplis moi ce formulaire ! 🤙</h1>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <form @submit.prevent="submitDataForm" class="space-y-4">
                        <div class="form-control">
                            <label class="label">
                                <span  class="label-text font-bold text-lg">Name</span>
                            </label>
                            <input v-model="name" type="text" placeholder="votre nom" class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold text-lg">Tél</span>
                            </label>
                            <input v-model="tel" type="text" placeholder="Votre Tél" class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold text-lg">Email</span>
                            </label>
                            <input v-model="mail" type="email" placeholder="Votre EMAIL" class="input input-bordered" />
                        </div>

                        <button v-on:click="submit" type="submit"class="btn btn-primary mt-4">Ajouter</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {ref} from "vue";

const name = ref("");
const tel = ref("");
const mail = ref("");
const emit = defineEmits(["ajouter-ami"]);

const submitDataForm = ()=> {
    emit('ajouter-ami', name.value, tel.value, mail.value);
}



</script>