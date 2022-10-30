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
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->
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
              class="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4"
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
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
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
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-gray-300'
                          : 'text-gray-400 group-hover:text-gray-300',
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
      <div class="flex min-h-0 flex-1 flex-col bg-gray-200">
        <div class="flex h-16 flex-shrink-0 items-center bg-gray-200 px-4">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=gray&shade=700"
            alt="Your Company"
          />
          <h2 class="ml-5 text-black font-bold uppercase text-2xl mr-8">
            Travelapp
          </h2>
        </div>
        <div class="flex flex-1 flex-col overflow-y-auto">
          <nav class="flex-1 space-y-1 px-2 py-4">
            <li v-if="user.roles === 'ROLE_PRO'" class="nav-item">
              <router-link to="/admin" class="nav-link"
                >Admin Board</router-link
              >
            </li>
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              :class="[
                item.current
                  ? 'bg-gray-500 text-white'
                  : 'text-gray-900 hover:bg-gray-500 hover:text-white',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  item.current
                    ? 'text-gray-300'
                    : 'text-gray-400 group-hover:text-gray-300',
                  'mr-3 flex-shrink-0 h-6 w-6',
                ]"
                aria-hidden="true"
              />
              {{ item.name }}
            </router-link>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:pl-64">
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
          <div class="flex flex-1"></div>
          <div class="ml-4 flex items-center md:ml-6">
            <!-- <button
              type="button"
              class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button> -->

            <!-- Profile dropdown -->
            <div class="">
              <button
                class="bg-gray-300 hover:bg-gray-400 text-gray-600 py-2 px-4 rounded-md"
                @click="logout()"
              >
                Déconnexion
              </button>
            </div>

            <!-- <Menu as="div" class="relative ml-3">
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
            </Menu> -->
          </div>
        </div>
      </div>

      <main class="flex-1">
        <div class="py-6">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">
              Dashboard {{ user.username }} - {{ user.roles }} - {{ id }}
            </h1>
          </div>
          <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <!-- Replace with your content -->
            <div class="py-4">
              <!-- <div
                class="h-96 rounded-lg border-4 border-dashed border-gray-200"
              /> -->
              <div class="grid grid-cols-3 gap-4"></div>
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Agenda from "./Agenda.vue";
import { accountService } from "@/_services";
import { useAuthStore } from "../stores/authStore";

import { mapWritableState, mapState, mapActions, mapStores } from "pinia";

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
  NewspaperIcon,
  UserPlusIcon,
  PencilSquareIcon,
  GlobeEuropeAfricaIcon,
  AdjustmentsHorizontalIcon,
  ListBulletIcon,
} from "@heroicons/vue/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/vue/20/solid";

const navigation = [
  { name: "Dashboard", to: "/admin/dashboard", icon: HomeIcon, current: true },

  {
    name: "Liste des voyageurs",
    to: "/admin/users/index",
    icon: UsersIcon,
    current: false,
  },
  {
    name: "A jouter un voyageur",
    to: "/admin/users/add",
    icon: UserPlusIcon,
    current: false,
  },
  {
    name: "Blog",
    to: "/admin/cocktails/index",
    icon: NewspaperIcon,
    current: false,
  },
  {
    name: "Ajouter un article",
    to: "/admin/cocktails/edit",
    icon: PencilSquareIcon,
    current: false,
  },
  {
    name: "Voyages (particulier)",
    to: "/admin/travels",
    icon: GlobeEuropeAfricaIcon,
    current: false,
  },
  {
    name: "Todo",
    to: "/admin/todo",
    icon: ListBulletIcon,
    current: false,
  },
  {
    name: "calendrier",
    to: "/admin/calendar",
    icon: AdjustmentsHorizontalIcon,
    current: false,
  },
];

const storeAuth = useAuthStore();

const sidebarOpen = false;

export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      Agenda,
      Dialog,
      DialogPanel,
      Menu,
      MenuButton,
      MenuItem,
      MenuItems,
      TransitionChild,
      TransitionRoot,
      Bars3BottomLeftIcon,
      BellIcon,
      XMarkIcon,
      navigation,
      sidebarOpen,
      user: {
        roles: storeAuth.user.roles,
      },
      isPro: false,
      token: "",
      id: "",
    };
  },

  created() {
    console.log(localStorage.getItem("token"));
    if (!storeAuth.isLogged()) {
      this.$router.push("/login");
    }
    this.id = localStorage.getItem("userId");
    // this.user.roles = storeAuth.user.roles;

    // this.user = storeAuth.user[0];
    // console.log(this.user);
    // console.log(accountService.isLogged());
    // // if (!user) {
    // //   this.$router.push("/login");
    // // }
    // if (accountService.isLogged() && this.user.roles.includes("ROLE_PRO")) {
    //   this.isPro = true;
    // } else {
    //   this.isPro = false;
    // }
    // console.log(this.user.roles.includes("ROLE_PRO"));
  },
  update() {
    this.currentUser();
  },
  computed: {
    ...mapState(useAuthStore, ["user"]),

    // ...mapStores(useAuthStore),
    // ...mapWritableState(useAuthStore, ["user"]),

    currentUser() {
      this.user.roles = storeAuth.user.roles;
    },
    showAdminBoard() {
      if (storeAuth.isLogged() && this.user.roles.includes("ROLE_PRO")) {
        this.isPro = true;
      } else {
        this.isPro = false;
      }
      console.log(this.isPro);
    },
  },
  methods: {
    // ...mapActions(useAuthenticationStore, ["getUser"]),
    logout() {
      // accountService.logout();
      // this.$router.push("/");
      storeAuth.logout();
      this.$router.push("/login");
    },
  },
};
</script>
