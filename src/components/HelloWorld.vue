<script setup>

import { ref } from 'vue'

// defineProps({
//   msg: String,
// })

const count = ref(0)

const props = defineProps(['foo','username'])

// console.log(props.foo)

</script>





<template>
  <h1>Salut {{ foo }} - {{ username }}</h1>
  <!-- <h1>Salut {{ name }} - {{ msg }}</h1> -->


  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
