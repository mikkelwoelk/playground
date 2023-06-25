<template>
  <div ref="outer" class="p-index">
    <div ref="container" class="p-index__content">
      <!--
              Parse JavaScript values to CSS
              using the style-attribute and
              CSS variables.
              Most of the times this will just
              be a percentage, that you can multiply
              with different values in the style
              section.
          -->
      <div class="p-index__target" :style="`--percentage: ${percentage}`"></div>
    </div>
  </div>
</template>
<script setup>
const outer = ref();
const container = ref();
const percentage = ref(0);
let observer = null;
/**
 * Adds an intersection observer, which adds
 * and removes the scroll event listener
 * whenever the elements enters or leaves
 * the viewport.
 */
onMounted(() => {
  observer = new IntersectionObserver(onIntersection);
  observer.observe(container.value);
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  observer.disconnect();
});
function onIntersection([{ isIntersecting }]) {
  window[isIntersecting ? 'addEventListener' : 'removeEventListener']('scroll', onScroll);
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
  const { top } = outer.value.getBoundingClientRect();
  percentage.value = -top / innerHeight;
  /** Constrain the value to between 0 and 1 */
  percentage.value = Math.min(Math.max(percentage.value, 0), 1);
  /** Apply the easing to the percentage */
  percentage.value = easeInOutCubic(percentage.value);
}
/**
 * Easing function.
 *
 * You don't have to remember these by heart,
 * often you can find different ones online.
 * See https://easings.net/ for example.
 */
function easeInOutCubic(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}
</script>
<style lang="postcss">
.p-index__target {
  position: absolute;
  top: 90vh;
  /* top: 100vh; */
  /* left: 00px; */
  left: 0;
  border-radius: 4px;
  background-color: #222;
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
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  transform: translateY(calc(-50% - var(--percentage) * 50vh)) scale(calc(2 * var(--percentage)));
  /* transform: translate(-50%, calc(-50% + var(--percentage) + 100px));
  transform: translate(calc(-50% + var(--percentage) * 40vw), -50%) scale(var(--percentage)); */
  /* transform: translateY(var(--percentage) * -50%); */
  /* transform: scale(var(--percentage)); */
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
}
/**
* This is just styling and can be safely
* ignored.
*
* The only thing that might be interesting
* is that we have `position: sticky` on
* `.p-index__content`.
*/
body:has(.p-index) {
  overscroll-behavior: none;
}
.p-index {
  height: 200vh;
  padding: 24px;
}
.p-index__content {
  padding-top: 500px;
  position: sticky;
  top: 24px;
  width: calc(100vw - 24px * 2);
  height: calc(100vh - 24px * 2);
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
}
</style>
