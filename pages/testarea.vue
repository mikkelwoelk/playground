<template>
  <div class="p-testarea">
    <div class="md:px-10 px-5 py-10 md:py-16 relative">
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
          <li v-if="isLoading">Henter forslag...</li>
          <li v-for="item in suggestions" v-else>
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
    id: 1593,
    name: 'Home',
  },
  {
    id: 1618,
    name: 'Aabenraa',
  },
  {
    id: 1608,
    name: 'Aalborg',
  },
  {
    id: 1619,
    name: 'Aalborg (1)',
  },
  {
    id: 1614,
    name: 'Barcelona',
  },
  {
    id: 1636,
    name: 'Bernay',
  },
  {
    id: 1601,
    name: 'Blans',
  },
  {
    id: 1597,
    name: 'Boizenburg',
  },
  {
    id: 1678,
    name: 'Bramming',
  },
  {
    id: 1699,
    name: 'Carlisle Road',
  },
  {
    id: 1616,
    name: 'Chiasso',
  },
  {
    id: 1635,
    name: 'Defis',
  },
  {
    id: 1620,
    name: 'Dinklage',
  },
  {
    id: 1621,
    name: 'Esbjerg',
  },
  {
    id: 1595,
    name: 'Essen',
  },
  {
    id: 1704,
    name: 'Essen Shop',
  },
  {
    id: 1706,
    name: 'Falkenberg',
  },
  {
    id: 1642,
    name: 'Flensburg',
  },
  {
    id: 1652,
    name: 'Gadstrup',
  },
  {
    id: 1663,
    name: 'Göteborg',
  },
  {
    id: 1680,
    name: 'Haarlem',
  },
  {
    id: 1653,
    name: 'Hamburg',
  },
  {
    id: 1598,
    name: 'Herning',
  },
  {
    id: 1665,
    name: 'Herning (1)',
  },
  {
    id: 1607,
    name: 'Holsted',
  },
  {
    id: 1667,
    name: 'Hong Kong',
  },
  {
    id: 1603,
    name: 'Horsens',
  },
  {
    id: 1609,
    name: 'Husum',
  },
  {
    id: 1604,
    name: 'Jönköping',
  },
  {
    id: 1651,
    name: 'Kiel Friland',
  },
  {
    id: 1666,
    name: 'Kolding',
  },
  {
    id: 1605,
    name: 'Kolo',
  },
  {
    id: 1700,
    name: 'Krakow',
  },
  {
    id: 1705,
    name: 'Låsby - Infoods',
  },
  {
    id: 1612,
    name: 'Manchester',
  },
  {
    id: 1713,
    name: 'Manchester Stanley Road',
  },
  {
    id: 1615,
    name: 'New Jersey',
  },
  {
    id: 1686,
    name: 'Nottingham',
  },
  {
    id: 1692,
    name: 'Okinawa',
  },
  {
    id: 1606,
    name: 'Oldenburg',
  },
  {
    id: 1622,
    name: 'Oldenburg (1)',
  },
  {
    id: 1634,
    name: 'Orleans',
  },
  {
    id: 1677,
    name: 'Pinghu',
  },
  {
    id: 1709,
    name: 'Pucklechurch',
  },
  {
    id: 1594,
    name: 'Randers',
  },
  {
    id: 1602,
    name: 'Ringsted',
  },
  {
    id: 1693,
    name: 'Ringsted (1)',
  },
  {
    id: 1711,
    name: 'Rochdale',
  },
  {
    id: 1600,
    name: 'Rønne',
  },
  {
    id: 1599,
    name: 'Sæby',
  },
  {
    id: 1623,
    name: 'Schüttorf',
  },
  {
    id: 1610,
    name: 'Sdr. Felding',
  },
  {
    id: 1617,
    name: 'Seoul',
  },
  {
    id: 1668,
    name: 'Shanghai - Danish Crown',
  },
  {
    id: 1596,
    name: 'Skærbæk',
  },
  {
    id: 1624,
    name: 'Svenstrup',
  },
  {
    id: 1664,
    name: 'Teterow',
  },
  {
    id: 1679,
    name: 'Thorning',
  },
  {
    id: 1613,
    name: 'Tokyo',
  },
  {
    id: 1637,
    name: 'Tulip Paris',
  },
  {
    id: 1710,
    name: 'Vantaa',
  },
  {
    id: 1625,
    name: 'Vejle',
  },
  {
    id: 1708,
    name: 'Vester Skerninge',
  },
  {
    id: 1690,
    name: 'Warwick',
  },
  {
    id: 1714,
    name: 'Warwick Tachbrook Park',
  },
  {
    id: 1611,
    name: 'Zagreb',
  },
]);
const timeout = ref(null);
const isLoading = ref(true);
const isOpen = ref(false);

const onChange = () => {
  isLoading.value = true;
  isOpen.value = true;
  // $emit('input', search.value);
  if (timeout.value) clearTimeout(timeout.value);
  timeout.value = setTimeout(() => {
    suggestions.value = locations.value.filter((item) => {
      return item.name.toLowerCase().includes(search.value.toLowerCase());
    });
    isLoading.value = false;
  }, 500);
  if (search.value == '') {
    isOpen.value = false;
  }
};

const search = ref('');

const suggestions = ref([]);
</script>

<style></style>
