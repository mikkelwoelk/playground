<template>
  <Transition name="t-todo" appear>
    <div class="c-todo-item" :id="id">
      <div
        :class="[
          'w-full flex flex-col p-5',
          'rounded-md border-2 overflow-hidden',
          'relative bg-gradient-to-r to-transparent',
          'duration-300 ease-in-out',
          importanceColor,
          { 'opacity-30': checked },
          { 'border-red-500': error },
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
          @click="emit('expand')"
        >
          <img class="w-14" src="/expand-icon.svg" alt="" />
        </div>
        <div class="flex justify-between items-center gap-2">
          <div class="flex items-center gap-2 z-10">
            <input type="checkbox" :checked="checked" @click="emit('checked')" />
            <span class="text-md md:text-lg first-letter:capitalize">{{ title }}</span>
          </div>

          <div class="flex items-center gap-2 z-10">
            <span class="text-xs">
              <span class="font-bold text-xs">Due</span>
              {{ date }}
            </span>
            <button
              class="px-2 py-1 border-2 rounded-md active:bg-red-500 hover:bg-red-400 duration-100 ease-in-out"
              @click="emit('delete')"
            >
              <span class="max-lg:hidden">DELETE</span>
              <span class="lg:hidden"> <img class="w-5 rotate-45 fill-white select-none" src="/plus-icon.svg" /></span>
            </button>
          </div>
        </div>
        <div
          v-if="text"
          class="grid grid-rows-[0fr] duration-500 ease-in-out opacity-0"
          :class="{ 'grid-rows-[1fr] mt-5 opacity-100': isExpanded }"
        >
          <p class="text-sm first-letter:capitalize overflow-hidden">
            {{ text }}
          </p>
        </div>
      </div>
    </div>
  </Transition>
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

<style lang="postcss">
.t-todo-enter-active,
.t-todo-leave-active {
  @apply duration-1000 ease-in-out;
}

.t-todo-enter-from {
  @apply opacity-0 translate-y-10 scale-0;
}

.t-todo-leave-to {
  @apply opacity-0 -translate-x-10 scale-0;
}
</style>
