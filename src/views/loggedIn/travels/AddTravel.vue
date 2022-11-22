<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="h-10 rounded-lg"></div>
  <main class="relative -mt-32">
    <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="h-20 rounded-lg"></div>

        <form class="m-10 space-6" @submit.prevent="addTravel">
          <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
            <div class="md:grid md:grid-cols-3">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Ajoute un nouveau voyage
                  </h3>
                  <p class="mt-1 text-sm text-gray-600">
                    Tu pourras créer ton agenda perso après ca
                  </p>
                </div>

                <!-- apparait si le user est un pro  -->
                <section
                  v-if="isTrue === true"
                  class="mt-10 px-4 sm:px-0 dropdown-wrapper"
                >
                  <div @click="isVisible = !isVisible" class="selected-item">
                    <span
                      v-if="selectedItem"
                      for="email-address"
                      class="block text-sm font-medium text-gray-700"
                      >{{ selectedItem.username }}</span
                    >
                    <span
                      v-else
                      for="email-address"
                      class="block text-sm font-medium text-gray-700"
                      >Quel voyageur ?
                    </span>
                    <svg
                      :class="isVisible ? 'dropdown' : ''"
                      class="w-6 h-6 drop-down-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>

                  <div
                    :class="isVisible ? 'visible' : 'invisible'"
                    class="dropdown-popover"
                  >
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autocomplete="email"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="rechercher un client"
                      v-model="searchQuery"
                    />
                    <span v-if="filteredClient.length === 0"
                      >Pas de résultats</span
                    >
                    <div class="overflow-y-scroll">
                      <div class="options">
                        <ul>
                          <li
                            @click="selectItem(client)"
                            v-for="(client, index) in filteredClient"
                            :key="`user-${index}`"
                          >
                            {{ client.username }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div class="mt-5 md:col-span-2 md:mt-0">
                <div class="">
                  <div class="bg-white px-4 py-5 sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6 sm:col-span-4">
                        <label
                          for="email-address"
                          class="block text-sm font-medium text-gray-700"
                          >Titre</label
                        >
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autocomplete="email"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          v-model="travel.title"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <label
                          for="email-address"
                          class="block text-sm font-medium text-gray-700"
                          >Ville</label
                        >
                        <vue3-simple-typeahead
                          id="typeahead_id"
                          placeholder="Start writing..."
                          :items="cities"
                          @selectItem="selectCity"
                          @onInput="onInput"
                          @onBlur="onBlur"
                          :itemProjection="
                            (item) => {
                              return item.name;
                            }
                          "
                        >
                        </vue3-simple-typeahead>
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <label
                          for="email-address"
                          class="block text-sm font-medium text-gray-700"
                          >Quelle est la nature de ton séjour ?
                        </label>
                        <textarea
                          rows="5"
                          cols="33"
                          type="text"
                          name="email-address"
                          id="email-address"
                          autocomplete="email"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray"
                          v-model="travel.description"
                        >
                          La grande fan de mangas que je suis à toujours voulu visiter le Japon. Ce moment est enfin arrivé...</textarea
                        >
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <label
                          for="date"
                          class="block text-sm font-medium text-gray-700"
                          >Début</label
                        >
                        <input
                          type="date"
                          name="date"
                          id="date"
                          autocomplete="address-level2"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          v-model="travel.startDate"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-4">
                        <label
                          for="region"
                          class="block text-sm font-medium text-gray-700"
                          >Fin</label
                        >
                        <input
                          type="date"
                          name="region"
                          id="region"
                          autocomplete="address-level1"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          v-model="travel.endDate"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-20 rounded-lg"></div>

          <div class="flex justify-end">
            <button
              type="button"
              class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Annuler
            </button>
            <button
              type="submit"
              class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Enregistrer
            </button>
          </div>
        </form>
        <div class="h-10 rounded-lg"></div>
      </div>
    </div>
  </main>
</template>

<script>
import { travelService } from "../../../_services/travels.service";
import { flightsService } from "../../../_services/APIFlights.service";

import { useAuthStore } from "../../../stores/authStore";
import { useClientStore } from "../../../stores/clientStore";
import { useTravelStore } from "../../../stores/travelStore";
import { useNotifStore } from "../../../stores/notifStore";
import { onMounted, ref } from "vue";

import { mapStores } from "pinia";

const storeAuth = useAuthStore();
const clientStore = useClientStore();

export default {
  name: "AddTravel",

  components: {},

  data() {
    return {
      address: "",
      userRole: localStorage.getItem("roles"),
      isTrue: false,
      travel: {
        user_id: localStorage.getItem("userId"),
        title: "",
        queryCity: "",
        description: "",
        startDate: "",
        endDate: "",
        created_for: "",
        longitude: "",
        latitude: "",
      },
      clientsList: [],
      searchQuery: "",
      selectedItem: null,
      isVisible: false,

      cities: [],
    };
  },
  mounted() {
    // this.$refs.address.focus();
  },

  created() {
    this.addClient();
    this.travel.user_id = localStorage.getItem("userId");
    console.log("liste", this.clientsList);
  },

  computed: {
    ...mapStores(useTravelStore, useNotifStore),
    dateFormat() {
      this.travel.startDate.split("T");
    },
    filteredClient() {
      console.log("query", this.searchQuery);
      const query = this.searchQuery.toLowerCase();
      if (this.searchQuery === "") {
        return this.clientsList;
      }
      return this.clientsList.filter((client) => {
        return Object.values(client).some((word) =>
          String(word).toLowerCase().includes(query)
        );
      });
    },
  },
  methods: {
    onInput(event) {
      this.travel.queryCity = event.input;
      this.searchCity();
    },
    onBlur(event) {
      this.travel.queryCity = event.input;
      this.searchCity();
    },
    selectCity(item) {
      this.travel.queryCity = item.name;
      this.travel.longitude = item.longitude;
      this.travel.latitude = item.latitude;
    },
    searchCity() {
      let citiesResult = [];
      console.log(this.travel.queryCity);
      flightsService
        .getCity(this.travel.queryCity)
        .then((response) => {
          for (let i = 0; i < 10; i++) {
            if (response.data[i] == null) {
              break;
            }
            citiesResult.push({
              name: response.data[i].city_name,
              longitude: response.data[i].longitude,
              latitude: response.data[i].latitude,
            });
          }
          this.cities = citiesResult;

          console.log("cities", this.cities);
        })
        .catch((error) => console.log(error));
    },
    selectItem(client) {
      this.selectedItem = client;
      console.log("Selected client", this.selectedItem);
    },
    async addTravel() {
      if (this.userRole.includes("ROLE_PRO")) {
        this.travel.created_for = this.selectedItem.id;
        console.log("Selected client", this.selectedItem);
      } else {
        this.travel.created_for = this.travel.user_id;
        console.log("user", this.travel.user_id);
      }
      console.log(this.travel);
      this.travelStore.saveTravel(this.travel);

      // this.notifStore.successDisplay = true;
      this.travel = {
        user_id: localStorage.getItem("user_id"),
        title: "",
        location: "",
        description: "",
        startDate: "",
        endDate: "",
        created_for: "",
      };
      this.$router.push("/home/travels/list");
      // this.travelStore.addTravel(this.travel).catch((err) => console.log(err));
    },
    addClient() {
      // retrouver le nom du client pour l'ajouter a la liste si c'est un pro de connecté
      if (this.userRole.includes("ROLE_PRO")) {
        clientStore
          .getAllClients()
          .then((this.clientsList = clientStore.clients));
        this.isTrue = true;
      }
    },
    search(term) {
      this.resetClientsList();
      console("list", clientsList);
      console("term", term);
      this.clientsList = this.clientsList.filter((client) => {
        return client.pseudo.toLowerCase().includes(term.toLowerCase());
      });
    },
    resetClientsList() {
      this.clientsList = clientStore.clients;
    },
  },
};
</script>

<style scoped lang="scss">
.dropdown-wrapper {
  max-width: 350px;
  position: relative;
  margin: 0 auto;

  .selected-item {
    height: 40px;
    border: 2px solid lightgray;
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    .drop-down-icon {
      transform: rotate(0deg);
      transition: all 0.4s ease;
      &.dropdown {
        transform: rotate(180deg);
      }
    }
  }
  .dropdown-popover {
    position: absolute;
    border: 2px solid lightgray;
    top: 46px;
    left: 0;
    right: 0;
    background-color: #fff;
    max-width: 100%;
    padding: 10px;
    visibility: hidden;
    transition: all 0.5s linear;
    max-height: 0px;
    overflow: hidden;

    &.visible {
      max-height: 450px;
      visibility: visible;
    }

    input {
      width: 90%;
      height: 60%;
      border: 2px solid lightgray;
      font-size: 16px;
      padding-left: 8px;
    }

    .options {
      width: 100%;
      ul {
        list-style: none;
        text-align: left;
        padding-left: 8px;
        max-height: 200px;
        overflow-y: scroll;
        overflow-x: hidden;
      }
      li {
        width: 100%;
        border-bottom: 1px solid lightgray;
        padding: 10px;
        background-color: #f1f1f1;
        cursor: pointer;
        font-size: 16px;
        &:hover {
          background-color: #70878a;
          color: #fff;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
