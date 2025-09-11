

<template>
    <div class="mt-16" style="background-color: green;">
        <h1>TP: Dynamic Styling Mode : Composition</h1>
        <input type="text" v-model="text" name="" id="">

        <h2 :class="{ 'maClassHello': text === 'Hello','maClassworld': text === 'World' }">Hello World class dynamique</h2>

        <input :style="{backgroundColor: text1 }"  type="text" v-model="text1"  name="" id=""> <br>

        <h2 :class="{ 'hidden': hiddenTitle }">  Hello World</h2>

        <input type="button" @click="hiddenTitle = !hiddenTitle" value="Afficher 1er titre">
    </div>
</template>


<script setup lang="ts">
import {ref} from 'vue';

const text = ref('');
const text1 = ref('');
const hiddenTitle = ref(false);



</script>

<style scoped lang="css">




.maClassHello {
    color: cyan;
    background-color: purple;
    font-size: 20px;
}

.maClassworld{
    color: greenyellow;
    background-color: rgb(43, 21, 21);
    font-size: 25px;
}

    

</style>