<template>
  <div class="c-back-button w-10 h-10 absolute border-[3px] rounded-full overflow-hidden">
    <NuxtLink class="flex relative group" :to="'/'">
      <img
        class="absolute w-10 fill-white group-hover:-translate-x-5 group-hover:opacity-0 transition-all duration-300 ease-in-out"
        src="/arrow-left-icon.svg"
        alt=""
      />
      <img
        class="absolute w-10 fill-white translate-x-10 opacity-0 group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
        src="/arrow-left-icon.svg"
        alt=""
      />
    </NuxtLink>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
