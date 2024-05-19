<template>
  <div>
    <Mobile v-if="isMobileView" />
    <Desktop v-else />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Mobile from "./Mobile.vue";
import Desktop from "./Desktop.vue";

const isMobileView = ref(window.innerWidth <= 768);

const updateView = () => {
  isMobileView.value = window.innerWidth <= 768;
};

onMounted(() => {
  window.addEventListener("resize", updateView);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateView);
});
</script>
