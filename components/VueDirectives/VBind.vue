<template>
  <CardContainer
    :card-content="cardContent"
    :class="{
      'red-color-picked': selectedOption == 'red',
      'green-color-picked': selectedOption == 'green',
      'blue-color-picked': selectedOption == 'blue',
    }"
    class="transition-all duration-300 ease-in-out"
  >
    <template #content>
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <span class="text-sm mb-5">Press a button to bind a color to this card.</span>
        </div>
        <div class="w-full flex justify-around mb-5">
          <button
            class="border-2 border-white px-2 py-1 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
            @click="() => changeColor('red')"
          >
            Red
          </button>
          <button
            class="border-2 border-white px-2 py-1 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out"
            @click="() => changeColor('green')"
          >
            Green
          </button>
          <button
            class="border-2 border-white px-2 py-1 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in-out"
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

let timer;

const changeColor = (color) => {
  clearTimeout(timer);
  if (color == 'red') {
    selectedOption.value = 'red';
  }
  if (color == 'green') {
    selectedOption.value = 'green';
  }
  if (color == 'blue') {
    selectedOption.value = 'blue';
  }
  timer = setTimeout(() => {
    selectedOption.value = '';
  }, '3000');
};
</script>

<style scoped>
.red-color-picked {
  background-color: rgb(239 68 68 / 1);
}
.green-color-picked {
  background-color: rgb(34 197 94 / 1);
}
.blue-color-picked {
  background-color: rgb(59 130 246 / 1);
}
</style>
