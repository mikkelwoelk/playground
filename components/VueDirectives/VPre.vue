<template>
  <CardContainer :card-content="cardContent">
    <template #content>
      <span>
        Without v-pre: <span class="italic">{{ message }}</span></span
      >
      <span v-pre> With v-pre: {{ message }}</span>
    </template>
  </CardContainer>
</template>

<script setup>
const cardContent = ref({
  title: 'V-Pre',
  info: 'Skip compilation for this element and all its children.',
});

const message = ref('Just showing off the v-pre directive');
</script>

<style></style>
