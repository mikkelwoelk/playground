<template>
  <div class="p-todo">
    <div class="md:px-10 px-5 py-10 md:py-16 relative">
      <BackButton />
      <h1 class="text-center text-6xl md:text-8xl mb-10 md:mb-20" v-text="pageTitle" />
      <div class="w-1/2 mx-auto flex flex-col justify-center gap-10">
        <div class="flex gap-2 mx-auto">
          <input v-model="newTodo.title" type="text" ref="input" @keyup.enter="() => addTodo()" />
          <button class="py-1 px-2 border-2 rounded-md" @click="() => addTodo()">Add</button>
        </div>
        <div class="flex flex-col gap-2 items-center">
          <div class="flex flex-col gap-2 w-full">
            <div
              class="w-full flex gap-2 p-5 rounded-md bg-black"
              v-for="(todo, index) in todoList"
              :key="`todo-id-${todo.id}`"
            >
              <input type="checkbox" :checked="todo.checked" />
              <span class="text-lg capitalize">{{ todo.title }}</span>
              <button class="py-1 px-2 bg-red-500" @click="() => deleteTodo(index)">DELETE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const pageTitle = ref('Todo list');
const input = ref(null);
const todoList = ref([]);
const newTodo = ref({
  id: '',
  title: '',
  text: 'hello',
  importance: { color: 'green', lvl: 1 },
  date: {},
  checked: false,
});

const deleteTodo = (todoIndex) => {
  todoList.value.splice(todoIndex, 1);

  saveTodo();
};

const addTodo = () => {
  newTodo.value.date = new Date();
  newTodo.value.id = Math.random().toString(36).substring(2);

  todoList.value.push(newTodo.value);

  saveTodo();

  newTodo.value = {
    title: '',
    description: '',
    importance: {
      color: newTodo.value.importance.color,
      lvl: newTodo.value.importance.lvl,
    },
    date: {},
  };

  input.value.focus();
};

const saveTodo = () => {
  const parsedTodo = JSON.stringify(todoList.value);
  localStorage.setItem('todoList', parsedTodo);
};

onMounted(() => {
  if (localStorage.getItem('todoList')) {
    try {
      todoList.value = JSON.parse(localStorage.getItem('todoList'));
    } catch (e) {
      localStorage.removeItem('todoList');
    }
  }
});
</script>

<style></style>
