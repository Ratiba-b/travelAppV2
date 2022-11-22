<template>
  <div class="h-10 rounded-lg"></div>
  <main class="relative -mt-32">
    <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="">
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
                          Tu peux avoir accès à chaque details de ton voyage et
                          tu peux aussi y ajouter des étapes
                        </p>
                      </div>
                      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <router-link
                          to="/home/add/travel"
                          class="inline-flex items-center justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 sm:w-auto"
                        >
                          Ajouter un nouveau voyage
                        </router-link>
                      </div>
                    </div>
                    <div class="mt-8 flex flex-col">
                      <div
                        class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"
                      >
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
                                    v-if="isTrue == true"
                                    scope="col"
                                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                  >
                                    Client
                                  </th>
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
                                    Destination
                                  </th>
                                  <th
                                    scope="col"
                                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  >
                                    Description
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
                                <tr
                                  v-for="travel in travelsList"
                                  :key="travel.id"
                                >
                                  <td
                                    v-if="isTrue == true"
                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                                  >
                                    {{ travel.client }}
                                  </td>
                                  <td
                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                                  >
                                    {{ travel.title }}
                                  </td>
                                  <td
                                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                                  >
                                    {{ travel.location }}
                                  </td>
                                  <td
                                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                                  >
                                    {{ travel.description }}
                                  </td>
                                  <td
                                    class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                                  >
                                    {{ travel.start }} au {{ travel.end }}
                                  </td>

                                  <div>
                                    <td
                                      class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                                    >
                                      <router-link
                                        :to="travel.href"
                                        class="text-pink-600 hover:text-pink-900"
                                      >
                                        voir
                                      </router-link>
                                    </td>
                                  </div>
                                  <div>
                                    <td
                                      class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                                    >
                                      <router-link
                                        :to="travel.hrefStep"
                                        class="text-pink-600 hover:text-pink-900"
                                      >
                                        Ajouter une étape
                                      </router-link>
                                    </td>
                                  </div>
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
      </div>
    </div>
  </main>
</template>

<script>
// import Dashboard from "../components/Dashboard.vue";
import { useAuthStore } from "../../../stores/authStore";
import { useClientStore } from "../../../stores/clientStore";
import { useTravelStore } from "../../../stores/travelStore";
import { ref } from "vue";

const storeAuth = useAuthStore();
import { mapWritableState, mapState, mapActions, mapStores } from "pinia";
export default {
  name: "TravelList",

  components: {
    // Dashboard,
  },
  setup() {
    const travelStore = useTravelStore();
    const clientStore = useClientStore();

    const isTrue = ref(false);
    const travelsList = ref([]);
    const users = ref([]);
    const client = ref([]);
    const travels = ref([]);

    // const getClients = async () => {
    //   await clientStore.getAllClients();
    //   users.value = clientStore.clients;
    //   console.log("clients", users.value);
    // };

    const getTravelsAPI = async () => {
      // recuperer les clients afin de les ajouter si le role est pro
      if (localStorage.getItem("roles").includes("ROLE_PRO")) {
        await clientStore.getAllClients();
        users.value = clientStore.clients;
        console.log("users", users.value);
      }

      //recuperer les travels
      if (travels.value.length == 0) {
        await travelStore.getTravels();
        travels.value = travelStore.travels;
        console.log("travels", travels.value);
      }

      //  filter en fonction du role pour afficher client ou non

      console.log("created for", travels.value.created_for);
      //mettre toute la reponse api dans une varibale

      for (let i = 0; i < travels.value.length; i++) {
        console.log("created for client id :", travels.value[i].created_for);
        let start = travels.value[i].startDate.split("T").slice(0, 1).join("");
        let end = travels.value[i].endDate.split("T").slice(0, 1).join("");

        if (localStorage.getItem("roles").includes("ROLE_PRO")) {
          isTrue.value = true;
          client.value = users.value.filter((element) => {
            return element.id == travels.value[i].created_for;
          });
          // console.log("filter user", client.value[0]);
          travelsList.value.push({
            client: client.value[0].username,
            clientId: client.value[0].id,
            id: travels.value[i].id,
            title: travels.value[i].title,
            description: travels.value[i].description,
            location: travels.value[i].location,
            start: start,
            end: end,
            href: `/home/travel/${travels.value[i].id}`,
            hrefStep: `/home/add/travel/steps/${travels.value[i].id}`,
          });
        } else {
          console.log("else", travels.value, travelsList);
          travelsList.value.push({
            id: travels.value[i].id,
            title: travels.value[i].title,
            description: travels.value[i].description,
            location: travels.value[i].location,
            start: travels.value[i].startDate,
            end: travels.value[i].endDate,
            href: `/home/travel/${travels.value[i].id}`,
            hrefStep: `/home/add/travel/steps/${travels.value[i].id}`,
          });
        }
      }
      console.log("travels List", travelsList.value);
    };

    console.log("hors function", travels.value);
    // getClients();
    getTravelsAPI();

    return { travels, travelsList, isTrue, users, client };
  },

  computed: {
    ...mapStores(useClientStore, useAuthStore, useTravelStore),
  },

  methods: {},
};
</script>

<style></style>
