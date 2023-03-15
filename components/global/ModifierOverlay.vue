<template>
  <div
    class="absolute bg-black bg-opacity-20 top-0 bottom-0 left-0 right-0 py-5 pl-8 pr-4 rounded-xl backdrop-blur-lg flex flex-col opacity-100 z-10"
  >
    <h3 class="text-2xl font-semibold mb-4">Modifiers</h3>
    <div class="overlay-scrollbar pr-4 overflow-y-auto">
      <div class="mb-5 last-of-type:mb-0" v-for="item in cardContent.modifiers">
        <h4 class="font-semibold">
          {{ item.title }}
        </h4>
        <p class="text-xs">{{ item.info }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cardContent: Object,
});
</script>

<style>
.overlay-scrollbar::-webkit-scrollbar {
  width: 10px;
}

.overlay-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  @apply rounded-full;
}

.overlay-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  @apply rounded-full;
}
</style>
