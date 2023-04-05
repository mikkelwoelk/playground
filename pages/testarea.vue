<template>
  <div class="p-testarea">
    <div class="md:px-10 px-5 py-10 md:py-16 relative">
      <BackButton />
      <h1 class="text-center text-6xl md:text-8xl mb-10 md:mb-20 capitalize" v-text="pageTitle" />
      <div class=""></div>
    </div>
  </div>
</template>

<script setup>
const pageTitle = ref('testarea');
</script>

<style></style>
