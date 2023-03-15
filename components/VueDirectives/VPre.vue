<template>
  <CardContainer :card-content="cardContent">
    <template #content> </template>
  </CardContainer>
</template>

<script setup>
const cardContent = ref({
  title: 'V-Pre',
  info: 'Skip compilation for this element and all its children.',
});
</script>

<style></style>
