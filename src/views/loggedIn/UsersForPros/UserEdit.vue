<template>
  <div class="h-10 rounded-lg"></div>
  <main class="relative -mt-32">
    <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div>
          <div class="h-20 rounded-lg"></div>

          <h1
            class="text-2xl font-semibold text-gray-900 flex justify-center mb-10"
          >
            Profile de {{ user.username }}
          </h1>

          <div class="h-20 rounded-lg"></div>

          <div class="m-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Informations Personnelles
                  </h3>
                  <p class="mt-1 text-sm text-gray-600">
                    Toutes les informations relatives au client se trouve ici
                  </p>
                </div>
              </div>
              <div class="m-5 md:col-span-2 md:mt-0">
                <form @submit.prevent="edit">
                  <div class="overflow-hidden shadow sm:rounded-md">
                    <div class="bg-white px-4 py-5 sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <input
                            type="text"
                            id="user_id"
                            v-model="user.id"
                            hidden
                          />
                          <label
                            for="first-name"
                            class="block text-sm font-medium text-gray-700"
                            >Nom</label
                          >
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            v-model="user.name"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="last-name"
                            class="block text-sm font-medium text-gray-700"
                            >Prénom</label
                          >
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            v-model="user.surname"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="first-name"
                            class="block text-sm font-medium text-gray-700"
                            >Pseudo</label
                          >
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            v-model="user.username"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="last-name"
                            class="block text-sm font-medium text-gray-700"
                            >Email</label
                          >
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            v-model="user.email"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                    <div class="h-10 rounded-lg"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { userService } from "@/_services";
export default {
  name: "UserEdit",
  props: ["id"],
  data() {
    return {
      user: {},
    };
  },
  methods: {
    // Envoi a l'API pour modification
    edit() {
      console.log("this.user", this.user);
      userService
        .updateUser(this.user)
        .then((res) => this.$router.push("/admin/users/index"))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    //Recuperation a l'affichage de l'utilisateur
    userService
      .getUser(this.id)
      .then((res) => {
        // 1er data est cote api le deucieme est cote front
        console.log(res);
        this.user = res.data.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
