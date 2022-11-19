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
  <div class="mt-20 w-full">
    <div class="grid grid-cols-6 gap-4">
      <!-- Show flights  -->
      <div class="bg-white col-start-2 col-span-4">
        <div class="flex flex-row">
          <ul v-for="title in flighTitles" :key="index">
            <li class="ml-8">{{ title }}</li>
            <li
              v-for="(step, index) in listSteps"
              :key="index"
              class="flex justify-around whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0"
            >
              <div class="flex flex-row">
                <div class="py-3.5 px-3 text-left text-sm text-gray-900">
                  <p class="mt-2">{{ step.depIATA }}</p>
                </div>
                <div class="py-3.5 px-3 text-left text-sm text-gray-900">
                  <p class="mt-2"></p>
                </div>
                <div class="py-3.5 px-3 text-left text-sm text-gray-900">
                  <p class="mt-2"></p>
                </div>
              </div>
              <div class="flex flex-row">
                <div class="py-3.5 px-3 text-left text-sm text-gray-900">
                  <p class="mt-2">{{ step.arrIATA }}</p>
                </div>
                <div class="py-3.5 px-3 text-left text-sm text-gray-900">
                  <p class="mt-2"></p>
                </div>
                <div class="py-3.5 px-3 text-left text-sm text-gray-900">
                  <p class="mt-2"></p>
                </div>
              </div>

              <div>
                <div class="py-3.5 px-3 text-left text-sm text-gray-900">
                  <p class="mt-2"></p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- show list steps and show choosen result  -->
        <div class="flex justify-around">
          <ul v-for="title in stepsHeader" :key="index">
            <li>{{ title }}</li>
            <li
              v-for="(step, index) in listSteps"
              :key="index"
              class="flex justify-around whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0"
            >
              <div class="text-left text-sm text-gray-900">
                <p class="mt-2">{{ step.city }}</p>
              </div>
              <div class="text-left text-sm text-gray-900">
                <p class="mt-2">{{ step.city }}</p>
              </div>
              <div class="text-left text-sm text-gray-900">
                <p class="mt-2">{{ step.city }}</p>
              </div>
              <div class="text-left text-sm text-gray-900">
                <p class="mt-2">{{ step.city }}</p>
              </div>
            </li>
          </ul>
          <ul
            class="divide-y divide-gray-200 text-left text-sm font-semibold text-gray-900"
          >
            <li
              class="flex justify-end whitespace-nowrap text-sm font-medium text-gray-900"
            >
              <div class="py-3.5 px-3 text-red-500">
                <button>
                  <TrashIcon class="h-5 w-5" />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-6 gap-4">
      <div class="col-start-2 col-span-4">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Les étapes
            </h3>
            <p class="mt-1 text-sm text-gray-600">
              ajoute toutes les étapes de ton voyage
            </p>
          </div>
        </div>
        <div v-for="(item, index) in form" :key="index">
          <div class="pt-10 mt-5 md:col-span-2 md:mt-0">
            <h3>Etape {{ index + 1 }}</h3>
            {{ item }}

            <div class="overflow-hidden shadow sm:rounded-md">
              <div class="bg-white px-4 py-5 sm:p-6">
                <button>Ajouter un vol</button>
                <div v-if="!isOpen" class="text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      vector-effect="non-scaling-stroke"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2-4l-2 -4h3l2 2h4l-2 -7h3z"
                    />
                  </svg>

                  <div class="mt-1 mb-10">
                    <button
                      type="button"
                      class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      @click="openFlightInputs"
                    >
                      <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                      Nouveau vol
                    </button>
                  </div>
                </div>
                <div v-if="isOpen" class="text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      vector-effect="non-scaling-stroke"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2-4l-2 -4h3l2 2h4l-2 -7h3z"
                    />
                  </svg>

                  <div class="mt-1 mb-10">
                    <button
                      type="button"
                      class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      @click="openFlightInputs"
                    >
                      <MinusIcon
                        class="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Retirer le vol
                    </button>
                  </div>
                </div>
                <div v-if="isOpen === true" class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm font-medium text-gray-700"
                      >Départ</label
                    >
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="item.depIATA"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="last-name"
                      class="block text-sm font-medium text-gray-700"
                      >Arrivée</label
                    >
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="item.arrIATA"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="email-address"
                      class="block text-sm font-medium text-gray-700"
                      >Date</label
                    >
                    <input
                      type="date"
                      name="email-address"
                      id="email-address"
                      autocomplete="email"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="item.date"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="results"
                      class="block text-sm font-medium text-gray-700"
                      >Résultats</label
                    >
                    <select
                      id="results"
                      name="results"
                      autocomplete="results-name"
                      class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
                <div class="mt-5 pb-5 grid grid-cols-6 gap-6">
                  <div class="mt-5 col-span-6">
                    <label
                      for="street-address"
                      class="block text-sm font-medium text-gray-700"
                      >Les Initemations d'une étape</label
                    >
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="region"
                      class="block text-sm font-medium text-gray-700"
                      >Ville</label
                    >
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autocomplete="address-level1"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="item.city"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="postal-code"
                      class="block text-sm font-medium text-gray-700"
                      >Pays</label
                    >
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autocomplete="postal-code"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="item.country"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="region"
                      class="block text-sm font-medium text-gray-700"
                      >Début</label
                    >
                    <input
                      type="date"
                      name="region"
                      id="region"
                      autocomplete="address-level1"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="item.start"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      for="postal-code"
                      class="block text-sm font-medium text-gray-700"
                      >Fin</label
                    >
                    <input
                      type="date"
                      name="postal-code"
                      id="postal-code"
                      autocomplete="postal-code"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="item.end"
                    />
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  class="mr-1 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  @click="removeStep(index)"
                >
                  Annuler
                </button>
                <button
                  class="ml-1 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  @click="addStep(item)"
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
      <div class="py-5">
        <div class="border-t border-gray-200" />
        <div class="bg-gray px-4 py-3 text-right sm:px-6">
          <button
            class="mr-1 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            @click="saveAllSteps"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/vue/20/solid";
import { reactive } from "vue";

export default {
  name: "AddSteps",
  components: {
    PlusIcon,
    MinusIcon,
    TrashIcon,
  },

  setup() {
    const listSteps = reactive([]);
    const stepsHeader = reactive(["Ville", "Pays", "Début", "Fin"]);

    const flighTitles = reactive([
      "IATA",
      "Heure",
      "Terminal",
      "IATA",
      "Heure",
      "Terminal",
      "Numéro de vol",
    ]);
    const form = reactive([
      {
        city: "",
        country: "",
        start: "",
        end: "",
        depIATA: "",
        arrIATA: "",
        date: "",
      },
    ]);
    const addStep = (item) => {
      console.log("index", item);
      form.push({
        city: "",
        country: "",
        start: "",
        end: "",
        depIATA: "",
        arrIATA: "",
        date: "",
      });
      listSteps.push(item);
    };

    const removeStep = (index) => {
      if (form.length > 1) {
        form.splice(index, 1);
      }
    };
    return {
      form,
      addStep,
      removeStep,
      listSteps,
      stepsHeader,
      flighTitles,
    };
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {},
  methods: {
    openFlightInputs() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
