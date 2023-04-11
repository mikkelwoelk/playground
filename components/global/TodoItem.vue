<template>
  <div class="c-todo-item">
    <div
      :class="[
        'w-full flex flex-col  gap-5 p-5',
        'rounded-md border-2 overflow-hidden',
        'relative bg-gradient-to-r to-transparent',
        'transition-all duration-300 ease-in-out',
        importanceColor,
        { 'opacity-30': checked },
        { 'border-red-500': error },
        [isExpanded ? 'max-h-[200px]' : 'max-h-[76px]'],
      ]"
    >
      <div
        v-if="text"
        :class="[
          'absolute -bottom-1 left-1/2 z-20',
          '-translate-x-1/2 opacity-80 p-2',
          'transition-transform duration-300 ease-in-out',
          { '-scale-100': isExpanded },
        ]"
        @click="$emit('expand')"
      >
        <img class="w-14" src="/expand-icon.svg" alt="" />
      </div>
      <div class="flex justify-between items-center gap-2">
        <div class="flex items-center gap-2 z-10">
          <input type="checkbox" :checked="checked" @click="$emit('checked')" />
          <span class="text-md md:text-lg first-letter:capitalize">{{ title }}</span>
        </div>

        <div class="flex items-center gap-2 z-10">
          <span class="text-xs">
            <span class="font-bold text-xs">Due</span>
            {{ date }}
          </span>
          <button
            class="px-2 py-1 border-2 rounded-md active:bg-red-500 hover:bg-red-400 transition-all duration-100 ease-in-out"
            @click="$emit('delete')"
          >
            <span class="max-lg:hidden">DELETE</span>
            <span class="lg:hidden"> <img class="w-5 rotate-45 fill-white select-none" src="/plus-icon.svg" /></span>
          </button>
        </div>
      </div>
      <div v-if="text">
        <p class="text-sm first-letter:capitalize">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
  title: String,
  text: String,
  importance: Number,
  date: String,
  checked: Boolean,
  error: Boolean,
  isExpanded: Boolean,
});

const emit = defineEmits(['expand', 'checked', 'delete']);

const importanceColor = computed(() => {
  if (props.importance == 1) return 'from-green-500';
  if (props.importance == 2) return 'from-yellow-500';
  if (props.importance == 3) return 'from-red-500';
});
</script>

<style lang="postcss"></style>
