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
        <!-- <button
          class="c-site-navigation__menu group relative w-10 h-10 flex items-center justify-end cursor-pointer z-50"
          @click="() => toggleMenuOverlay()"
        > -->
        <button
          class="grid place-content-center aspect-square hover:opacity-50 duration-200 ease-in-out"
          @click="() => toggleMenuOverlay()"
        >
          <!-- <div
            class="menu-line w-4/5 group-hover:w-2/4 h-1 rounded-sm bg-dark-secondary dark:bg-secondary duration-300 ease-in-out"
            :class="{ 'animate-to-close-btn': isOverlayOpen }"
          >

        </div> -->
          <div
            class="menu-line relative w-[32px] h-[32px]"
            :class="[
              isOverlayOpen ? 'c-site-navigation__menu--animate-open' : 'c-site-navigation__menu--animate-close',
              isOverlayOpen ? 'c-site-navigation__menu--animate-open' : 'c-site-navigation__menu--animate-close',
            ]"
          >
            <div class="menu-line-before"></div>
            <div class="menu-line"></div>
            <div class="menu-line-after"></div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/store/main';
import { useRoute } from 'vue-router';

const store = useMainStore();
const route = useRoute();

const navigation = store.siteNavigation;

const activeTheme = ref('');
const isDarkMode = ref(true);

const changeTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value === true) {
    localStorage.theme = 'dark';
    activeTheme.value = 'dark';
  } else {
    localStorage.theme = 'light';
    activeTheme.value = 'light';
  }

  setTheme();
};

const setTheme = () => {
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ? document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark');

  activeTheme.value = localStorage.theme;
};

const isOverlayOpen = ref(false);

const toggleMenuOverlay = () => {
  const body = document.body;
  isOverlayOpen.value = !isOverlayOpen.value;
  if (isOverlayOpen.value) {
    body.classList.add('menu-lock');
  } else {
    body.classList.remove('menu-lock');
  }
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
.menu-lock {
  overflow: hidden;
}

/* .menu-line::before {
  content: '';
  @apply absolute top-[8px] right-0 w-3/5 group-hover:w-4/5 h-1 rounded-sm bg-dark-secondary dark:bg-secondary duration-300 ease-in-out;
}
.menu-line::after {
  content: '';
  @apply absolute bottom-[8px] right-0 w-2/5 group-hover:w-1/5 h-1 rounded-sm bg-dark-secondary dark:bg-secondary duration-300 ease-in-out;
} */

/* .animate-to-close-btn {
  animation: transform-to-close ease-in-out 200ms forwards;
}

@keyframes transform-to-close {
  100% {
    width: 0px;
  }
} */

.c-site-navigation__menu .menu-line {
  @apply absolute w-[25px] h-[2px] bg-dark-secondary dark:bg-secondary transition-opacity;
  transition-delay: 100ms;
  top: 16px;
  left: 16px;
  transform: translateX(-50%);
}

.c-site-navigation__menu .menu-line-before {
  @apply absolute w-[25px] h-[2px] bg-dark-secondary dark:bg-secondary;
  top: 8px;
  left: 16px;
  transform: translateX(-50%);
  transform-origin: center;
}

.c-site-navigation__menu .menu-line-after {
  @apply absolute w-[25px] h-[2px] bg-dark-secondary dark:bg-secondary;
  top: 24px;
  left: 16px;
  transform: translateX(-50%);
  transform-origin: center;
}

.c-site-navigation__menu--animate-open .menu-line {
  opacity: 0;
}

.c-site-navigation__menu--animate-open .menu-line-before {
  @apply absolute w-[25px] h-[2px] bg-dark-secondary dark:bg-secondary;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: center;
  animation: menu-line-before-open 2000ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
}

@keyframes menu-line-before-open {
  0% {
    top: 8px;
    left: 16px;
  }
  20% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(0deg);
  }
  30%,
  60% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(0deg) scaleX(0);
  }
  75% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(0deg) scaleX(1);
  }
  100% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(45deg);
  }
}

.c-site-navigation__menu--animate-close .menu-line-before {
  @apply absolute w-[25px] h-[2px] bg-dark-secondary dark:bg-secondary;
  top: 8px;
  left: 16px;
  transform: translateX(-50%);
  transform-origin: center;
  animation: menu-line-before-close 2000ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
}

@keyframes menu-line-before-close {
  0% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(45deg);
  }
  20% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(0deg);
  }
  30%,
  60% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(0deg) scaleX(0);
  }
  75% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(0deg) scaleX(1);
  }

  100% {
    top: 8px;
    left: 16px;
  }
}

.c-site-navigation__menu--animate-open .menu-line-after {
  @apply absolute w-[25px] h-[2px] bg-dark-secondary dark:bg-secondary;
  top: 24px;
  left: 16px;
  transform: translateX(-50%);
  transform-origin: center;
  animation: menu-line-after-open 2000ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
}

@keyframes menu-line-after-open {
  0% {
    top: 24px;
    left: 50%;
  }
  20% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(0deg);
  }
  30%,
  60% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(0deg) scaleX(0);
  }
  75% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(0deg) scaleX(1);
  }

  100% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(-45deg);
  }
}

.c-site-navigation__menu--animate-close .menu-line-after {
  @apply absolute w-[25px] h-[2px] bg-dark-secondary dark:bg-secondary;
  top: 24px;
  left: 16px;
  transform: translateX(-50%);
  transform-origin: center;
  animation: menu-line-after-close 2000ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
}

@keyframes menu-line-after-close {
  0% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(-45deg);
  }
  20% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(0deg);
  }
  30%,
  60% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(0deg) scaleX(0);
  }
  75% {
    top: 16px;
    left: 16px;
    transform: translateX(-13px) rotate(0deg) scaleX(1);
  }

  100% {
    top: 24px;
    left: 16px;
  }
}

.t-menu-overlay-enter-active {
  @apply duration-500 ease-in-out;
}

.t-menu-overlay-leave-active {
  @apply duration-500 ease-in-out;
}
/* .t-menu-overlay-enter {
  @apply opacity-80;
} */
.t-menu-overlay-leave-to {
  @apply translate-y-full;
}

.t-menu-overlay__cover {
  @apply hidden fixed justify-center items-center left-0 top-0 w-full h-full bg-secondary dark:bg-dark-secondary;
  z-index: 40;
}
.t-menu-overlay__cover:first-child,
.t-menu-overlay-leave-active ~ .t-menu-overlay__cover {
  @apply block;
  /* animation: t-menu-overlay__cover--part-1 2000ms forwards ease-in-out; */
  animation: t-menu-overlay__cover--part-1 1500ms forwards cubic-bezier(0.83, 0, 0.17, 1);
  animation-iteration-count: 1;
}
.t-menu-overlay-enter-active ~ .t-menu-overlay__cover {
  @apply block;
  animation: t-menu-overlay__cover--part-2 500ms forwards cubic-bezier(0.83, 0, 0.17, 1);
  animation-iteration-count: 1;
}

@keyframes t-menu-overlay__cover--part-1 {
  0% {
    clip-path: circle(10% at 50% -20%);
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
