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
            <div class="">
              <button
                class="bg-gray-300 hover:bg-gray-400 text-gray-600 py-2 px-4 rounded-md"
                @click="logout"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/authStore";
import { mapStores, mapState } from "pinia";

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

const storeAuth = useAuthStore();

export default {
  name: "adminNav",
  data() {
    const sidebarOpen = false;
    let navigation;
    return {
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

      sidebarOpen,
      user: {
        roles: "",
      },
      isPro: false,
      token: "",
      id: "",
      roles: [],
      navigation,
    };
  },
  created() {
    if (!storeAuth.isLogged()) {
      this.$router.push("/login");
    }
    this.roles = storeAuth.user.roles;
    console.log("roles", this.roles);

    this.changeUser();
  },

  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ["user"]),
  },
  methods: {
    changeUser() {
      let roles = this.user.roles;

      console.log(this.roles);
      console.log(this.navigation);
      if (this.roles.includes("ROLE_PRO")) {
        this.navigation = [
          {
            name: "Dashboard",
            to: "/home/dashboard",
            icon: HomeIcon,
            current: true,
          },

          {
            name: "Liste des voyageurs",
            to: "/home/users/list",
            icon: UsersIcon,
            current: false,
            roles: null,
          },
          {
            name: "A jouter un voyageur",
            to: "/home/users/add",
            icon: UserPlusIcon,
            current: false,
            roles: null,
          },

          {
            name: "Voyages (particulier)",
            to: "/home/travels/list",
            icon: GlobeEuropeAfricaIcon,
            current: false,
            roles: null,
          },
          {
            name: "Todo",
            to: "/home/todo",
            icon: ListBulletIcon,
            current: false,
            roles: null,
          },
          {
            name: "calendrier",
            to: "/home/calendar",
            icon: AdjustmentsHorizontalIcon,
            current: false,
            roles: null,
          },
        ];
      }
      if (this.roles.includes("ROLE_USER")) {
        this.navigation = [
          {
            name: "Dashboard",
            to: "/home/dashboard",
            icon: HomeIcon,
            current: true,
          },

          {
            name: "Blog",
            to: "/home/blog",
            icon: NewspaperIcon,
            current: false,
            roles: null,
          },
          {
            name: "Ajouter un article",
            to: "/home/ajouter_article",
            icon: PencilSquareIcon,
            current: false,
            roles: null,
          },
          {
            name: "Voyages (particulier)",
            to: "/home/travels",
            icon: GlobeEuropeAfricaIcon,
            current: false,
            roles: null,
          },
          {
            name: "Todo",
            to: "/home/todo",
            icon: ListBulletIcon,
            current: false,
            roles: null,
          },
          {
            name: "calendrier",
            to: "/home/calendar",
            icon: AdjustmentsHorizontalIcon,
            current: false,
            roles: null,
          },
        ];
      }
      if (this.roles.includes("ROLE_ADMIN")) {
        this.navigation = [
          {
            name: "Dashboard",
            to: "/home/dashboard",
            icon: HomeIcon,
            current: true,
          },
          {
            name: "Liste des voyageurs",
            to: "/home/users/list",
            icon: UsersIcon,
            current: false,
            roles: null,
          },
          {
            name: "A jouter un voyageur",
            to: "/home/users/add",
            icon: UserPlusIcon,
            current: false,
            roles: null,
          },
          {
            name: "Blog",
            to: "/home/blog",
            icon: NewspaperIcon,
            current: false,
            roles: null,
          },
          {
            name: "Ajouter un article",
            to: "/home/article/add",
            icon: PencilSquareIcon,
            current: false,
            roles: null,
          },
          {
            name: "Voyages (particulier)",
            to: "/home/travels/list",
            icon: GlobeEuropeAfricaIcon,
            current: false,
            roles: null,
          },
          {
            name: "Todo",
            to: "/home/todo",
            icon: ListBulletIcon,
            current: false,
            roles: null,
          },
          {
            name: "calendrier",
            to: "/home/calendar",
            icon: AdjustmentsHorizontalIcon,
            current: false,
            roles: null,
          },
        ];
      }
    },
    logout() {
      this.authStore.logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
