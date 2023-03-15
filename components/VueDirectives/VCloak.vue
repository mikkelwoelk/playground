<template>
  <CardContainer :card-content="cardContent">
    <template #content> </template>
  </CardContainer>
</template>

<script setup>
const cardContent = ref({
  title: 'V-Cloak',
  info: 'Used to hide un-compiled template until it is ready.',
});
</script>

<style></style>
