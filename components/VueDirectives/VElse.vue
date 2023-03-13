<template>
  <CardContainer :card-content="cardContent">
    <template #content>
      <input v-model.number="answer" type="text" placeholder="What is 2 + 2?" />
      <p class="mt-10">
        <span v-if="answer != 4">If you get it wrong.. 🍪</span>
        <span v-else>The answer is actually 🐟.. also I ate your cookie.</span>
        <div v-else class="flex flex-col">
          <span>The answer is actually 🐟</span>
          <span>Also I ate your cookie..</span>
        </div>
      </p>
    </template>
  </CardContainer>
</template>

<script setup>
const cardContent = ref({ title: 'V-Else', info: 'Denote the "else block" for v-if or a v-if / v-else-if chain.' });

const answer = ref(null);
</script>

<style scoped></style>
