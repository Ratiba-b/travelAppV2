<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">Etapes</h1>
        <p class="mt-2 text-sm text-gray-700">un petit recap de tes étapes</p>
      </div>
    </div>

    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full">
              <thead class="bg-gray">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  ></th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <template v-for="(step, index) in showSteps" :key="step.id">
                  <tr class="border-t border-gray-200">
                    Etape
                    {{
                      index + 1
                    }}
                    <th
                      colspan="5"
                      scope="colgroup"
                      class="bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 sm:px-6"
                    >
                      <span class="mr-2"> Départ : {{ step.depIata }}</span> --
                      <span class="mr-2 ml-2">Date : {{ step.date }}</span> --
                      <span class="mr-2 ml-2">Heure : {{ step.depHour }}</span>
                      --
                      <span class="mr-2 ml-2">Arrivée : {{ step.arrIata }}</span
                      >--
                      <span class="mr-2 ml-2">Heure : {{ step.arrHour }}</span
                      >--
                      <span class="mr-2 ml-2"
                        >N° Vol : {{ step.flightNumber }}</span
                      >
                    </th>
                  </tr>
                  <tr class="pl-5">
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                    ></td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <span class="mr-2 ml-2">Ville : {{ step.city }}</span>
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <span class="mr-2 ml-2">Pays : {{ step.country }}</span>
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <span class="mr-2 ml-2">Début : {{ step.start }}</span>
                    </td>
                    <td
                      class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                    >
                      <span class="mr-2 ml-2">Fin : {{ step.end }}</span>
                    </td>
                    <td
                      class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                    >
                      <button @click="deleteStep(index)">
                        <TrashIcon class="h-5 w-5 text-pink-400" />
                      </button>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStepStore } from "../../stores/stepStore";
import { TrashIcon } from "@heroicons/vue/20/solid";
import { stepsService } from "../../_services/steps.service";
import { useRoute } from "vue-router";

import { ref } from "vue";

const locations = [
  {
    name: "Edinburgh",
    people: [
      {
        name: "Lindsay Walton",
        title: "Front-end Developer",
        email: "lindsay.walton@example.com",
        role: "Member",
      },
      {
        name: "Courtney Henry",
        title: "Designer",
        email: "courtney.henry@example.com",
        role: "Admin",
      },
    ],
  },

  // More people...
];
export default {
  name: "TableSteps",
  components: {
    TrashIcon,
  },

  setup() {
    const showSteps = ref({});

    const stepStore = useStepStore();
    const route = useRoute();
    const getSteps = async () => {
      await stepStore.getSteps(route.params.id);
      showSteps.value = stepStore.steps;
      console.log(showSteps.value);
    };
    getSteps();
    const deleteStep = async (id) => {
      await stepsService
        .removeStep(id)
        .then(() => {
          getSteps();
        })
        .catch((error) => console.log(error));
    };

    return {
      getSteps,
      stepStore,
      showSteps,
      deleteStep,
    };
  },
};
</script>
