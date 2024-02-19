<template>
  <div class="p-custom-loaders">
    <h1 class="page-title" v-text="pageTitle"></h1>
    <div class="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
      <!-- circular loader -->
      <div class="loader">
        <div class="loader-circle">
          <div class="relative w-12 h-12">
            <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="18" stroke-width="12" stroke-linecap="round" />
            </svg>
            <span
              class="absolute top-1/2 -translate-y-1/2 mr-[1px] right-0 h-[11px] w-[11px] bg-dark-secondary dark:bg-secondary rounded-full"
            ></span>
          </div>
        </div>
      </div>
      <!-- square loader -->
      <div class="loader">
        <div class="relative w-12 h-12">
          <span class="loader-square"></span>
        </div>
      </div>
      <!-- spinning dots loader -->
      <div class="loader">
        <div class="w-20 h-12">
          <div class="loader-spinning-dots">
            <svg viewBox="0 0 80 48" xmlns="http://www.w3.org/2000/svg">
              <circle class="spin-dot" cx="0" cy="25" r="8"></circle>
              <circle class="spin-dot" cx="0" cy="25" r="8" style="animation-delay: 1000ms"></circle>
              <circle class="spin-dot" cx="0" cy="25" r="8" style="animation-delay: 2000ms"></circle>
            </svg>
          </div>
        </div>
      </div>
      <!-- bouncing dots loader -->
      <div class="loader">
        <div class="w-20 h-12">
          <div class="loader-bouncing-dots">
            <svg viewBox="0 0 80 48" xmlns="http://www.w3.org/2000/svg">
              <circle class="bounce-dot" cx="15" cy="40" r="8"></circle>
              <circle class="bounce-dot" cx="40" cy="40" r="8" style="animation-delay: 500ms"></circle>
              <circle class="bounce-dot" cx="65" cy="40" r="8" style="animation-delay: 1000ms"></circle>
            </svg>
          </div>
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
  @apply border-2 border-dark-secondary dark:border-secondary border-opacity-30 dark:border-opacity-30 w-full h-full grid place-content-center aspect-square rounded-3xl;
}

/* circular loader */
.loader-circle circle {
  @apply fill-transparent stroke-dark-secondary dark:stroke-secondary;
  stroke-dasharray: 135;
  animation: loader-circle cubic-bezier(0.76, 0, 0.24, 1) 2000ms infinite;
}
@keyframes loader-circle {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 270;
  }
}

/* square loader */
.loader-square {
  @apply absolute w-[25%] h-[25%] bottom-0 right-0 rounded-full bg-dark-secondary dark:bg-secondary;
  animation: loader-square cubic-bezier(0.87, 0, 0.13, 1) 3000ms infinite;
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

/* spinning dots */
.loader-spinning-dots .spin-dot {
  @apply fill-dark-secondary dark:fill-secondary rounded-full opacity-0;
  animation: loader-spinning-dot cubic-bezier(0.65, 0, 0.35, 1) 3000ms infinite;
}
@keyframes loader-spinning-dot {
  0% {
    @apply opacity-0;
    cx: 40;
    r: 0;
  }
  20% {
    cx: 16;
    r: 5;
  }
  50% {
    @apply opacity-100;
    cx: 40;
    r: 10;
  }
  80% {
    cx: 64;
    r: 5;
  }
  100% {
    @apply opacity-0;
    cx: 40;
    r: 0;
  }
}

/* bouncing dots */
.loader-bouncing-dots .bounce-dot {
  @apply fill-dark-secondary dark:fill-secondary rounded-full opacity-20;
  animation: loader-bouncing-dot cubic-bezier(0.7, 0, 0.84, 0) 2000ms infinite;
}
@keyframes loader-bouncing-dot {
  0% {
    cy: 40;
  }
  20% {
    @apply opacity-100;
    cy: 10;
  }
  40% {
    cy: 40;
  }
  45% {
    cy: 35;
  }
  60% {
    @apply opacity-20;
    cy: 40;
  }
}
</style>
