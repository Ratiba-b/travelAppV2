<template>
  <div>
    <main class="ml-5 flex justify-center w-full app">
      <div
        class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 greeting py-4 bg-white shadow sm:rounded-lg"
      >
        <!-- Replace with your content -->

        <section>
          <h2
            class="title text-2xl font-semibold text-gray-900 flex justify-center mb-10"
          >
            hey,
            <input class="ml-5" type="text" placeholder="Pseudo" />
          </h2>
        </section>
        <section class="create-todo">
          <h3
            class="title text-2xl font-semibold text-gray-900 flex justify-center mb-10"
          >
            Créer une Todo
          </h3>

          <form class="mt-5 sm:flex sm:items-center" @submit.prevent="addTodo">
            <div class="w-full sm:max-w-xs">
              <input
                type="text"
                name="text"
                id="text"
                class="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                placeholder="e.g. acheter de la crème anti insectes "
                v-model="todo"
              />
            </div>
            <button
              type="submit"
              class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-purple-500 px-4 py-2 font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Ajouter
            </button>
            {{ todos.text }}
          </form>
        </section>
        <section>
          <h4
            class="mt-10 title text-xl font-semibold text-gray-900 flex justify-center mb-10"
          >
            Voici la liste de choses à faire:
          </h4>
          <ul
            v-for="todo in todos"
            :key="todo.id"
            role="list"
            class="space-y-3"
          >
            <div class="w-full flex flex-row">
              <li
                class="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6 w-full"
              >
                <!-- Your content -->
                {{ todo.text }}
              </li>
              <button
                class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-purple-500 px-4 py-2 font-medium text-white shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm mb-1"
                @click="removeTodo(todo.id)"
              >
                Supprimer
              </button>
            </div>
          </ul>
          <div v-if="isTodo" class="mt-10">
            <button
              class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-purple-500 px-4 py-2 font-medium text-white shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              @click="clearAll()"
            >
              Supprimer
            </button>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "todo",
  data() {
    return {
      todo: "",
      todos: [
        { id: Math.random(), text: "hello" },
        { id: Math.random(), text: "world" },
      ],
    };
  },
  computed: {
    isTodo() {
      if (this.todos.length > 0) {
        return true;
      }
    },
  },
  methods: {
    addTodo() {
      console.log("todos", this.todos);
      if (!this.todo) {
        return;
      } else {
        this.todos.push({
          id: Math.random(),
          text: this.todo,
        });
        this.todo = "";
      }
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
    clearAll() {
      this.todos = [];
    },
  },
};
</script>
