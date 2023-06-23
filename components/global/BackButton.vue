<template>
  <div
    class="c-back-button w-10 h-10 bg-dark-secondary dark:bg-transparent border-[3px] border-text dark:border-dark-text rounded-full overflow-hidden"
  >
    <NuxtLink class="flex relative group" :to="'/'">
      <img
        class="absolute w-10 group-hover:-translate-x-5 group-hover:opacity-0 transition-all duration-300 ease-in-out"
        src="/arrow-left-icon.svg"
      />
      <img
        class="absolute w-10 translate-x-10 opacity-0 group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
        src="/arrow-left-icon.svg"
      />
    </NuxtLink>
  </div>
</template>

<script setup></script>

<style lang="postcss"></style>
