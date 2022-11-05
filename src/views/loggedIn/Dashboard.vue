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
  <main class="flex-1">
    <div class="py-6">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 class="text-2xl font-semibold text-gray-900"></h1>
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
</template>

<script>
import { useAuthStore } from "../../stores/authStore";

import { mapWritableState, mapState, mapActions, mapStores } from "pinia";

import { ref } from "vue";

const storeAuth = useAuthStore();

const sidebarOpen = false;

export default {
  name: "Dashboard",
};
</script>
