<template>
  <div class="md:px-10 px-5 py-10 md:py-16 relative">
    <BackButton />
    <h1 class="text-center text-6xl md:text-8xl mb-10 md:mb-20" v-text="pageTitle" />
    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
      <VueDirectivesVModel />
      <VueDirectivesVIf />
      <VueDirectivesVElse />
      <VueDirectivesVElseIf />
      <VueDirectivesVFor />
      <VueDirectivesVOn />
      <VueDirectivesVBind />
    </div>
  </div>
</template>

<script setup>
const pageTitle = ref('Directives');
</script>

<style lang="scss" scoped></style>
