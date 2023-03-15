<template>
  <CardContainer
    :card-content="cardContent"
    :class="{
      'bg-red-500': selectedOption == 'red',
      'bg-green-500': selectedOption == 'green',
      'bg-blue-500': selectedOption == 'blue',
    }"
    class="transition-all duration-300 ease-in-out"
  >
    <template #content>
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <span class="text-sm mb-5">Press a button to bind a color to this card.</span>
        </div>
        <div class="w-full flex justify-around">
          <button
            class="border-2 border-white px-2 py-1 rounded-lg hover:bg-red-500 transition-all duration-300 ease-in-out"
            @click="() => changeColor('red')"
          >
            Red
          </button>
          <button
            class="border-2 border-white px-2 py-1 rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out"
            @click="() => changeColor('green')"
          >
            Green
          </button>
          <button
            class="border-2 border-white px-2 py-1 rounded-lg hover:bg-blue-500 transition-all duration-300 ease-in-out"
            @click="() => changeColor('blue')"
          >
            Blue
          </button>
        </div>
      </div>
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

const selectedOption = ref('');

const changeColor = (color) => {
  if (color == 'red') {
    selectedOption.value = 'red';
  }
  if (color == 'green') {
    selectedOption.value = 'green';
  }
  if (color == 'blue') {
    selectedOption.value = 'blue';
  }
  setTimeout(() => {
    selectedOption.value = '';
  }, '3000');
};
</script>

<style scoped></style>
