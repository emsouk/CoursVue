<template>
<div class="test">
    <div>
        {{ superFormateur }}
    </div>
</div>

</template>
<script setup>
import { defineProps, defineEmits } from 'vue';

const adrar = defineProps(["superFormateur"])
console.log(adrar)

const emmit = defineEmits(["babar"])
emmit("babar", "babar a trop manger")

</script>