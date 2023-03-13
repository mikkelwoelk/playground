<template>
  <CardContainer :card-content="cardContent">
    <template #content>
      <div class="flex justify-around">
        <div>
          <h4>List from array</h4>
          <ul>
            <li class="text-xs" v-for="name in list">{{ name.firstname }} {{ name.lastname }}</li>
          </ul>
        </div>
        <div>
          <h4>List from number</h4>
          <ul>
            <li class="text-xs" v-for="(num, index) in 4" :key="index">{{ num }}. This is index: {{ index }}</li>
          </ul>
        </div>
      </div>
    </template>
  </CardContainer>
</template>

<script setup>
const cardContent = ref({
  title: 'V-For',
  info: 'Render the element or template block multiple times based on the source data.',
});

const list = ref([
  {
    firstname: 'Jim',
    lastname: 'Halpert',
  },
  {
    firstname: 'Dwight',
    lastname: 'Schrute',
  },
  {
    firstname: 'Kevin',
    lastname: 'Malone',
  },
  {
    firstname: 'Michael',
    lastname: 'Scott',
  },
]);
</script>

<style scoped></style>
