<template>
  <app-header />
  <div class="">
    <dashboard />
    <main class="ml-5 flex justify-center w-full">
      <div class="py-6">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1
            class="text-2xl font-semibold text-gray-900 flex justify-center mb-10"
          >
            Voyages
          </h1>
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <!-- Replace with your content -->
          <div class="py-4">
            <div class="px-4 sm:px-6 lg:px-8">
              <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                  <h1 class="text-xl font-semibold text-gray-900">
                    Tes prochaines aventures:
                  </h1>
                  <p class="mt-2 text-sm text-gray-700">
                    A list of all the users in your account including their
                    name, title, email and role.
                  </p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                  <router-link
                    to="/add/travel"
                    class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  >
                    Ajouter un nouveau voyage
                  </router-link>
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
                      <table class="min-w-full divide-y divide-gray-300">
                        <thead class="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                            >
                              Titre
                            </th>
                            <th
                              scope="col"
                              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Localisation
                            </th>

                            <th
                              scope="col"
                              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Dates
                            </th>
                            <th
                              scope="col"
                              class="relative py-3.5 pl-3 pr-4 sm:pr-6"
                            >
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                          <tr v-for="person in people" :key="person.id">
                            <td
                              class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                              {{ person.title }}
                            </td>
                            <td
                              class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                            >
                              {{ person.localisation }}
                            </td>
                            <td
                              class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                            >
                              {{ person.dates }}
                            </td>

                            <td
                              class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                            >
                              <router-link
                                to="/calendar"
                                class="text-indigo-600 hover:text-indigo-900"
                              >
                                voir
                              </router-link>
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
          <!-- /End replace -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import Dashboard from "../components/Dashboard.vue";
import AppHeader from "../components/Header.vue";
import Dashboard from "../components/Dashboard.vue";
export default {
  name: "TravelList",

  components: {
    // Dashboard,
    AppHeader,
    Dashboard,
  },

  data() {
    const people = [
      {
        id: Date.now(),
        title: "Weekend entre cops",
        localisation: "Londres",
        dates: "23/10/2022 au 30/10/2022",
      },
      // More people...
    ];

    return {
      people,
    };
  },
};
</script>

<style></style>
