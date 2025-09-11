 <!-- NAVBAR GLASSMORPHISME -->
<template class="pb-16">
  <div
    class="navbar fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/80 text-black px-6"
  >
    <div class="flex-1">
      <router-link to="/" class="text-2xl font-bold tracking-wide">
        BrandName
      </router-link>
    </div>

    <!-- Menu desktop -->
    <div class="hidden md:flex">
      <ul class="menu menu-horizontal px-1 text-lg">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/about">À propos</router-link></li>
        <li><router-link to="/exercice1">exercice 1</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>

    <!-- Menu mobile -->
    <div class="md:hidden">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg rounded-box w-52 backdrop-blur-md bg-black/40 border border-white/20"
        >
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/about">À propos</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router';

const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

const value = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const stopWatch = watch(
  () => props.modelValue, async (_newValue, _oldValue) => {
    // do something
  },
  {
    immediate: true
  }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

</script>

<style scoped lang="css">
</style>