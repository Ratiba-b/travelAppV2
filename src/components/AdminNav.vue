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
          <a href="/home/dashboard">
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
                <MenuItem>
                  <button
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                    @click="logout"
                  >
                    Déconnexion
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>

        <div
          class="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20"
        >
          <div class="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
            <!-- nav bar page full open-->
            <div class="hidden lg:col-span-2 lg:block">
              <nav class="flex space-x-4">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.to"
                  :class="[
                    item.current ? 'text-white' : 'text-cyan-100',
                    'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                >
                  {{ item.name }}
                </router-link>
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
    <!-- menu burger  -->
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
                    >{{ item.name }}
                  </router-link>
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
    this.roles = storeAuth.roles;
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
