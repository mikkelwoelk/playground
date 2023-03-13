<template>
  <CardContainer :card-content="cardContent">
    <template #content>
      <input v-model.number="answer" type="text" placeholder="What is the answer to life?" />
      <p class="mt-10">
        <span>If you get it right, you get a.. </span>
        <span v-if="answer == 42">🍪</span>
      </p>
    </template>
  </CardContainer>
</template>

<script setup>
const cardContent = ref({
  title: 'V-If',
  info: 'Conditionally render an element or a template fragment based on the truthy-ness of the expression value.',
});

const answer = ref(null);
</script>

<style scoped></style>
