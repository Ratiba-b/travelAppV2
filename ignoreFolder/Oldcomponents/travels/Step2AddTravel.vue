<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-40 md:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4"
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex flex-shrink-0 items-center px-4">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
              </div>
              <div class="mt-5 h-0 flex-1 overflow-y-auto">
                <nav class="space-y-1 px-2">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-4 flex-shrink-0 h-6 w-6',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5"
      >
        <div class="flex flex-shrink-0 items-center px-4">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <div class="mt-5 flex flex-grow flex-col">
          <nav class="flex-1 space-y-1 px-2 pb-4">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  item.current
                    ? 'text-gray-500'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 flex-shrink-0 h-6 w-6',
                ]"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col md:pl-64">
      <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
        <button
          type="button"
          class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3BottomLeftIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex flex-1 justify-between px-4">
          <div class="flex flex-1">
            <form class="flex w-full md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center"
                >
                  <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  class="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton
                  class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <a
                      :href="item.href"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >{{ item.name }}</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="flex-1">
        <div class="py-6">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">
              Crée ton voyage
            </h1>
          </div>
          <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
              <form class="space-y-8 divide-y divide-gray-200">
                <div class="space-y-8 divide-y divide-gray-200">
                  <div class="pt-8">
                    <div>
                      <h3 class="text-lg font-medium leading-6 text-gray-900">
                        Encore quelques questions...
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">
                        We'll always let you know about important changes, but
                        you pick what else you want to hear about.
                      </p>
                    </div>
                    <div class="mt-6">
                      <fieldset class="mt-6">
                        <legend
                          class="contents text-base font-medium text-gray-900"
                        >
                          Avec qui tu pars ?
                        </legend>
                        <p class="text-sm text-gray-500">
                          Dis nous si tu y vas seul ou accompagné
                        </p>
                        <div class="mt-4 space-y-4">
                          <div class="flex items-center">
                            <input
                              id="push-everything"
                              name="push-notifications"
                              type="radio"
                              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="push-everything"
                              class="ml-3 block text-sm font-medium text-gray-700"
                              >Solitaire</label
                            >
                          </div>
                          <div class="flex items-center">
                            <input
                              id="push-email"
                              name="push-notifications"
                              type="radio"
                              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="push-email"
                              class="ml-3 block text-sm font-medium text-gray-700"
                              >Couple</label
                            >
                          </div>
                          <div class="flex items-center">
                            <input
                              id="push-nothing"
                              name="push-notifications"
                              type="radio"
                              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="push-nothing"
                              class="ml-3 block text-sm font-medium text-gray-700"
                              >Famille</label
                            >
                          </div>
                          <div class="flex items-center">
                            <input
                              id="push-nothing"
                              name="push-notifications"
                              type="radio"
                              class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              for="push-nothing"
                              class="ml-3 block text-sm font-medium text-gray-700"
                              >Groupe</label
                            >
                          </div>
                        </div>
                        <div class="mt-5">
                          <legend
                            class="contents text-base font-medium text-gray-900"
                          >
                            Quel genre de voyage ?
                          </legend>
                          <p class="text-sm text-gray-500">
                            T'es plus backpack ou Hotel*** ?
                          </p>
                          <div class="mt-4 space-y-4">
                            <div class="flex items-center">
                              <input
                                id="push-everything"
                                name="push-notifications"
                                type="radio"
                                class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                for="push-everything"
                                class="ml-3 block text-sm font-medium text-gray-700"
                                >Road-Trip</label
                              >
                            </div>
                            <div class="flex items-center">
                              <input
                                id="push-email"
                                name="push-notifications"
                                type="radio"
                                class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                for="push-email"
                                class="ml-3 block text-sm font-medium text-gray-700"
                                >City trip</label
                              >
                            </div>
                            <div class="flex items-center">
                              <input
                                id="push-nothing"
                                name="push-notifications"
                                type="radio"
                                class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                for="push-nothing"
                                class="ml-3 block text-sm font-medium text-gray-700"
                                >Voyage Organisé</label
                              >
                            </div>
                            <div class="flex items-center">
                              <input
                                id="push-nothing"
                                name="push-notifications"
                                type="radio"
                                class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                for="push-nothing"
                                class="ml-3 block text-sm font-medium text-gray-700"
                                >Tour du monde ou long voyage</label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="mt-5">
                          <legend
                            class="contents text-base font-medium text-gray-900"
                          >
                            Date de départ
                          </legend>
                          <p class="text-sm text-gray-500">
                            A quand la grande aventure ?
                          </p>
                          <div class="mt-4 space-y-4">
                            <div class="flex items-center">
                              <div class="flex items-center justify-center">
                                <div
                                  class="datepicker relative form-floating mb-3 xl:w-96"
                                  data-mdb-toggle-button="false"
                                >
                                  <input
                                    type="text"
                                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Select a date"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div class="pt-5">
                  <div class="flex justify-end">
                    <button
                      type="submit"
                      class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Enregistrer
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
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
