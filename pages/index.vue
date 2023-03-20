<template>
  <div class="md:px-10 px-5 py-10 md:py-16">
    <h1 class="text-center text-6xl md:text-8xl mb-10 md:mb-20" v-text="pageTitle" />
    <div
      class="c-page-list grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto"
    >
      <div class="c-page-list__item relative overflow-hidden shadow-2xl rounded-xl" v-for="(page, index) in pages">
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
  { title: 'Vue Directives', info: 'A list of all the built-in directives within Vue.', url: 'directives' },
  { title: 'Todo List', info: 'A todo list project.', url: 'todo' },
]);
</script>

<style>
@keyframes shine {
  0% {
    left: -100px;
    opacity: 0;
  }
  20% {
    opacity: 0.8;
  }
  100% {
    left: 300%;
    opacity: 0;
  }
}

.c-page-list__item:hover:before {
  content: '';
  position: absolute;
  width: 100px;
  height: 100%;
  opacity: 0.5;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  animation: shine 1500ms forwards;
}
</style>
