<template>
  <div class="c-directives md:px-10 px-5 py-10 md:py-16 relative">
    <BackButton />
    <h1 class="text-center text-6xl md:text-8xl mb-10 md:mb-20" v-text="pageTitle" />
    <div>
      <button @click="() => fetchTodoList()">Fetch</button>
      <ul>
        <li v-for="todo in todoList" :key="`todo-id-${todo.id}`">
          <input type="checkbox" :checked="todo.completed" />
          {{ todo.title }}
          <button @click="() => deleteTodo(todo.id)">DELETE</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const pageTitle = ref('Todo list');
const todoList = ref([]);

const fetchTodoList = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((response) => response.json())
    .then((json) => {
      todoList.value = json;
    });
};

const deleteTodo = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/1`, {
    method: 'DELETE',
  });

  console.log(`"deleted" todo ${id}`);
};
</script>

<style></style>
