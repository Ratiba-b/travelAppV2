<template>
  <div class="bg-white">
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8"
    >
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-xl font-semibold text-gray-900">Users</h1>
            <p class="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name,
              title, email and role.
            </p>
          </div>
          <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              @click="addRow"
            >
              Ajouter une étape
            </button>
          </div>
        </div>
        <div class="mt-8 flex flex-col">
          <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div
              class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
            >
              <div
                class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
              >
                <table class="min-w-full">
                  <thead class="bg-white">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Destination
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Début
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Fin
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Détails
                      </th>
                      <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white">
                    <tr>
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                      >
                        <input
                          type="text"
                          class="border rounded bg-gray"
                          v-model="rows.destination"
                        />
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        <input
                          type="text"
                          class="border rounded bg-gray"
                          v-model="rows.start"
                        />
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        <input
                          type="text"
                          class="border rounded bg-gray"
                          v-model="rows.end"
                        />
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        <input
                          type="text"
                          class="border rounded bg-gray"
                          v-model="rows.details"
                        />
                      </td>
                      <td
                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                      >
                        <button @click="removeRow(index)">Supprimer</button>
                      </td>
                    </tr>
                    <tr v-for="row in rows" :key="row.index">
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                      >
                        <input
                          type="text"
                          class="border rounded bg-gray"
                          v-model="row.destination"
                        />
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        <input
                          type="text"
                          class="border rounded bg-gray"
                          v-model="row.start"
                        />
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        <input
                          type="text"
                          class="border rounded bg-gray"
                          v-model="row.end"
                        />
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        <input
                          type="text"
                          class="border rounded bg-gray"
                          v-model="row.details"
                        />
                      </td>
                      <td
                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                      >
                        <button @click="removeRow(index)">Supprimer</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="flex justify-end">
              <button type="submit" @click="sendSteps">Enregistrer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "../../../stores/authStore";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "Steps",

  data() {
    return {
      steps: [],
    };
  },

  setup() {
    const router = useRouter();
    const route = useRoute();
    const steps = ref([]);
    const auth = useAuthStore();
    const travel_id = route.params.id;
    const rows = ref([]);
    const addRow = () => {
      if (
        rows.value.travel_id === "" ||
        rows.value.destination === "" ||
        rows.value.start === "" ||
        rows.value.end === "" ||
        rows.value.details === ""
      ) {
        console.log("no ");
        alert("No rows");
      } else {
        console.log("yes ");

        rows.value.push([
          {
            travel_id: travel_id,
            destination: "",
            start: "",
            end: "",
            details: "",
          },
        ]);
        console.log("rows", rows.value);
      }
      steps.push(rows.value);
      console.log("steps", steps);
    };

    const removeRow = (index) => {
      rows.value.splice(index, 1);
    };
    return {
      rows,
      addRow,
      removeRow,
    };
  },

  methods: {
    sendSteps() {
      console.log("rows send", this.rows);
    },
  },
};
</script>
