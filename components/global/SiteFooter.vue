<template>
  <div class="c-site-footer">
    <!-- <span class="fixed top-[90vh] left-1/2 -translate-x-1/2 text-5xl text-secondary dark:text-dark-secondary">
      woelk
    </span> -->
    <div ref="firstContainer" class="first-container">
      <div ref="firstInner" class="first-inner">
        <!-- <span class="text-5xl text-secondary dark:text-dark-secondary">
          We do identities, branding, digital in all of its wonderful forms, concepts, content, copy, code.
        </span> -->
        <!--
          Parse JavaScript values to CSS
          using the style-attribute and
          CSS variables.
          Most of the times this will just
          be a percentage, that you can multiply
          with different values in the style
          section.
        -->
        <div
          class="first-door flex items-center justify-center text-xs"
          :style="`--firstTranslate: ${firstTranslate}; --firstScale: ${firstScale};`"
        >
          <span class="w-2 sm:w-4 h-auto grid place-content-center">
            <svg class="w-full" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect
                width="1.10842"
                height="13.7017"
                rx="0.554208"
                transform="matrix(-0.964375 -0.264539 -0.264539 0.964375 12.1788 0.293221)"
                fill="black"
              />
              <rect
                width="1.10842"
                height="10.1981"
                rx="0.554208"
                transform="matrix(-0.434081 0.900874 0.900874 0.434081 10.8128 2.02467)"
                fill="black"
              />
              <rect
                x="6.98114"
                y="3.08765"
                width="1.10842"
                height="7.7493"
                rx="0.554208"
                transform="rotate(64.2731 6.98114 3.08765)"
                fill="black"
              />
              <rect
                x="13.0189"
                y="10.3505"
                width="1.10842"
                height="7.7493"
                rx="0.554208"
                transform="rotate(-115.727 13.0189 10.3505)"
                fill="black"
              />
              <rect
                width="1.10842"
                height="9.90678"
                rx="0.554208"
                transform="matrix(0.434081 -0.900874 -0.900874 -0.434081 8.92474 11.287)"
                fill="black"
              />
            </svg>
          </span>
        </div>
      </div>
      <div
        class="w-full rounded-b-[45px] sm:rounded-lg p-6 mt-[100vh] pt-20 bg-dark-secondary dark:bg-secondary flex flex-col justify-start"
      >
        <span class="text-5xl text-secondary dark:text-dark-secondary"> woelk </span>

        <div class="w-full pt-6 sm:h-20 sm:grid sm:grid-flow-col-dense">
          <template v-for="item in navigation">
            <NuxtLink
              :to="item.url"
              class="c-site-footer__item px-2 w-fit sm:w-full relative isolate grid place-content-start sm:place-content-center group"
            >
              <span
                class="c-site-footer__item-text text-secondary capitalize dark:text-dark-secondary grow duration-200 ease-in-out group-hover:delay-500"
              >
                {{ item.title }}</span
              >
              <span class="c-site-footer__item-backdrop"></span>
            </NuxtLink>
          </template>
        </div>
      </div>
      <div class="pt-3 sm:pt-5"></div>
    </div>
    <!-- <div ref="secondContainer" class="second-container">
      <div ref="secondInner" class="second-inner">
        <div class="second-door" :style="`--secondTranslate: ${secondTranslate}; --secondScale: ${secondScale};`"></div>
      </div>
      <div
        class="w-full rounded-b-sm p-6 mt-[100vh] pt-20 bg-dark-background dark:bg-secondary flex flex-col justify-start"
      >
        <span class="text-5xl text-secondary dark:text-dark-secondary">
          We do identities, branding, digital in all of its wonderful forms, concepts, content, copy, code.
        </span>
        <span class="text-5xl mt-10 text-secondary dark:text-dark-secondary">But that’s not what sets us apart.</span>
      </div>
      <div class="pt-6"></div>
    </div> -->
  </div>
</template>
<script setup>
// import { useMainStore } from '~/store/main';
// const store = useMainStore();

// console.log(store);

const navigation = ref([
  { title: 'home', info: "let's go home", url: '/' },
  { title: 'vue directives', info: 'a list of all the built-in directives within Vue.', url: 'directives' },
  { title: 'testarea', info: 'a place to quickly test code.', url: 'testarea' },
  { title: 'todo list', info: 'a todo list project.', url: 'todo' },
  { title: 'scroll animations', info: 'A practice place for making modern web animations.', url: 'scroll-animation' },
  { title: 'custom loaders', info: 'A practice place for making custom loaders', url: 'custom-loaders' },
]);
const firstContainer = ref();
const firstInner = ref();
const firstTranslate = ref(0);
const firstScale = ref(0);
let observer = null;
// const secondContainer = ref();
// const secondInner = ref();
// const secondTranslate = ref(0);
// const secondScale = ref(0);
// let secondObserver = null;
/**
 * Adds an intersection observer, which adds
 * and removes the scroll event listener
 * whenever the elements enters or leaves
 * the viewport.
 */
onMounted(() => {
  observer = new IntersectionObserver(onIntersection);
  observer.observe(firstInner.value);
  // observer.observe(secondInner.value);
  // secondObserver = new IntersectionObserver(onIntersection);
  // secondObserver.observe(secondInner.value);
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  observer.disconnect();
});
function onIntersection(entries) {
  entries.forEach((entry) => {
    window[entry.isIntersecting ? 'addEventListener' : 'removeEventListener']('scroll', onScroll);
  });
}

/**
 * Scroll event listener.
 *
 * Calculates a percentage (important!) value
 * based on the top of the element and the height
 * of the viewport.
 *
 * The exact percentage calculation changes based
 * on the needs. Try and figure out how to get a
 * value based on 0 and 1 based on what you need.
 *
 * `getBoundingClientRect()` often becomes useful
 * here.
 */
function onScroll() {
  const { innerHeight } = window;
  const { top } = firstContainer.value.getBoundingClientRect();
  firstTranslate.value = -top / innerHeight;
  /** Constrain the value to between 0 and 1 */
  firstTranslate.value = Math.min(Math.max(firstTranslate.value, 0), 1);
  /** Apply the easing to the percentage */
  firstScale.value = easeInQuart(firstTranslate.value);
  firstTranslate.value = easeOutQuart(firstTranslate.value);
}
/**
 * Easing function.
 *
 * You don't have to remember these by heart,
 * often you can find different ones online.
 * See https://easings.net/ for example.
 */
function easeInQuart(x) {
  return x * x * x * x;
}
function easeOutQuart(x) {
  return 1 - Math.pow(1 - x, 4);
}
</script>
<style lang="postcss">
.c-site-footer svg rect {
  @apply fill-secondary dark:fill-dark-secondary;
}
.c-site-footer__item:not(.c-site-footer__item:first-child)::before {
  @apply sm:-ml-[1px];
}
.c-site-footer__item::before {
  content: '';
  @apply absolute h-3/5 w-[1px] bg-secondary dark:bg-dark-secondary top-1/2 -translate-y-1/2 duration-300 ease-in-out;
  transition-delay: 200ms;
}

.c-site-footer__item:last-child:after {
  @screen sm {
    content: '';
    @apply absolute h-3/5 w-[1px] bg-secondary dark:bg-dark-secondary top-1/2 right-0 -translate-y-1/2 duration-300 ease-in-out;
  }
}

.c-site-footer__item:hover::before {
  @apply h-full;
  transition-delay: 0ms;
}

.c-site-footer__item .c-site-footer__item-backdrop {
  @apply absolute h-full w-0 bg-secondary dark:bg-dark-secondary -z-[1] duration-200 ease-in-out;
  transition: width 200ms ease-in-out;
}

.c-site-footer__item:hover .c-site-footer__item-backdrop {
  width: 100%;
  transition-delay: 500ms;
}

.c-site-footer__item:hover .c-site-footer__item-text {
  @apply text-dark-secondary dark:text-secondary;
}
/**
  * Use the CSS variable (--percentage) that we
  * defined in the template section, to move, rotate,
  * scale, or whatever else you want.
  *
  * This can be done fx. just multiplying values
  * in a calc, as seen below.
  */
/* width: calc(128px + 128px * var(--percentage));
  height: calc(128px + 128px * var(--percentage)); */
/* transform: translate(-50%, calc(-50% + var(--percentage) + 100px));
  transform: translate(calc(-50% + var(--percentage) * 40vw), -50%) scale(var(--percentage)); */

.first-container {
  height: 200vh;
  padding: 12px 12px 0 12px;
  @screen sm {
    padding: 20px 20px 0 20px;
  }
}
/**
* Notice `position: sticky` here
*/
.first-inner {
  position: sticky;
  top: 24px;
  width: calc(100vw - 12px * 2);
  @screen sm {
    top: 48px;
    width: calc(100vw - 20px * 2);
  }
  height: calc(100vh - 20px * 2);
  @apply rounded-t-lg;
  overflow: hidden;
}

.first-door {
  position: absolute;
  top: 100vh;
  left: 50%;
  @apply bg-dark-secondary dark:bg-secondary rounded-t-full;
  width: 100px;
  height: 100px;
  transform: translate(-50%, calc(-50% - var(--firstTranslate) * 50vh)) scale(calc(20 * var(--firstScale)));
  border-radius: 50px 50px 50px 50px;
}
/*
.second-container {
  height: 200vh;
  padding: 24px 24px 0 24px;
}

.second-inner {
  position: sticky;
  top: 48px;
  width: calc(100vw - 24px * 2);
  height: calc(100vh - 24px);
  @apply rounded-t-sm;
  overflow: hidden;
}

.second-door {
  position: absolute;
  top: 100vh;
  left: 50%;
  @apply bg-dark-background dark:bg-secondary rounded-t-full;
  width: 100px;
  height: 100px;
  transform: translate(-50%, calc(-50% - var(--secondTranslate) * 50vh)) scale(calc(20 * var(--secondScale)));
  border-radius: 50px 50px 0 0;
} */
</style>
