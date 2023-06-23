<template>
  <div class="c-site-navigation">
    <div
      class="flex w-full bg-background dark:bg-dark-background shadow-xl md:px-10 px-5 py-5 md:py-8"
      :class="[route.path == '/' ? 'justify-end' : 'justify-between']"
    >
      <BackButton v-if="route.path !== '/'" />
      <div class="flex items-center">
        <div
          @click="changeTheme()"
          :class="[
            'relative cursor-pointer flex items-center justify-center gap-[10px] rounded-full w-10',
            'h-fit px-2 py-3 before:absolute before:w-6 before:h-6 before:rounded-full',
            'before:top-1/2 before:-left-[3px] before:-translate-y-1/2 before:shadow-xl',
            'before:bg-dark-secondary before:dark:bg-secondary',
            'before:dark:shadow-xl before:duration-300 before:ease-in-out',
            'after:h-3 after:w-10 after:rounded-full after:absolute',
            'after:bg-dark-secondary after:dark:bg-secondary',
            'after:bg-opacity-40 after:dark:bg-opacity-40',
            activeTheme === 'dark' ? 'before:left-[19px]' : 'before:-left-[3px]',
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const themeCookie = useCookie('theme');
const activeTheme = ref('default');
const isDarkMode = ref(true);

const changeTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value === true) {
    themeCookie.value = 'dark';
    activeTheme.value = 'dark';
  } else {
    themeCookie.value = 'light';
    activeTheme.value = 'light';
  }

  setTheme();
};

const setTheme = () => {
  themeCookie.value === 'dark' || (!themeCookie.value && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ? document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark');

  activeTheme.value = themeCookie.value;
};

onMounted(() => {
  setTheme();
});
</script>

<style lang="postcss"></style>
