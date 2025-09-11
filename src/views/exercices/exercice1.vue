<template>
    <div style="border: 1px solid black; margin: 70px; padding: 20px; width: 300px; text-align: center;">
        <img :src="object.photo" alt="Photo" style="width: 100%; height: auto; border-radius: 50%;" >
        <h2>{{ object.name }}</h2>
         <input style="border: 1px solid black; text-align: center;" type="text" :value = "object.name" >
        <p>Age: {{ object.age  }}</p>
        <p>Age + 10 :  {{ object.age + 10}}</p>
        <p> NB Random : {{ Math.random() }}</p>

    </div>

</template>

<script setup lang="ts">

let object = {
  photo: "https://goodflair.com/app/uploads/2024/07/beautiful-bengal-cat.jpg",
  name: "Mario",
  age: 45,
};
</script>