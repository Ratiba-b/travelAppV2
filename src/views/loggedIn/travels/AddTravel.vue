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
  <div class="w-5/6 ml-40">
    <div class="w-5/6"></div>
    <form class="space-y-6 pl-40" @submit.prevent="addTravel">
      <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6 ml-40">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Ajoute un nouveau voyage
              </h3>
              <p class="mt-1 text-sm text-gray-600">
                Tu pourras créer ton agenda perso après ca
              </p>
            </div>
          </div>
          <div class="mt-5 md:col-span-2 md:mt-0">
            <div class="overflow-hidden shadow sm:rounded-md">
              <div class="bg-white px-4 py-5 sm:p-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="email-address"
                      class="block text-sm font-medium text-gray-700"
                      >Titre</label
                    >
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autocomplete="email"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="travel.title"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="email-address"
                      class="block text-sm font-medium text-gray-700"
                      >Quelle destination ?</label
                    >
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autocomplete="email"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="travel.location"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="email-address"
                      class="block text-sm font-medium text-gray-700"
                      >Quelle est la nature de ton séjour ?
                    </label>
                    <textarea
                      rows="5"
                      cols="33"
                      type="text"
                      name="email-address"
                      id="email-address"
                      autocomplete="email"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray"
                      v-model="travel.description"
                    >
 La grande fan de mangas que je suis à toujours voulu visiter le Japon. Ce moment est enfin arrivé...</textarea
                    >
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="date"
                      class="block text-sm font-medium text-gray-700"
                      >Début</label
                    >
                    <input
                      type="date"
                      name="date"
                      id="date"
                      autocomplete="address-level2"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="travel.startDate"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-4">
                    <label
                      for="region"
                      class="block text-sm font-medium text-gray-700"
                      >Fin</label
                    >
                    <input
                      type="date"
                      name="region"
                      id="region"
                      autocomplete="address-level1"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      v-model="travel.endDate"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <button
          type="button"
          class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          Annuler
        </button>
        <button
          type="submit"
          class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          Enregistrer
        </button>
      </div>
    </form>
  </div>

  <div class="hidden sm:block" aria-hidden="true">
    <div class="py-5">
      <div class="border-t border-gray-200" />
    </div>
  </div>
</template>

<script>
import { travelService } from "../_services/travels.service";
import { useAuthStore } from "../stores/authStore";

const storeAuth = useAuthStore();

export default {
  name: "AddTravel",

  components: {},
  data() {
    return {
      travel: {
        user_id: localStorage.getItem("user_id"),
        title: "",
        location: "",
        description: "",
        startDate: "",
        endDate: "",
      },
    };
  },
  created() {
    this.travel.user_id = localStorage.getItem("userId");
  },
  computed: {
    dateFormat() {
      this.travel.startDate.split("T");
    },
  },
  methods: {
    addTravel() {
      console.log("user", this.travel.user_id);
      travelService
        .addTravels(this.travel)
        .then(
          this.$router.push("/admin/travels"),
          console.log("envoyé", this.travel)
        )
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
