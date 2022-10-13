<template>
  <app-header />

  <main class="pt-20">
    <div class="px-4 sm:px-6 lg:px-8 h-56 flex justify-center m-20">
      <div class="bg-white shadow sm:rounded-lg w-96 h-64">
        <div class="">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Tutorial</h3>
          <div class="mt-2 max-w-xl text-sm text-gray-500">
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">cherche</label>
              <input
                type="text"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Entrez votre pseudo"
              />
              <button
                type="submit"
                class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700 mt-10"
                @click.prevent="searchTitle"
              >
                save
              </button>
            </div>
          </div>
          <h4>tuto list</h4>
          <ul>
            <li
              v-for="(tutorial, index) in tutorials"
              :key="index"
              @click="setActiveTutorial(tutorial, index)"
            >
              {{ tutorial.title }}
            </li>
          </ul>
          <button
            type="submit"
            class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700 mt-10"
            @click.prevent="removeAllTutorials"
          >
            remove
          </button>
        </div>
        <div class="">
          <div v-if="currentTutorial">
            <h4>Tutorial</h4>
            <div>
              <label><strong>Title:</strong></label> {{ currentTutorial.title }}
            </div>
            <div>
              <label><strong>Description:</strong></label>
              {{ currentTutorial.description }}
            </div>
            <div>
              <label><strong>Status:</strong></label>
              {{ currentTutorial.published ? "Published" : "Pending" }}
            </div>

            <router-link :to="'/tutorials/' + currentTutorial.id" class=""
              >Edit</router-link
            >
          </div>
          <div v-else>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then((response) => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = tutorial ? index : -1;
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then((response) => {
          this.tutorials = response.data;
          this.setActiveTutorial(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
};
</script>

<style></style>
