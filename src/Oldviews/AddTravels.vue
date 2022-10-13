<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
    <h1 class="text-2xl font-semibold text-gray-900">Crée ton voyage</h1>
  </div>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
    <!-- Replace with your content -->
    <div class="py-4">
      <form class="space-y-8 divide-y divide-gray-200">
        <div class="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 class="text-lg font-medium leading-6 text-gray-900">
                Dis moi tout
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                Renseignements concernant ton voyage
              </p>
            </div>

            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-4">
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700"
                  >Titre</label
                >
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autocomplete="username"
                    class="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Quel est l'intitulé de ton voyage ?
                </p>
              </div>

              <div class="sm:col-span-6">
                <label
                  for="about"
                  class="block text-sm font-medium text-gray-700"
                  >Description</label
                >
                <div class="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows="3"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Quel genre de voyage es-tu entrain de planifier ?
                </p>
              </div>

              <!-- <div class="sm:col-span-6">
                <label
                  for="cover-photo"
                  class="block text-sm font-medium text-gray-700"
                  >Cover photo</label
                >
                <div
                  class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                >
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          class="sr-only"
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <div class="pt-5">
          <div class="flex justify-end">
            <button
              type="submit"
              class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <router-link to="/travels/add/step2">Suivant</router-link>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
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

const sidebarOpen = ref(false);
//form1
//titre
// destination
//description

//form2
// partir avec qui ?
//quel genre voyage (road trip voygae organisé etc.)
// le voyage est preparation/ en cours / finin ? // date debut // date fin
</script>
