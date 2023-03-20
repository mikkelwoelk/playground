<template>
  <div
    v-if="cardContent"
    class="c-card-container relative flex flex-col h-full justify-between py-5 px-8 w-full shadow-2xl rounded-xl"
  >
    <Transition name="t-fade-in">
      <ModifierOverlay v-if="show" :card-content="cardContent" />
    </Transition>
    <ModifierButton v-if="cardContent?.modifiers" @click="() => toggleOverlay()" />
    <div class="c-card-container__inner">
      <CardTitle #card-title> {{ cardContent.title }} </CardTitle>
      <CardInfo #card-info> {{ cardContent.info }} </CardInfo>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  cardContent: Object,
});

const show = ref(false);
const toggleOverlay = () => {
  show.value = !show.value;
};
</script>

<style scoped>
.c-card-container div:last-child :is(.c-card-info) {
  @apply mb-0;
}
</style>
