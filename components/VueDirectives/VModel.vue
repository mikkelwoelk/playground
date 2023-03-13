<template>
  <CardContainer :card-content="cardContent">
    <template #content>
      <input v-model.trim="message" type="text" placeholder="Who do you want to be?" />
      <p class="mt-10">
        <span v-if="message == 'superman' || message == 'Superman'" class="italic"
          >"You are who you choose to be..
        </span>
        <span v-else>"I want to be.. </span>
        <span v-if="message == 'superman' || message == 'Superman'" class="italic">{{ message }}"</span>
        <span v-else="message != ''">{{ message }}"</span>
      </p>
      <p v-if="message == 'superman' || message == 'Superman'" class="italic indent-5">- The Iron Giant</p>
    </template>
  </CardContainer>
</template>

<script setup>
const cardContent = ref({
  title: 'V-Model',
  info: 'Create a two-way binding on a form input element or a component.',
  modifiers: [
    { title: '.lazy', info: 'Listen to change events instead of input' },
    { title: '.number', info: 'Cast valid input string to numbers' },
    { title: '.trim', info: 'Trim input' },
  ],
});

const message = ref('');
</script>

<style></style>
