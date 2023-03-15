<template>
  <CardContainer :card-content="cardContent">
    <template #content> </template>
  </CardContainer>
</template>

<script setup>
const cardContent = ref({
  title: 'V-Memo',
  info: '',
});
</script>

<style></style>
