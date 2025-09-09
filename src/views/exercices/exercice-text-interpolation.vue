<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'  
</script> -->



<template>
  <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>{{ msg }}</p>
    <p>Magic number is {{ magicNumber }} and Pi is {{ pi }}</p>
    <p>User object: Name is {{ object.name }} and Age is {{ object.age }}</p>
    <p>{{ myFunction('test') }}</p>
    <p>{{ bool() }}</p>

    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</template>

<script setup lang="js">

import { ref } from 'vue';

const msg = 'Welcome !!';
const magicNumber = 42;
const pi = 3.14;
const object = { name: 'John', age: 30 };
const myFunction = (string) => {
  return string;
}
function bool() {
  if(Math.random() > 0.5){
    return 'livre boba fett';
  } else {
    return 'livre de la jungle';
  }
}
</script>


<style scoped>
</style>
