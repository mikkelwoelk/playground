<template>
  <CardContainer :card-content="cardContent">
    <template #content>
      <input v-model.number="answer" type="text" placeholder="Tell me something that is truthy" />
      <p class="mt-10">
        <span v-if="answer == true">Yes this is truthy, how about something else..</span>
        <span v-else-if="answer == 'true'">"true" is correct, but what else is considered "true"</span>
        <span v-else-if="answer == 'false'">This is the exact opposite of what I'm asking..</span>
        <span v-else>Nothing is not the answer I'm looking for..</span>
      </p>
    </template>
  </CardContainer>
</template>

<script setup>
const cardContent = ref({ title: 'V-Else-If', info: 'Denote the "else if block" for v-if. Can be chained.' });

const answer = ref(null);
</script>

<style scoped></style>
