<template>
  <div class="bg-white">
    <TravelMaps />
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
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >Heure</label
                  >
                  <div class="mt-1">
                    <input
                      type="time"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="event.hourStart"
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
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >Heure</label
                  >
                  <div class="mt-1">
                    <input
                      type="time"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="event.hourEnd"
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
              <h2
                class="mb-3 text-lg font-medium leading-6 text-gray-900 space-y-8 divide-y divide-gray-200"
              >
                Tu as {{ changeOnCount }} événements de prévu ! :)
              </h2>
              <table class="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="ml-1 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                    >
                      <button @click="filterDate">Début</button>
                    </th>
                    <th
                      scope="col"
                      class="ml-1 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                    >
                      <button @click="filterHour">Heure</button>
                    </th>
                    <th
                      scope="col"
                      class="ml-1 flex justify-center py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Fin
                    </th>
                    <th
                      scope="col"
                      class="ml-1 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
                    >
                      Heure
                    </th>
                    <th
                      scope="col"
                      class="ml-1 py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      class="ml-1 py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Emplacement
                    </th>
                    <th
                      scope="col"
                      class="ml-1 relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                    >
                      <span class="sr-only"></span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr v-for="event in allEvents" :key="event.id">
                    <td
                      class="ml-2 flex justify-center whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0"
                    >
                      {{ event.start }}
                    </td>
                    <td
                      class="ml-1 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0"
                    >
                      {{ event.hourStart }}
                    </td>
                    <td
                      class="ml-1 whitespace-nowrap py-4 px-3 text-sm text-gray-500"
                    >
                      {{ event.end }}
                    </td>
                    <td
                      class="ml-1 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0"
                    >
                      {{ event.hourEnd }}
                    </td>
                    <td
                      class="ml-1 whitespace-nowrap py-4 px-3 text-sm text-gray-500"
                    >
                      {{ event.description }}
                    </td>
                    <td
                      class="ml-1 whitespace-nowrap py-4 px-3 text-sm text-gray-500"
                    >
                      {{ event.location }}
                    </td>
                    <td
                      class="ml-1 relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0"
                    >
                      <button
                        class="text-indigo-600 hover:text-indigo-900"
                        @click="deleteEvent(event.planning_id)"
                      >
                        Supprimer
                      </button>
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
  <section class="mt-20 mb-20 divide-y divide-gray-200">
    <todo />
  </section>
</template>

<script>
import { nextTick } from "vue";
import { useAuthStore } from "../../../stores/authStore";
import Todo from "../../../components/Todo.vue";
import Axios from "axios";
import TravelMaps from "../travels/TravelMaps.vue";
const storeAuth = useAuthStore();
export default {
  name: "Planner",
  components: {
    Todo,
    TravelMaps,
  },

  data() {
    return {
      // les info du travel
      travel: {
        travel_id: "",
        location: "",
        start: "",
        end: "",
        hourStart: "",
        hourEnd: "",
      },
      //recup tous les events du planning
      allEvents: [],

      // envoi un nouvel element a la bdd
      event: {
        travel_id: "",
        start: "",
        end: "",
        description: "",
        location: "",
      },
      // liste des events pour update
      countEvents: 0,

      token: "",

      todos: [],
    };
  },
  async created() {
    await this.getEvents();
    console.log("created", this.allEvents.length);
  },
  computed: {
    changeOnCount() {
      return (this.countEvents = this.allEvents.length);
    },
    changeDate(value) {
      let newValue = value;
      return console.log("value", newValue);
      // return newValue.split("T").slice(0, 1).join("");
    },
  },

  methods: {
    async getEvents() {
      // recu le token pour avoir acces a l"api
      this.token = storeAuth.token;

      // recupere l'id du voyage selectionné pour recup toutes ses infos
      this.event.travel_id = this.$route.params.id;
      console.log("id", this.event.travel_id);

      const response = await Axios.get(
        `http://localhost:8080/travels/${this.event.travel_id}`,
        { headers: { "x-access-token": this.token } }
      ).then(console.log("ok"));
      console.log("response", response);

      // recup les données relatif au travel grace a travel id
      this.travel = {
        travel_id: response.data.data.id,
        location: response.data.data.location,
        start: response.data.data.startDate,
        end: response.data.data.endDate,
      };
      // grace a la relation entre travel et planning on recup tous les plannings(events) du voyage
      const plannings = response.data.data.Plannings;

      const filteredEvent = [];

      this.allEvents = filteredEvent;
      // tri des plannings pour les ajouter un par un a allEvents
      for (let i = 0; i < plannings.length; i++) {
        // change le format de date
        let startDate = plannings[i].start.split("T").slice(0, 1).join("");
        let endDate = plannings[i].start.split("T").slice(0, 1).join("");

        // recup les données de la response stockée dans planning pour mettre dans allEvents qui sera render
        filteredEvent.push({
          planning_id: plannings[i].id,
          travel_id: plannings[i].travel_id,
          start: startDate,
          end: endDate,
          hourStart: plannings[i].hourStart,
          hourEnd: plannings[i].hourEnd,
          description: plannings[i].description,
          location: plannings[i].location,
        });
      }

      // recuperer les todos dans réponse API push dans un tableau pour trier
      const todo = response.data.data.Todos;
      // todo.push(response.data.data.Todos);
      const filteredTodo = [];
      // tri todo filter pour envoie dans props
      for (let i = 0; i < todo.length; i++) {
        console.log("todo[i]", todo[i].id);
        filteredTodo.push({
          todo_id: todo[i].id,
          task: todo[i].task,
        });
      }
      this.todos = filteredTodo;

      console.log("planning", response.data.data.Plannings.length);
      console.log("allEvents", this.allEvents);
      console.log("allEvents", filteredEvent);
    },
    addEvent() {
      console.log("addEvent", this.event);
      Axios.put("http://localhost:8080/plannings", this.event, {
        headers: { "x-access-token": this.token },
      })
        .then(() => {
          this.getEvents();
        })
        .catch((error) => console.log(error));
      this.event = {
        travel_id: this.$route.params.id,
        start: "",
        end: "",
        description: "",
        location: "",
        hourStart: "",
        hourEnd: "",
      };
    },
    deleteEvent(eventId) {
      console.log("event id", eventId);
      Axios.delete(`http://localhost:8080/plannings/${eventId}`, {
        headers: { "x-access-token": this.token },
      })
        .then(() => {
          this.getEvents();
        })
        .catch((error) => console.log(error));
    },

    filterDate() {
      this.allEvents.sort(function (a, b) {
        return new Date(a.start) - new Date(b.start);
      });
    },
  },
};
</script>
