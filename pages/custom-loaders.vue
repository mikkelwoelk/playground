<template>
  <div class="p-custom-loaderss">
    <h1 class="page-title" v-text="pageTitle"></h1>
    <div class="grid grid-cols-4 gap-5">
      <div class="loader">
        <div class="loader-circle">
          <div class="w-12 h-12 relative">
            <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="18" stroke-width="12" stroke-linecap="round" />
            </svg>
            <span
              class="absolute top-1/2 -translate-y-1/2 mr-[1px] right-0 h-[11px] w-[11px] bg-dark-secondary dark:bg-secondary rounded-full"
            ></span>
          </div>
        </div>
      </div>
      <div class="loader">
        <div class="relative w-12 h-12">
          <span class="loader-square"></span>
        </div>
      </div>
      <div class="loader">
        <div class="relative w-12 h-12">
          <span class="loader-dots"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const pageTitle = ref('custom loaders');
</script>

<style lang="postcss">
.loader {
  @apply border-2 border-dark-secondary dark:border-secondary border-opacity-30 dark:border-opacity-30 w-full h-full p-5 grid place-content-center aspect-square rounded-lg;
}

/* .loader-circle {
} */
.loader-circle circle {
  @apply fill-transparent stroke-dark-secondary dark:stroke-secondary;
  stroke-dasharray: 135;
  animation: loader-circle ease-in-out 2500ms infinite;
}
@keyframes loader-circle {
  0% {
    stroke-dashoffset: 0;
    /* stroke-dasharray: 0; */
  }
  100% {
    stroke-dashoffset: 270;
  }
}

.loader-square {
  @apply absolute w-[25%] h-[25%] bottom-0 right-0 rounded-full bg-dark-secondary dark:bg-secondary;
  animation: loader-square ease-in-out 4000ms infinite;
}
@keyframes loader-square {
  0% {
    @apply w-[25%] h-[25%] bottom-0 right-0;
  }
  12.5% {
    @apply w-full h-[25%] bottom-0 right-0;
  }
  25% {
    @apply w-[25%] h-[25%] bottom-0 right-[75%];
  }
  37.5% {
    @apply w-[25%] h-full bottom-0 right-[75%];
  }
  50% {
    @apply w-[25%] h-[25%] bottom-[75%] right-[75%];
  }
  62.5% {
    @apply w-full h-[25%] bottom-[75%] right-0;
  }
  75% {
    @apply w-[25%] h-[25%] bottom-[75%] right-0;
  }
  87.5% {
    @apply w-[25%] h-full bottom-0 right-0;
  }
  100% {
    @apply w-[25%] h-[25%] bottom-0 right-0;
  }
}
</style>
