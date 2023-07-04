<template>
  <div class="p-frontpage">
    <h1 class="page-title" v-text="pageTitle" />
    <div
      class="c-page-list grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto"
    >
      <div class="c-page-list__item rounded-xl" v-for="(page, index) in pages">
        <NuxtLink :to="page.url">
          <CardContainer :card-content="pages[index]"></CardContainer>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const pageTitle = ref('playground');
const pages = ref([
  { title: 'vue directives', info: 'a list of all the built-in directives within Vue.', url: 'directives' },
  { title: 'testarea', info: 'a place to quickly test code.', url: 'testarea' },
  { title: 'todo list', info: 'a todo list project.', url: 'todo' },
  { title: 'scroll animations', info: 'A practice place for making modern web animations.', url: 'scroll-animation' },
  { title: 'custom loaders', info: 'A practice place for making custom loaders.', url: 'custom-loaders' },
]);
</script>

<style lang="postcss">
.c-page-list__item:hover .c-card-title {
  @apply text-cta dark:text-dark-cta;
}
.c-page-list__item .c-card-info {
  @apply opacity-60 dark:opacity-40;
}
.c-page-list__item:hover .c-card-info {
  @apply opacity-100;
}
</style>
