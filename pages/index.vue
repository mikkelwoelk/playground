<template>
  <div class="md:px-10 px-5 py-10 md:py-16">
    <h1 class="text-center text-6xl md:text-8xl mb-10 md:mb-20" v-text="pageTitle" />
    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
      <div v-for="page in pages">
        <NuxtLink :to="page.url">
          <CardContainer :card-content="pages[0]"> </CardContainer>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const pageTitle = ref('playground');
const pages = ref([
  { title: 'Directives', info: 'A list of all the built-in directives within Vue.', url: 'directives' },
]);
</script>

<style lang="scss" scoped></style>
