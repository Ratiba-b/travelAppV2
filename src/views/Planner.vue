<template>
  <div class="bg-white">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
    >
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {{ travel.location }}
        </h2>
        <p class="mt-4 text-gray-500">
          {{ travel.start }} au {{ travel.end }}
          <!-- The walnut wood card tray is precision milled to perfectly fit a stack
          of Focus cards. The powder coated steel divider separates active cards
          from new ones, or can be used to archive important task lists. -->
        </p>

        <form
          class="space-y-8 divide-y divide-gray-200"
          @submit.prevent="addEvent"
        >
          <div class="space-y-8 divide-y divide-gray-200">
            <div></div>

            <div class="pt-8">
              <div>
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Plannifies ton voyage
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                  Tous tes évenements dispo en quelques cliques
                </p>
              </div>
              <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >Début</label
                  >
                  <div class="mt-1">
                    <input
                      type="date"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="event.start"
                    />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Fin</label
                  >
                  <div class="mt-1">
                    <input
                      type="date"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="event.end"
                    />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Description</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="event.description"
                    />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Emplacement</label
                  >
                  <div class="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="event.location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-5">
            <div class="flex justify-end">
              <button
                type="button"
                class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Annuler
              </button>
              <button
                type="submit"
                class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sauvegarder
              </button>
            </div>
          </div>
        </form>
      </div>
      <!-- AFFICHAGE DES EVENTS  -->
      <div class="ml-5 px-4 sm:px-6 lg:px-8">
        <div class="mt-8 flex flex-col">
          <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
            >
              <table class="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                    >
                      Début
                    </th>
                    <th
                      scope="col"
                      class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Fin
                    </th>
                    <th
                      scope="col"
                      class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Emplacement
                    </th>
                    <th
                      scope="col"
                      class="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                    >
                      <span class="sr-only"></span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr v-for="person in people" :key="person.email">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0"
                    >
                      {{ person.start }}
                    </td>
                    <td
                      class="whitespace-nowrap py-4 px-3 text-sm text-gray-500"
                    >
                      {{ person.end }}
                    </td>
                    <td
                      class="whitespace-nowrap py-4 px-3 text-sm text-gray-500"
                    >
                      {{ person.description }}
                    </td>
                    <td
                      class="whitespace-nowrap py-4 px-3 text-sm text-gray-500"
                    >
                      {{ person.location }}
                    </td>
                    <td
                      class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0"
                    >
                      <a href="#" class="text-indigo-600 hover:text-indigo-900"
                        >Supprimer<span class="sr-only"></span>
                        <span>{{ person.name }}</span></a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/authStore";
import Axios from "axios";
const storeAuth = useAuthStore();
export default {
  name: "Planner",

  data() {
    const people = [
      {
        start: "20/10/2022",
        end: "25/10/2022",
        description: "arrivée a l'aeroport",
        location: "Londres",
      },
      // More people...
    ];
    return {
      people,
      event: {
        travel_id: "",
        start: "",
        end: "",
        description: "",
        location: "",
      },
      travel: {
        travel_id: "",
        location: "",
        start: "",
        end: "",
      },

      token: "",
    };
  },
  async created() {
    this.token = storeAuth.token;
    this.event.travel_id = this.$route.params.id;
    console.log("id", this.travel_id);
    const response = await Axios.get(
      `http://localhost:8080/travels/${this.event.travel_id}`,
      { headers: { "x-access-token": this.token } }
    ).then(console.log("ok"));
    console.log("response", response);
    this.travel = {
      travel_id: response.data.data.id,
      location: response.data.data.location,
      start: response.data.data.startDate,
      end: response.data.data.endDate,
    };
  },
  methods: {
    async addEvent() {
      console.log("addEvent", this.event);
      await Axios.put("http://localhost:8080/plannings", this.event, {
        headers: { "x-access-token": this.token },
      })
        .then(console.log("ok"))
        .catch((error) => console.log(error));

      this.event = {
        travel_id: this.$route.params.id,
        start: "",
        end: "",
        description: "",
        location: "",
      };
    },
  },
};
</script>
