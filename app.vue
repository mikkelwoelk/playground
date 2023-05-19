<template>
  <NuxtPage />
</template>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
  transition: all 500ms;
}
.page-enter-from {
  opacity: 0;
  transform: translate(-15px, -15px);
}

.page-leave-to {
  opacity: 0;
  transform: translate(15px, 15px);
}
</style>
