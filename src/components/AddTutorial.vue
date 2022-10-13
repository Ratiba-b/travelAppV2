<template>
  <app-header />

  <main class="pt-20">
    <div class="px-4 sm:px-6 lg:px-8 h-56 flex justify-center m-20">
      <div class="bg-white shadow sm:rounded-lg w-96 h-64">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Tutorial</h3>
          <div class="mt-2 max-w-xl text-sm text-gray-500">
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Titre</label>
              <input
                type="text"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Entrez votre pseudo"
                v-model="tutorial.title"
              />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Description</label>
              <input
                type="text-area"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Mot de passe"
                v-model="tutorial.description"
              />
            </div>
            <button
              type="submit"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
              @click.prevent="saveTutorial"
            >
              save
            </button>
          </div>

          <button
            type="submit"
            class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700 mt-10"
            @click.prevent="newTutorial"
          >
            add
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
      };

      TutorialDataService.create(data)
        .then((response) => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    },
  },
};
</script>

<style></style>
