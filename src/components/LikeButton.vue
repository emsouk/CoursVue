<template>
<div class="flex gap-4 bg-blue-500 p-4 rounded-xl">
    <p>Ici le composant likeButton </p>
    <button class="btn btn-success" @click="like">Like</button>
    <button class="btn btn-error" @click="unlike">Unlike</button>
</div>
</template>

<script setup>
    import { defineEmits } from 'vue';

    const emit = defineEmits(['liked', 'unliked']);
    const uneData = ref('uneDonnée');
    const uneAutreDonnée = ref(12);

 function like(){
    emit('liked');
 }

    function unlike(){
        emit('unliked');
    }

</script>