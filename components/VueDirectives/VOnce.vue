<template>
  <CardContainer :card-content="cardContent">
    <template #content> </template>
  </CardContainer>
</template>

<script setup>
const cardContent = ref({
  title: 'V-Once',
  info: 'Render the element and component once only, and skip future updates.',
});
</script>

<style></style>
