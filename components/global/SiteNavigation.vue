<template>
  <div class="c-site-navigation">
    <Transition name="t-menu-overlay">
      <template v-if="isOverlayOpen">
        <div class="t-menu-overlay__cover">
          <div class="w-full h-full grid place-content-center">
            <div class="w-full h-full">
              <div class="flex flex-col gap-2 items-center">
                <template v-for="item in navigation">
                  <NuxtLink
                    class="menu-item text-center uppercase font-bold"
                    :to="item.url"
                    @click="() => toggleMenuOverlay()"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </template>
              </div>
              <div class="absolute bottom-8 right-10 flex items-center">
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
        </div>
      </template>
    </Transition>
    <div
      class="flex w-full bg-background dark:bg-dark-background md:px-10 px-5 py-5 md:py-8 h-[80px] md:h-[103px]"
      :class="[route.path == '/' ? 'justify-end' : 'justify-between']"
    >
      <BackButton v-if="route.path !== '/'" />

      <div class="fixed top-5 right-5 md:top-8 md:right-10 z-50 flex items-center">
        <div
          class="c-site-navigation__menu group relative w-10 h-10 flex items-center justify-end py-3 cursor-pointer z-50"
          @click="() => toggleMenuOverlay()"
        >
          <span
            class="menu-line w-4/5 group-hover:w-2/4 h-1 rounded-sm bg-dark-background dark:bg-secondary duration-300 ease-in-out"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const navigation = ref([
  { title: 'home', info: "let's go home", url: '/' },
  { title: 'vue directives', info: 'a list of all the built-in directives within Vue.', url: 'directives' },
  { title: 'testarea', info: 'a place to quickly test code.', url: 'testarea' },
  { title: 'todo list', info: 'a todo list project.', url: 'todo' },
  { title: 'scroll animations', info: 'A practice place for making modern web animations.', url: 'scroll-animation' },
  { title: 'custom loaders', info: 'A practice place for making custom loaders', url: 'custom-loaders' },
]);

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

const isOverlayOpen = ref(false);

const toggleMenuOverlay = () => {
  isOverlayOpen.value = !isOverlayOpen.value;
};
watch(
  route,
  (value) => {
    isOverlayOpen.value = false;
  },
  { deep: true, immediate: true }
);

onMounted(() => {
  setTheme();
});
</script>

<style lang="postcss">
.menu-line::before {
  content: '';
  @apply absolute top-[8px] right-0 w-3/5 group-hover:w-4/5 h-1 rounded-sm bg-dark-background dark:bg-secondary duration-300 ease-in-out;
}
.menu-line::after {
  content: '';
  @apply absolute bottom-[8px] right-0 w-2/5 group-hover:w-1/5 h-1 rounded-sm bg-dark-background dark:bg-secondary duration-300 ease-in-out;
}

.t-menu-overlay-enter-active {
  @apply duration-500 ease-in-out;
}

.t-menu-overlay-leave-active {
  @apply duration-1000 ease-in-out;
}
/* .t-menu-overlay-enter {
  @apply opacity-80;
} */
.t-menu-overlay-leave-to {
  @apply opacity-0;
}

.t-menu-overlay__cover {
  @apply hidden fixed justify-center items-center left-0 top-0 w-full h-full bg-secondary dark:bg-dark-secondary;
  z-index: 40;
}
.t-menu-overlay__cover:first-child,
.t-menu-overlay-leave-active ~ .t-menu-overlay__cover {
  @apply block;
  /* animation: t-menu-overlay__cover--part-1 1000ms forwards ease-in-out; */
  animation: t-menu-overlay__cover--part-1 1000ms forwards cubic-bezier(0.83, 0, 0.17, 1);
  animation-iteration-count: 1;
}
.t-menu-overlay-enter-active ~ .t-menu-overlay__cover {
  @apply block;
  animation: t-menu-overlay__cover--part-2 500ms forwards cubic-bezier(0.83, 0, 0.17, 1);
  animation-iteration-count: 1;
}

@keyframes t-menu-overlay__cover--part-1 {
  0% {
    clip-path: circle(10% at 50% -10%);
  }
  50% {
    clip-path: circle(0 at 50% 50%);
  }
  100% {
    clip-path: circle(100%);
  }
}
/* @keyframes t-menu-overlay__cover--part-1 {
  0% {
    clip-path: circle(0 at calc(100% - 30px) 35px);
  }
  100% {
    clip-path: circle(100%);
  }
} */

/* @screen sm {
  @keyframes t-menu-overlay__cover--part-1 {
    0% {
      clip-path: circle(0 at calc(100% - 50px) 50px);
    }
    100% {
      clip-path: circle(100%);
    }
  }
} */

@keyframes t-menu-overlay__cover--part-2 {
  0% {
    clip-path: inset(0 0 0 0);
  }
  100% {
    clip-path: inset(100% 100% 100% 100%);
  }
}

.menu-item {
  @apply duration-100 ease-in-out text-dark-secondary dark:text-secondary px-1;
  font-size: clamp(1rem, 8vw, 4.5rem);
  font-family: 'Anton', 'Poppins', sans-serif;
  letter-spacing: 0.2rem;
  font-weight: 500;
  width: calc(200% + 5% * 2);
}
.menu-item:nth-child(even):hover {
  @apply rotate-2 bg-cta dark:bg-dark-cta text-secondary dark:text-dark-secondary;
}
.menu-item:nth-child(odd):hover {
  @apply -rotate-2 bg-cta dark:bg-dark-cta text-secondary dark:text-dark-secondary;
}

/* .t-menu-overlay__cover:first-child .menu-item,
.t-menu-overlay-leave-active ~ .menu-item {
  animation: t-menu-overlay__cover--part-1 2000ms forwards cubic-bezier(0.83, 0, 0.17, 1);
  transition: opacity ease-in-out 2000ms;
} */
</style>
