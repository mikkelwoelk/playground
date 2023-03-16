<template>
  <CardContainer :card-content="cardContent">
    <template #content>
      <span>
        The title and description for each of these cards are handled by slots, telling them where to place each piece
        of content.
      </span>
    </template>
  </CardContainer>
</template>

<script setup>
const cardContent = ref({
  title: 'V-Slot',
  info: 'Denote named slots or scoped slots that expect to receive props. Has a shorthand: #',
});
</script>

<style></style>
