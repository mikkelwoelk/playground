<template>
  <CardContainer :card-content="cardContent" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <template #content>
      <Transition name="t-fade-in" duration="100" mode="out-in">
        <div v-if="!isHovered" class="flex flex-col items-center">
          <span class="text-sm mb-14">Hover me!</span>
          <button class="text-transparent opacity-0 border-2 border-transparent w-fit py-0 px-2">.</button>
        </div>
        <div v-else class="flex flex-col items-center">
          <span class="text-sm mb-14">A wild annoying button appeared!</span>
          <button
            class="border-2 w-fit py-0 px-2 rounded-md"
            @mouseover="isBtnMoved = !isBtnMoved"
            :class="{ 'move-button': isBtnMoved }"
            @click="() => btnClicked()"
          >
            Click me!
          </button>
        </div>
      </Transition>
    </template>
  </CardContainer>
</template>

<script setup>
const cardContent = ref({
  title: 'V-On',
  info: 'Attach an event listener to the element. Has a shorthand: @',
  modifiers: [
    { title: '.stop', info: 'Call event.stopPropagation().' },
    { title: '.prevent', info: 'Call event.preventDefault().' },
    { title: '.capture', info: 'Add event listener in capture mode.' },
    { title: '.self', info: 'Only trigger handler if event was dispatched from this element.' },
    { title: '.{KeyAlias}', info: 'Only trigger handler on certain keys.' },
    { title: '.once', info: 'Trigger handler at most once.' },
    { title: '.left', info: 'Only trigger handler for left button mouse events.' },
    { title: '.right', info: 'Only trigger handler for right button mouse events.' },
    { title: '.middle', info: 'Only trigger handler for middle button mouse events.' },
    { title: '.passive', info: 'Attaches a DOM event with { passive: true }.' },
  ],
});

const isHovered = ref(false);
const isBtnMoved = ref(false);

const btnClicked = () => {
  console.log('Wow, you actually clicked the button.. Congratulations I guess..');
};
</script>

<style scoped>
.move-button {
  transform: translateY(-40px);
}
</style>
