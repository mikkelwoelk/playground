<template>
  <CardContainer :card-content="cardContent">
    <template #content> </template>
  </CardContainer>
</template>

<script setup>
const cardContent = ref({
  title: 'V-Slot',
  info: 'Denote named slots or scoped slots that expect to receive props. Has a shorthand: #',
});
</script>

<style></style>
