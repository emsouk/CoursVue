

<template class="flex flex-col items-center justify-center ">

    <h1 style="margin-top: 20vh;"> Comp 2: Dynamic Styling (Class) Mode : Composition </h1>
    <div style="background-color: cyan;">
       <div class="card w-96 shadow-sm" :class="{'bg-base-100': isActive}" @click="isActive = !isActive">
        
        <div class="card-body">
            <h2 class="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end"> </div>
        </div>
        </div>
        <div class="card w-96 shadow-sm" :class="{'bg-base-100': isActive}" @click="isActive = !isActive">
        <div class="card-body">
            <h2 class="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
          
            </div>
        </div>
        </div>
    </div>

      <h2 style="margin-top: 20vh;"> Comp 2: Dynamic Styling (inline) Mode : Composition </h2>
    <div style="background-color: purple;">
       <div class="card w-96 shadow-sm" :style="{'background-color': isClicked ? 'pink' : 'purple'}" @click="isClicked = !isClicked">

        <div class="card-body">
            <h2 class="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
            
            </div>
        </div>
        </div>
        <div class="card bg-base-100 w-96 shadow-sm">

           
        <div class="card-body">
            <h2 class="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
          
            </div>
        </div>
        </div>
    </div>

</template>


<script setup lang="ts">
import {ref} from 'vue';


const isActive = ref(true);
const isClicked = ref(true);


</script>