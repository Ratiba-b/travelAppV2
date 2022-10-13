<template>
  <div>
    <!-- <Layout /> -->

    <main class="flex-1">
      <div class="py-6">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 class="text-2xl font-semibold text-gray-900">On part ou ?</h1>
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <!-- Replace with your content -->
          <div class="py-4">
            <div class="px-4 sm:px-6 lg:px-8">
              <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                  <h1 class="text-xl font-semibold text-gray-900">Voyages</h1>
                  <p class="mt-2 text-sm text-gray-700">
                    Ta liste de voyages personnalisée
                  </p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  >
                    <router-link to="/travels/add">
                      ajouter un voyage</router-link
                    >
                    |
                  </button>
                </div>
              </div>
              <div
                class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg"
              >
                <table class="min-w-full divide-y divide-gray-300">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Role
                      </th>
                      <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="person in people" :key="person.email">
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                      >
                        {{ person.name }}
                      </td>
                      <td
                        class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell"
                      >
                        {{ person.title }}
                      </td>
                      <td
                        class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell"
                      >
                        {{ person.email }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                      >
                        {{ person.role }}
                      </td>
                      <td
                        class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                      >
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                          >Edit<span class="sr-only"
                            >, {{ person.name }}</span
                          ></a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
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
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3BottomLeftIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";
import Layout from "./Layout.vue";
const people = [
  {
    name: "Londres",
    title: "Voyage culturel",

    role: "du 26/09/2022 au 05/10/2022",
  },
  {
    name: "Malte",
    title: "Sejour linguistique",

    role: "du 13/11/2002 au 20/11/2022",
  },
  {
    name: "Iles canaries",
    title: "En mode farniente",

    role: "du 20/12/2022 au 28/12/2022",
  },
  {
    name: "Rome",
    title: "Séjour gastronomique et musical",
    role: "du 15/01/2023 au 25/01/2023",
  },
  // More people...
];
const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Voyages", href: "/travels", icon: UsersIcon, current: false },
  { name: "Todos", href: "#", icon: FolderIcon, current: false },
  { name: "Journal", href: "#", icon: CalendarIcon, current: false },
  // { name: "Documents", href: "#", icon: InboxIcon, current: false },
  // { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const sidebarOpen = false;

export default {
  name: "Layout",

  components: {
    Layout,
  },
};
</script>
