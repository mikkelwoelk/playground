<template>
  <div class="p-directives">
    <h1 class="page-title" v-text="pageTitle" />
    <div class="c-directives-list grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
      <VueDirectivesVModel />
      <VueDirectivesVIf />
      <VueDirectivesVElse />
      <VueDirectivesVElseIf />
      <VueDirectivesVFor />
      <VueDirectivesVOn />
      <VueDirectivesVBind />
      <VueDirectivesVSlot />
      <VueDirectivesVPre />
      <VueDirectivesVOnce />
      <VueDirectivesVMemo />
      <VueDirectivesVCloak />
    </div>
  </div>
</template>

<script setup>
const pageTitle = ref('directives');
</script>

<style></style>
