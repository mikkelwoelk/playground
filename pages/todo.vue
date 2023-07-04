<template>
  <div class="p-todo">
    <h1 class="page-title" v-text="pageTitle" />
    <div class="w-full md:w-8/12 xl:w-1/2 max-w-[700px] mx-auto flex flex-col justify-center gap-10">
      <div class="flex gap-2">
        <form class="flex flex-col gap-2 w-full" @submit.prevent="() => addTodo()" @keyup.enter="() => addTodo()">
          <div class="flex gap-2">
            <input
              v-model.trim="newTodo.title"
              type="text"
              ref="titleInput"
              @keyup.enter="() => addTodo()"
              placeholder="Add title"
              maxlength="35"
              :class="{ 'border-red': error.state }"
            />
            <input v-model.trim="newTodo.text" type="text" maxlength="300" placeholder="Add text" />
          </div>
          <div class="flex gap-3">
            <fieldset class="grid grid-cols-3 pl-2 justify-around w-full">
              <label class="relative">
                <input
                  class="absolute w-0 h-0 opacity-0"
                  v-model="newTodo.importance"
                  :value="1"
                  type="radio"
                  name="radio"
                />
                <span class="custom-radio bg-green-500"></span>
              </label>
              <label class="relative">
                <input
                  class="absolute w-0 h-0 opacity-0"
                  v-model="newTodo.importance"
                  :value="2"
                  type="radio"
                  name="radio"
                />
                <span class="custom-radio bg-yellow-500"></span>
              </label>
              <label class="relative">
                <input
                  class="absolute w-0 h-0 opacity-0"
                  v-model="newTodo.importance"
                  :value="3"
                  type="radio"
                  name="radio"
                />
                <span class="custom-radio bg-red-500"></span>
              </label>
            </fieldset>
            <input class="w-full" v-model="newTodo.date" :min="minDate" type="datetime-local" />
          </div>
          <button class="py-1 px-2 border-2 rounded-md uppercase" @click="() => addTodo()">add todo</button>
        </form>
      </div>
      <div class="flex flex-col gap-2 items-center">
        <div v-if="todoList.length == 0 && !isLoading">
          <span class="text-2xl">All your todos will be right here.</span>
        </div>
        <div v-else class="p-todo__list flex flex-col gap-2 w-full">
          <TodoItem
            :id="todo.id"
            :title="todo.title"
            :text="todo.text"
            :is-expanded="todo.isExpanded"
            :importance="todo.importance"
            :date="todo.date"
            :checked="todo.checked"
            v-for="(todo, index) in todoList"
            :key="`todo-id-${todo.id}`"
            @delete="() => deleteTodo(index)"
            @checked="() => checkTodo(index)"
            @expand="() => expandTodo(index)"
            :style="{
              transitionDelay: `${100 * (index + 1)}ms`,
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const pageTitle = ref('todo list');
const titleInput = ref('');
const isLoading = ref(true);
const todoList = ref([]);
const newTodo = ref({
  id: '',
  title: '',
  text: '',
  importance: 1,
  date: '',
  checked: false,
  isExpanded: false,
});

const error = ref({
  state: false,
  messages: [],
});

const addTodo = () => {
  // if (newTodo.value.title == '') {
  //   error.value.state = true;
  // }

  if (newTodo.value.title != '') {
    newTodo.value.date = new Date().toDateString();
    newTodo.value.id = Math.random().toString(36).substring(2);

    todoList.value.push(newTodo.value);

    saveTodo();

    newTodo.value = {
      title: '',
      text: '',
      importance: newTodo.value.importance,
      date: '',
    };
  }

  titleInput.value.focus();
};

const saveTodo = () => {
  const parsedTodo = JSON.stringify(todoList.value);
  localStorage.setItem('todoList', parsedTodo);
};

const checkTodo = (index) => {
  todoList.value[index].checked = !todoList.value[index].checked;
  if (todoList.value[index].checked) {
    todoList.value.push(todoList.value.splice(index, 1)[0]);
  } else {
    todoList.value.unshift(todoList.value.splice(index, 1)[0]);
  }
  saveTodo();
};

const deleteTodo = (index) => {
  todoList.value.splice(index, 1);

  saveTodo();
};

const expandTodo = (index) => {
  todoList.value.forEach((e, i) => {
    if (i !== index) {
      e.isExpanded = false;
    } else {
      e.isExpanded = !e.isExpanded;
    }
  });
};

const minDate = computed(() => {
  const date = new Date();

  const timeOffset = -new Date().getTimezoneOffset() / 60;
  const year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  let day = date.getUTCDate();
  if (day < 10) {
    day = '0' + day;
  }
  let hours = date.getUTCHours() + timeOffset;
  if (hours < 10) {
    hours = '0' + hours;
  }
  let minutes = date.getUTCMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  return `${year}-${month}-${day}T${hours}:${minutes}`;
});

onMounted(() => {
  const mountedDate = ref({});
  setTimeout(() => {
    mountedDate.value = document.querySelector('input[type="datetime-local"]');
    mountedDate.value.value = minDate.value;
  }, 200);

  if (localStorage.getItem('todoList')) {
    try {
      todoList.value = JSON.parse(localStorage.getItem('todoList'));
      isLoading.value = false;
    } catch (e) {
      localStorage.removeItem('todoList');
    }
  }
});
</script>

<style lang="postcss">
.custom-radio {
  @apply absolute top-0 left-1/2 -translate-x-1/2 max-md:top-1/2 max-md:-translate-y-1/2 w-[30px] h-[30px] md:w-[42px] md:h-[42px] rounded-full cursor-pointer transition-all duration-200 ease-in;
  @apply after:content-[''] after:absolute after:w-[10px] after:h-[10px] after:bg-white after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2;
  @apply after:transition-all after:duration-300 after:ease-in-out;
}

fieldset input:checked ~ .custom-radio::after {
  @apply w-[60%] h-[60%];
}

::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

.border-red {
  border-color: red !important;
}
</style>
