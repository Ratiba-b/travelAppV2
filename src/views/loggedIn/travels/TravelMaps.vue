<template>
  <div class="bg-white">
    <div class="h-10 rounded-lg"></div>
    <main class="relative -mt-32">
      <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
        <div class="overflow-hidden rounded-lg bg-white shadow">
          {{ showSteps }}
          <div class="h-10 rounded-lg"></div>
          <div>
            <h3
              class="flex justify-center rounded text-3xl font-bold text-pink-600"
            >
              Ton voyage à {{ travel.location }}
            </h3>
            <p class="mt-2 flex justify-center rounded text-teal-800">
              Du {{ travel.startDate }} au {{ travel.endDate }}
            </p>
          </div>
          <div class="h-10 rounded-lg"></div>
          <div>
            <h2 class="ml-10 text-2xl rounded text-pink-600">
              Description de ton trip: {{ travel.description }}
            </h2>
          </div>
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
          >
            <div class="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
              <DisplayMaps :lng="lng" :lat="lat" />
            </div>
            <div>
              <div class="flow-root">
                <ul
                  v-for="(event, eventIdx) in showSteps"
                  :key="event.id"
                  role="list"
                  class="-mb-8"
                >
                  <li>
                    <div class="relative pb-8">
                      <span
                        v-if="eventIdx !== showSteps.length - 1"
                        class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                      <div class="relative flex space-x-3">
                        <div>
                          <span
                            :class="[
                              event.iconBackground,
                              'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                            ]"
                          >
                            <MapIcon
                              class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white text-pink-500"
                            />
                            <!-- <component
                              :is="event.icon"
                              class="h-5 w-5 text-white"
                              aria-hidden="true"
                            /> -->
                          </span>
                        </div>
                        <div
                          class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5"
                        >
                          <div>
                            <span class="text-sm text-gray-500">
                              <MapPinIcon class="h-4 w-4 text-gray-500" />
                              Lieu de l'etape
                            </span>

                            <p class="font-medium text-gray-900">
                              {{ event.city }} -
                              {{ event.country }}
                            </p>
                          </div>
                          <div>
                            <p class="text-sm text-gray-500">
                              <PaperAirplaneIcon
                                class="h-4 w-4 text-pink-400"
                              />
                              Vol
                            </p>
                            <p class="font-medium text-gray-900">
                              {{ event.depIata }} - {{ event.depHour }}
                            </p>
                            <p class="font-medium text-gray-900">
                              {{ event.arrIata }} - {{ event.arrHour }}
                            </p>
                          </div>
                          <div
                            class="whitespace-nowrap text-right text-sm text-gray-500"
                          >
                            <p class="text-sm text-gray-500">
                              <CalendarDaysIcon class="h-4 w-4 text-gray-600" />
                              Date
                            </p>

                            <p class="font-medium text-gray-900">
                              {{ event.start }} au {{ event.end }}
                            </p>

                            <p class="font-medium text-gray-900"></p>
                          </div>
                        </div>

                        <router-link :to="event.href">voir</router-link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {{ showSteps.step_id }}
        <div class="bg-white">
          <div class="w-96">
            <div class="">
              <div class="">
                <div class="mx-auto max-w-7xl sm:px-6 lg:px-8"></div>
              </div>
              <div class="row-span-2 col-span-2">
                <!-- <div class="row-span-2 col-span-2">
             <Steps />
            </div> -->
              </div>
            </div>
          </div>
        </div>
        <Todo />
      </div>
    </main>
  </div>
</template>

<script>
// import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import Todo from "../../../components/Todo.vue";

import Steps from "./Steps.vue";
import DisplayMaps from "../../../components/travels/DisplayMaps.vue";
import {
  CheckIcon,
  HandThumbUpIcon,
  UserIcon,
  CalendarDaysIcon,
  MapIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/20/solid";
import { travelService } from "../../../_services/travels.service";
import { useStepStore } from "../../../stores/stepStore";
import { useTravelStore } from "../../../stores/travelStore";

import { useRoute } from "vue-router";

import { ref, computed } from "vue";

export default {
  name: "Map",
  components: {
    Steps,
    CheckIcon,
    HandThumbUpIcon,
    UserIcon,
    CalendarDaysIcon,
    MapIcon,
    MapPinIcon,
    PaperAirplaneIcon,
    DisplayMaps,
    Todo,
  },
  data() {
    return {};
  },

  setup() {
    const lng = ref(0);
    const lat = ref(0);
    const stepStore = useStepStore();
    const travelStore = useTravelStore();

    const route = useRoute();
    const showSteps = ref([]);
    const start = ref("");
    const end = ref("");
    const timeline = [];

    const travels = ref([]);
    const travel = ref([]);
    const linkStep = "";
    travels.value = travelStore.travels;

    // recuperer le voyage choisi pour affciher les données
    const getTravelById = async () => {
      console.log("getTravelById", route.params.id);
      await travelStore
        .findTravelById(route.params.id)

        .then((res) => {
          console.log(res);
          travel.value = res.data.data;
        });
    };

    const getSteps = async () => {
      if (showSteps.value.length == 0) {
        await stepStore.getSteps(route.params.id);

        for (let i = 0; i < stepStore.steps.length; i++) {
          console.log("stsep", stepStore.steps[i].id);
          let start = stepStore.steps[i].start.split("T").slice(0, 1).join("");
          let end = stepStore.steps[i].end.split("T").slice(0, 1).join("");
          showSteps.value.push({
            step_id: stepStore.steps[i].id,
            href: `/home/calendar/${stepStore.steps[i].id}`,
            city: stepStore.steps[i].city,
            country: stepStore.steps[i].country,
            depIata: stepStore.steps[i].depIata,
            arrIata: stepStore.steps[i].arrIata,
            depHour: stepStore.steps[i].depHour,
            arrHour: stepStore.steps[i].arrHour,
            start: start,
            end: end,
          });
        }
      }
    };
    getTravelById();
    getSteps();

    return {
      timeline,
      showSteps,
      travel,
      lat,
      lng,
      // changeDate,
      // displayDate,
    };
  },
  computed: {
    changeDate(date) {
      console.log(date);
      // return date.split("T").slice(0, 1).join("");
      //   let end = showSteps.value[i].end.split("T").slice(0, 1).join("");
    },
  },
  methods: {
    centerUpdated() {},
  },
};
</script>
