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
        <div class="h-10 rounded-lg"></div>

        <section class="">
          <!-- Show flights  -->
          <TableSteps :showSteps="showSteps" />
        </section>

        <div class="grid grid-cols-6 gap-4">
          <div class="col-start-2 col-span-4">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0"></div>
            </div>
            <div>
              <div class="pt-10 mt-5 md:col-span-2 md:mt-0">
                <div class="h-10 rounded-lg"></div>

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
                          <PlusIcon
                            class="-ml-1 mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
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
                          Masquer
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
                          v-model="form.depIata"
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
                          v-model="form.arrIata"
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
                          v-model="form.date"
                        />
                      </div>

                      <div class="col-span-6 sm:col-span-3">
                        <div class="bg-white px-4 py-3 text-right sm:px-6">
                          <button
                            class="ml-1 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            @click="searchFlight()"
                          >
                            Rechercher un vol
                          </button>
                        </div>
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
                          <option
                            v-if="itemsList"
                            v-for="(flight, index) in itemsList"
                            :key="`flight-${index}`"
                            @click="selectFlight(flight)"
                          >
                            N° vol : {{ flight.flightIataNumber }} - Départ :
                            {{ flight.depIata }} - heure :
                            {{ flight.depDateAndHour }} - Arrivée :
                            {{ flight.arrIata }} - Heure :
                            {{ flight.arrDateAndHour }} - Compagnie :
                            {{ flight.airline }}
                          </option>
                          <option v-else>Aucun vol recherché</option>
                        </select>
                      </div>
                    </div>
                    <div class="mt-5 pb-5 grid grid-cols-6 gap-6">
                      <div class="mt-5 col-span-6">
                        <label
                          for="street-address"
                          class="block text-sm font-medium text-gray-700"
                          >Les Informations d'une étape</label
                        >
                      </div>

                      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          for="region"
                          class="block text-sm font-medium text-gray-700"
                          >Ville</label
                        >
                        <vue3-simple-typeahead
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
                        <p v-if="v$.queryCity.$error">
                          {{ v$.queryCity.$errorsGlobal[0].$message }}
                        </p>
                        <!-- <span
                          v-for="error in v$.queryCity.errors"
                          :key="error.$uid"
                          >{{ error.$message }}</span
                        > -->
                      </div>

                      <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          for="postal-code"
                          class="block text-sm font-medium text-gray-700"
                          >Pays</label
                        >
                        <!-- <vue3-simple-typeahead
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          id="typeahead_id"
                          placeholder="Start writing..."
                          :items="countries"
                          @selectItem="selectCountry"
                          @onInput="onInputCountry"
                          @onBlur="onBlurCountry"
                          :itemProjection="
                            (item) => {
                              return item.name;
                            }
                          "
                        >
                        </vue3-simple-typeahead> -->
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autocomplete="address-level1"
                          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          v-model="form.queryCountry"
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
                          v-model="form.start"
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
                          v-model="form.end"
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
                      @click="addStep()"
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
            <div class="h-10 rounded-lg"></div>

            <div class="border-t border-gray-200" />
            <div class="bg-gray px-4 py-3 text-right sm:px-6">
              <div class="h-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { stepsService } from "../../../_services/steps.service";
import { flightsService } from "../../../_services/APIflights.service";
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/vue/20/solid";
import { ref, computed, reactive } from "vue";
import { useAuthStore } from "../../../stores/authStore";
import { useStepStore } from "../../../stores/stepStore";
import TableSteps from "../../../components/travels/TableSteps.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "AddSteps",
  components: {
    PlusIcon,
    MinusIcon,
    TrashIcon,
    TableSteps,
  },

  setup() {
    const router = useRouter();
    const route = useRoute();

    const authStore = useAuthStore();
    const stepStore = useStepStore();
    const showSteps = ref({});
    const listSteps = reactive([]);
    const choosenFlight = ref({});
    const stepsHeader = reactive(["Ville", "Pays", "Début", "Fin"]);
    const itemsList = reactive([]);
    const flighTitles = reactive([
      "IATA",
      "Heure",
      "Terminal",
      "IATA",
      "Heure",
      "Terminal",
      "Numéro de vol",
    ]);

    const form = reactive({
      travel_id: route.params.id,
      queryCity: "",
      queryCountry: "",
      start: "",
      end: "",
      depIata: "",
      arrIata: "",
      date: "",
      depHour: "",
      arrHour: "",
      depTerminal: "",
      arrTerminal: "",
      flightNumber: "",
      airline: "",
    });
    const cities = ref([]);
    const countries = ref([]);

    const rules = computed(() => {
      return {
        queryCity: { required },
        queryCountry: { required },
        start: { required },
        end: { required },
      };
    });
    const v$ = useVuelidate(rules, form);

    let errorsGlobal = ref([]);
    const getSteps = async () => {
      if (showSteps.value.length == 0) {
        await stepStore.getSteps(route.params.id);
        showSteps.value = stepStore.steps;
        console.log(showSteps.value);
      } else {
        showSteps.value;
      }
    };

    const addStep = async () => {
      let errors = [];
      v$.value.$validate();

      if (!v$.value.$error) {
        await stepsService
          .createStep(form)

          .catch((error) => console.log("erreur", error));
        getSteps();
      } else {
        alert("fail form");
      }
      errorsGlobal.value.push(v$.value.$errors);
      console.log("form", form);
      console.log("form", choosenFlight);
      console.log("errors", errorsGlobal.value);
      console.log("errors", errors, v$);

      console.log("travel id", authStore.travels);
    };

    const searchFlight = async () => {
      console.log("infos flight", form.depIata, form.arrIata, form.date);
      await flightsService
        .getAllFlights(form.depIata, form.arrIata, form.date)
        .then((response) => {
          for (let i = 0; i < response.data.data.length; i++) {
            itemsList.push({
              id: Math.random().toString(16).slice(2),
              depTerminal: response.data.data[i].departure.terminal,
              depIata: response.data.data[i].departure.iataCode,
              arrTerminal: response.data.data[i].arrival.terminal,
              arrIata: response.data.data[i].arrival.iataCode,
              depHour: response.data.data[i].departure.scheduledTime,

              arrHour: response.data.data[i].arrival.scheduledTime,
              airline: response.data.data[i].airline.name,
              airlineIata: response.data.data[i].airline.iataCode,

              flightNumber: response.data.data[i].flight.number,
              flightIataNumber: response.data.data[i].flight.iataNumber,
            });
            console.log("response", response);
            console.log("flight", itemsList);
          }
          console.log("response", itemsList);
        })
        .catch((error) => console.log(error));
    };

    const selectFlight = (item) => {
      console.log(item);
      choosenFlight.value = item;
      form.depIata = choosenFlight.value.depIata;
      form.arrIata = choosenFlight.value.arrIata;
      form.depHour = choosenFlight.value.depHour;
      form.arrHour = choosenFlight.value.arrHour;
      form.depTerminal = choosenFlight.value.depTerminal;
      form.arrTerminal = choosenFlight.value.arrTerminal;
      form.flightNumber = choosenFlight.value.flightNumber;
      form.airline = choosenFlight.value.airline;

      console.log("choosen flight", choosenFlight.value);
      console.log("choosen flight form", form);
    };
    //chercher un ville dans API VILLE
    const onInput = (event) => {
      form.queryCity = event.input;
      searchCity();
    };

    const onBlur = (event) => {
      form.queryCity = event.input;
      searchCity();
    };
    const selectCity = (item) => {
      console.log("item", item);
      form.queryCity = item.name;
    };
    const searchCity = () => {
      let citiesResult = [];
      console.log(form.queryCity);
      flightsService
        .getCity(form.queryCity)
        .then((response) => {
          for (let i = 0; i < 10; i++) {
            if (response.data[i] == null) {
              break;
            }
            citiesResult.push({
              name: response.data[i].city_name,
            });
          }
          cities.value = citiesResult;

          console.log("cities", cities);
        })
        .catch((error) => console.log(error));
    };

    //chercher un pays DANS API
    const onInputCountry = (event) => {
      form.queryCountry = event.input;
      searchCountry();
    };

    const removeStep = (index) => {
      if (form.length > 1) {
        form.splice(index, 1);
      }
    };

    const saveAllSteps = () => {
      console.log("send step", form);
      stepsService.createStep();
    };

    return {
      onBlur,
      selectCity,
      searchCity,
      onInput,

      form,
      addStep,
      removeStep,
      listSteps,
      stepsHeader,
      flighTitles,
      saveAllSteps,
      searchFlight,
      itemsList,
      choosenFlight,
      selectFlight,
      stepStore,
      getSteps,
      showSteps,
      cities,
      countries,
      errorsGlobal,
      v$,
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

    // selectFlight(item) {
    //   console.log("item", item);
    //   this.choosenFlight = item;
    // },
  },
};
</script>
