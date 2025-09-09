<template>
<footer
    class="footer backdrop-blur-md bg-black/40 border-t border-white text-white "
  >
    <div>
      <span class="footer-title opacity-80">Navigation</span>
      <router-link to="/" class="link link-hover">Accueil</router-link>
      <router-link to="/about" class="link link-hover">À propos</router-link>
      <router-link to="/services" class="link link-hover">Services</router-link>
      <router-link to="/contact" class="link link-hover">Contact</router-link>
    </div>

    <div>
      <span class="footer-title opacity-80">Réseaux</span>
      <a class="link link-hover">Facebook</a>
      <a class="link link-hover">Instagram</a>
      <a class="link link-hover">Twitter</a>
    </div>

    <div>
      <span class="footer-title opacity-80">Contact</span>
      <p>Email : contact@monsite.com</p>
      <p>Tél : +33 6 12 34 56 78</p>
    </div>
  </footer>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

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