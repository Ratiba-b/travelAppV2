<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
        },
      },
    },
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
        <div
          class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x"
        >
          <aside class="py-6 lg:col-span-3"></aside>

          <form
            class="divide-y divide-gray-200 lg:col-span-9"
            action="#"
            method="POST"
          >
            <div class="h-32 rounded-lg"></div>
            <!-- Profile section -->
            <div class="py-6 px-4 sm:p-6 lg:pb-8">
              <div>
                <h2 class="text-lg font-medium leading-6 text-gray-900">
                  Profile
                </h2>
                <p class="mt-1 text-sm text-gray-500"></p>
              </div>

              <div class="mt-6 grid grid-cols-12 gap-6">
                <div class="col-span-12 sm:col-span-6">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >Prénom</label
                  >
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    v-model="user.name"
                  />
                </div>

                <div class="col-span-12 sm:col-span-6">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Nom</label
                  >
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    v-model="user.surname"
                  />
                </div>

                <div class="col-span-12 sm:col-span-6">
                  <label
                    for="company"
                    class="block text-sm font-medium text-gray-700"
                    >Pseudo</label
                  >
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autocomplete="organization"
                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    v-model="user.username"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label
                    for="company"
                    class="block text-sm font-medium text-gray-700"
                    >email</label
                  >
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autocomplete="organization"
                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                    v-model="user.email"
                  />
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <label
                    for="company"
                    class="block text-sm font-medium text-gray-700"
                    >Mot de passe</label
                  >
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autocomplete="organization"
                    class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <!-- Privacy section -->
            <div class="divide-y divide-gray-200 pt-6">
              <div class="h-32 rounded-lg"></div>
              <div class="mt-4 flex justify-end py-4 px-4 sm:px-6">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="ml-5 inline-flex justify-center rounded-md border border-transparent bg-sky-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useAuthStore } from "../../stores/authStore";
import { ref } from "vue";
export default {
  setup() {
    const authStore = useAuthStore();
    const user = ref({});
    const id = localStorage.getItem("userId");

    // importer les informations du user
    const getUser = async () => {
      console.log("user", id);
      await authStore.getUser(id);
      user.value = authStore.user;
    };

    getUser();
    return { user };
  },
};

// const user = {
//   name: "Floyd Miles",
//   email: "floy.dmiles@example.com",
//   imageUrl:
//     "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
// };
</script>
