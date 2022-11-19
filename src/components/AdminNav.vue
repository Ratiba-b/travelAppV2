<template>
  <Popover
    as="header"
    class="bg-gradient-to-r from-sky-800 to-cyan-600 pb-24"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div
        class="relative flex flex-wrap items-center justify-center lg:justify-between"
      >
        <!-- Logo -->
        <div class="absolute left-0 flex-shrink-0 py-5 lg:static">
          <a href="#">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=200"
              alt=""
            />
          </a>
        </div>

        <!-- Right section on desktop -->
        <div class="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
          <button
            type="button"
            class="flex-shrink-0 rounded-full p-1 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-4 flex-shrink-0">
            <div>
              <MenuButton
                class="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100"
              >
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
              </MenuButton>
            </div>
            <transition
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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

        <div
          class="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20"
        >
          <div class="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
            <!-- Left nav -->
            <div class="hidden lg:col-span-2 lg:block">
              <nav class="flex space-x-4">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  :class="[
                    item.current ? 'text-white' : 'text-cyan-100',
                    'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                  >{{ item.name }}</a
                >
              </nav>
            </div>
            <div class="px-12 lg:px-0">
              <!-- Search -->
            </div>
          </div>
        </div>

        <!-- Menu button -->
        <div class="absolute right-0 flex-shrink-0 lg:hidden">
          <!-- Mobile menu button -->
          <PopoverButton
            class="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
      </div>
    </div>

    <TransitionRoot as="template" :show="open">
      <div class="lg:hidden">
        <TransitionChild
          as="template"
          enter="duration-150 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-150 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <PopoverOverlay class="fixed inset-0 z-20 bg-black bg-opacity-25" />
        </TransitionChild>

        <TransitionChild
          as="template"
          enter="duration-150 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            class="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
          >
            <div
              class="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <div class="pt-3 pb-2">
                <div class="flex items-center justify-between px-4">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                    >
                      <span class="sr-only">Close menu</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="mt-3 space-y-1 px-2">
                  <router-link
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.to"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                    >{{ item.name }}</router-link
                  >
                </div>
              </div>
              <div class="pt-4 pb-2">
                <div class="mt-3 space-y-1 px-2">
                  <router-link
                    v-for="item in userNavigation"
                    :key="item.name"
                    :to="item.to"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                    >{{ item.name }}</router-link
                  >
                  <a
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                    @click="logout"
                    >Déconnexion</a
                  >
                </div>
              </div>
            </div>
          </PopoverPanel>
        </TransitionChild>
      </div>
    </TransitionRoot>
  </Popover>
  <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-gray-100">
      <body class="h-full">
      ```
    -->

  <!-- <div>
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
            </DialogPanel>
          </TransitionChild>
          <div class="w-14 flex-shrink-0" aria-hidden="true"> -->
  <!-- Dummy element to force sidebar to shrink to fit close icon -->
  <!-- </div>
        </div>
      </Dialog>
    </TransitionRoot> -->

  <!-- Static sidebar for desktop -->
  <!-- <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col"> -->
  <!-- Sidebar component, swap this element with another sidebar if you like -->
  <!-- <div class="flex min-h-0 flex-1 flex-col bg-gray-200">
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
              </button> -->
  <!-- <NotifBar /> -->
  <!-- </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import NotifBar from "@/components/NotifBar.vue";

import { useAuthStore } from "../stores/authStore";
import { useNotifStore } from "../stores/notifStore";

import { mapStores, mapState } from "pinia";

import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
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
  Bars3Icon,
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
  components: {
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    Bars3BottomLeftIcon,
    Bars3Icon,
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
  },
  setup() {
    const userNavigation = [
      { name: "Your Profile", to: "/home/profile" },
      { name: "Settings", to: "#" },
    ];
    return {
      userNavigation,
    };
  },
  data() {
    const notif = useNotifStore();
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

      notif,
    };
  },
  created() {
    this.roles = storeAuth.user.roles;
    console.log("roles", this.roles);

    this.changeUser();
    console.log("display", this.notif.displayNotif);
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
            name: "Voyages",
            to: "/home/travels/list",
            icon: GlobeEuropeAfricaIcon,
            current: false,
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
          {
            name: "Profil",
            to: "/home/profile",
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
            to: "/home/article/add",
            icon: PencilSquareIcon,
            current: false,
            roles: null,
          },
          {
            name: "Voyages ",
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
          {
            name: "Profil",
            to: "/home/profile",
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
          {
            name: "Profil",
            to: "/home/profile",
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
