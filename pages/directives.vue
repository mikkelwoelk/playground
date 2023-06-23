<template>
  <div class="p-directives">
    <div class="md:px-10 px-5 py-10 md:py-16 relative">
      <h1 class="text-center text-5xl md:text-8xl mb-10 md:mb-20 capitalize" v-text="pageTitle" />
      <div
        class="c-directives-list grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto"
      >
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
  </div>
</template>

<script setup>
const pageTitle = ref('directives');
</script>

<style></style>
