<template>
  <div>
    <main class="flex-1">
      <div class="py-6">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <!-- Replace with your content -->
          <div class="py-4">
            <div class="submit-form">
              <div v-if="!submitted">
                <div class="form-group">
                  <label for="title">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    required
                    v-model="tutorial.title"
                    name="title"
                  />
                </div>

                <div class="form-group">
                  <label for="description">Description</label>
                  <input
                    class="form-control"
                    id="description"
                    required
                    v-model="tutorial.description"
                    name="description"
                  />
                </div>

                <button @click="saveTutorial" class="btn btn-success">
                  Submit
                </button>
              </div>

              <div v-else>
                <h4>You submitted successfully!</h4>
                <button class="btn btn-success" @click="newTutorial">
                  Add
                </button>
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
import TutorialDataService from "../services/TutorialDataService";
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

export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
      };

      TutorialDataService.create(data)
        .then((response) => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    },
  },
};
</script>
