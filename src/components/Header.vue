<!-- eslint-disable vue/valid-template-root -->
<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link to="/" class="text-white font-bold uppercase text-2xl mr-8">
        Travelapp
      </router-link>
      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <router-link to="/contact" class="px-2 text-white">
              Contact
            </router-link>
          </li>
          <li>
            <router-link to="/cocktails" class="px-2 text-white">
              Cocktails
            </router-link>
          </li>
          <li>
            <router-link to="/login" class="px-2 text-white">
              Login
            </router-link>
          </li>
          <li>
            <router-link to="/register" class="px-2 text-white">
              Register
            </router-link>
          </li>
          <li>
            <router-link to="/travels" class="px-2 text-white">
              Voyages
            </router-link>
          </li>
          <li>
            <router-link to="/add" class="px-2 text-white"> Tuto </router-link>
          </li>
          <li>
            <router-link to="/calendar" class="px-2 text-white">
              Calendrier
            </router-link>
          </li>

          <router-view />
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal";

export default {
  name: "AppHeader",

  computed: {
    // acceder au state pour changer le status du modal
    ...mapStores(useModalStore),
  },

  methods: {
    // changer le status du modal
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen;
      console.log("modal store is open", this.modalStore.isOpen);
    },
  },
};
</script>
