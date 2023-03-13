<template>
  <CardContainer :card-content="cardContent">
    <template #content>
      <select name="colors" id="colors" class="w-fit">
        <option value="default" selected disabled>Select a color to bind</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
    </template>
  </CardContainer>
</template>

<script setup>
const cardContent = ref({
  title: 'V-Bind',
  info: 'Dynamically bind one or more attributes, or a component prop to an expression. Has a shorthand: :',
  modifiers: [
    { title: '.camel', info: 'Transform the kebab-case attribute name into camelCase.' },
    { title: '.prop', info: 'Force a binding to be set as a DOM property.' },
    { title: '.attr', info: 'Force a binding to be set as a DOM attribute. ' },
  ],
});
</script>

<style scoped></style>
