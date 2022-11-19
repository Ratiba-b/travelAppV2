<template>
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
                    A list of all the users in your account including their
                    name, title, email and role.
                  </p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                  <router-link
                    to="/home/add/travel"
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
                          <tr v-for="travel in travelsList" :key="travel.id">
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
                                  class="text-indigo-600 hover:text-indigo-900"
                                >
                                  voir
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
      await clientStore.getAllClients();
      users.value = clientStore.clients;
      console.log("users", users.value);

      //recuperer les travels
      await travelStore.getTravels();
      travels.value = travelStore.travels;
      console.log("travels", travels.value);

      //  filter en fonction du role pour afficher client ou non

      // storeAuth.getTravels().then((this.travels = storeAuth.travels));
      // console.log("travels", this.travels);
      console.log("created for", travels.value.created_for);
      //mettre toute la reponse api dans une varibale
      // let travels = storeAuth.travels;
      // faire une recherche avec created_for dans le tableau client pour recup les infos
      // faire une boucle de cette variable pour recupere l'id travel de for chaque voyage
      // for(let i = 0; i < clients.length; i++)
      for (let i = 0; i < travels.value.length; i++) {
        console.log("created for client id :", travels.value[i].created_for);
        // for (let j = 0; j < clients.length; i++) {
        //   console.log("client", clients[j]);
        // }
        // let travelCreatedFor = this.travels[i].created_for;
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
            start: travels.value[i].startDate,
            end: travels.value[i].endDate,
            href: `/home/calendar/${travels.value[i].id}`,
          });
        } else {
          travelsList.push({
            id: travels.value[i].id,
            title: travels.value[i].title,
            description: travels.value[i].description,
            location: travels.value[i].location,
            start: travels.value[i].startDate,
            end: travels.value[i].endDate,
            href: `/home/calendar/${travels.value[i].id}`,
          });
        }
      }
      console.log("travels List", travelsList.value);
    };

    // if (localStorage.getItem("roles").includes("ROLE_PRO")) {
    //   isTrue.value = true;
    //   client.value = users.value.filter((element) => {
    //     console.log("element", element);
    //     return element.id == travels.value.created_for;
    //   });
    //   console.log("filter client", client.value);
    //   console.log("filter client", users.value);

    //   console.log("isTrue", isTrue);
    // // }

    // for(let i = 0; i < users.length; i++)
    //   // let travelCreatedFor = this.travels.value[i].created_for;
    //   if (
    //     travels.value[i].created_for &&
    //     localStorage.getItem("roles").includes("ROLE_PRO")
    //   ) {
    //     travelsList.value.push({
    //       client: client.value[0].username,
    //       clientId: client.value[0].id,
    //       id: travels.value[i].id,
    //       title: travels.value[i].title,
    //       description: travels.value[i].description,
    //       location: travels.value[i].location,
    //       start: travels.value[i].startDate,
    //       end: travels.value[i].endDate,
    //       href: `/home/calendar/${travels.value[i].id}`,
    //     });
    //   } else {
    //     travels.valueList.push({
    //       id: travels.value[i].id,
    //       title: travels.value[i].title,
    //       description: travels.value[i].description,
    //       location: travels.value[i].location,
    //       start: travels.value[i].startDate,
    //       end: travels.value[i].endDate,
    //       href: `/home/calendar/${travels.value[i].id}`,
    //     });
    //   }
    // }
    // console.log("travels.value List", travelsList, travelsList);
    // };
    console.log("hors function", travels.value);
    // getClients();
    getTravelsAPI();

    return { travels, travelsList, isTrue, users, client };
  },
  // data() {
  //   const travelsList = [];

  //   return {
  //     travelsList,
  //     travels: [],
  //     isTrue: false,
  //   };
  // },
  // async created() {
  //   if (storeAuth.isLogged()) {
  //     // storeAuth.getTravels();
  //     // console.log("Travel created", storeAuth.user.id);
  //     await this.travelStore
  //       .getTravels()

  //       .then((this.travels = this.travelStore.travels));
  //     console.log("clients", useClientStore().clients);
  //   } else {
  //     storeAuth.logout();
  //   }
  //   this.getTravels();
  // },
  computed: {
    ...mapStores(useClientStore, useAuthStore, useTravelStore),
  },

  methods: {
    // getTravels() {
    //   // storeAuth.getTravels().then((this.travels = storeAuth.travels));
    //   // console.log("travels", this.travels);
    //   console.log("created for", this.travels.created_for);
    //   //mettre toute la reponse api dans une varibale
    //   // let travels = storeAuth.travels;
    //   let clients = useClientStore().clients;
    //   // faire une recherche avec created_for dans le tableau client pour recup les infos
    //   // faire une boucle de cette variable pour recupere l'id travel de for chaque voyage
    //   console.log("clients", clients);
    //   // for(let i = 0; i < clients.length; i++)
    //   for (let i = 0; i < this.travels.length; i++) {
    //     console.log("travel", this.travels[i].created_for);
    //     // for (let j = 0; j < clients.length; i++) {
    //     //   console.log("client", clients[j]);
    //     // }
    //     // let travelCreatedFor = this.travels[i].created_for;
    //     if (
    //       this.travels[i].created_for &&
    //       localStorage.getItem("roles").includes("ROLE_PRO")
    //     ) {
    //       this.isTrue = true;
    //       let client = clients.filter((element) => {
    //         return element.id == this.travels[i].created_for;
    //       });
    //       console.log("filter client", client);
    //       this.travelsList.push({
    //         client: client[0].username,
    //         clientId: client[0].id,
    //         id: this.travels[i].id,
    //         title: this.travels[i].title,
    //         description: this.travels[i].description,
    //         location: this.travels[i].location,
    //         start: this.travels[i].startDate,
    //         end: this.travels[i].endDate,
    //         href: `/home/calendar/${this.travels[i].id}`,
    //       });
    //     } else {
    //       this.travelsList.push({
    //         id: this.travels[i].id,
    //         title: this.travels[i].title,
    //         description: this.travels[i].description,
    //         location: this.travels[i].location,
    //         start: this.travels[i].startDate,
    //         end: this.travels[i].endDate,
    //         href: `/home/calendar/${this.travels[i].id}`,
    //       });
    //     }
    //   }
    //   console.log("travels List", this.travelsList);
    // },
  },
};
</script>

<style></style>
