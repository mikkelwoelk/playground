<template>
  <div class="p-testarea">
    <div class="md:px-10 px-5 py-10 md:py-16 relative">
      <BackButton />
      <h1 class="text-center text-6xl md:text-8xl mb-10 md:mb-20 capitalize" v-text="pageTitle" />
      <div class="w-[500px] mx-auto">
        <!-- TESTAREA -->
        <input
          id="searchField"
          v-model="search"
          type="text"
          class="w-full bg-current-color placeholder:text-current-primary py-12 pl-15 pr-47"
          autocomplete="off"
          @input="onChange()"
        />
        <ul v-if="isOpen">
          <li v-for="item in suggestions">
            {{ item.name }}
          </li>
        </ul>
        <!-- TESTAREA -->
      </div>
    </div>
  </div>
</template>

<script setup>
const pageTitle = ref('testarea');

const locations = ref([
  {
    id: 1444,
    name: 'barcelona',
  },
  {
    id: 1394,
    name: 'poris',
  },
  {
    id: 1444,
    name: 'borcelona',
  },
  {
    id: 1394,
    name: 'paris',
  },
  {
    id: 1444,
    name: 'barcelona',
  },
  {
    id: 1394,
    name: 'paris',
  },
]);
const timeout = ref(null);
const isOpen = ref(false);

const onChange = () => {
  isOpen.value = true;
  // $emit('input', search.value);
  if (timeout.value) clearTimeout(timeout.value);
  timeout.value = setTimeout(() => {
    suggestions.value = locations.value.filter((item) => {
      return item.name.toLowerCase().includes(search.value.toLowerCase());
    });
  }, 500);
  if (search.value == '') {
    isOpen.value = false;
  }
};

const search = ref('');

const suggestions = ref([]);
</script>

<style></style>
