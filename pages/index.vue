<template>
  <div class="p-frontpage">
    <div class="md:px-10 px-5 py-10 md:py-16">
      <h1 class="text-center text-4xl sm:text-6xl md:text-8xl mb-10 md:mb-20" v-text="pageTitle" />
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
  </div>
</template>

<script setup>
const pageTitle = ref('playground');
const pages = ref([
  { title: 'vue directives', info: 'a list of all the built-in directives within Vue.', url: 'directives' },
  { title: 'testarea', info: 'a place to quickly test code.', url: 'testarea' },
  { title: 'todo list', info: 'a todo list project.', url: 'todo' },
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

.c-page-list__item {
  position: relative;
  /* box-shadow: 3px 3px 5px #263540, -3px -3px 5px #3d5567; */
  background-color: var(--color-secondary);
  transition: all ease-in-out 100ms;
}
/* .c-page-list__item:before {
  content: '';
  position: absolute;
  @apply w-full h-full -top-[4%] -left-[1.5%] bg-white rounded-xl blur-sm;
  mix-blend-mode: saturation;
  z-index: -1;
} */
.c-page-list__item .c-card-title {
  @apply duration-200 ease-in-out;
}
.c-page-list__item:hover .c-card-title {
  @apply text-cta;
}
.c-page-list__item .c-card-info {
  @apply duration-200 ease-in-out;
  opacity: 0.4;
}
.c-page-list__item:hover .c-card-info {
  opacity: 1;
}
.c-page-list__item:active {
  box-shadow: inset 3px 3px 5px #263540, inset -3px -3px 5px #3d5567;
  transform: scale(0.99999);
  background-color: #2e3f4d;
}

/* .c-page-list__item:hover:before {
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
} */
</style>
