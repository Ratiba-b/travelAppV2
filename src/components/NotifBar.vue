<template>
  <div
    v-if="getNotif"
    aria-live="assertive"
    class="mt-20 pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="show"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <XCircleIcon class="h-6 w-6 text-red-400" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">
                  {{ getNotifMessage }} {{ message }} {{ getNotif }}
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="close"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>

  <div
    v-if="getSuccess"
    aria-live="assertive"
    class="mt-20 pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start"
  >
    <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="show"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <CheckCircleIcon
                  class="h-6 w-6 text-green-400"
                  aria-hidden="true"
                />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">
                  Opération réalisée avec succès
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  @click="close"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { CheckCircleIcon, XCircleIcon } from "@heroicons/vue/24/outline";
import { XMarkIcon } from "@heroicons/vue/20/solid";
import { useNotifStore } from "../stores/notifStore";
import { mapState, mapActions, mapStores } from "pinia";

const show = true;
export default {
  name: "NotifBar",
  components: {
    CheckCircleIcon,
    XCircleIcon,
    XMarkIcon,
  },

  data() {
    const notif = useNotifStore();
    return {
      show,
      notif,
      messageError: "",
    };
  },
  computed: {
    ...mapStores(useNotifStore, [
      " notifDisplay",
      "successDisplay",
      "notifMessage",
    ]),
    ...mapState(useNotifStore, ["getNotif", "getSuccess", " getNotifMessage"]),
  },
  methods: {
    // ...mapActions(useNotifStore, ["displayNotif", "displaySuccessNotif"]),
    close() {
      console.log("notif", this.notif.notifDisplay, this.notif.getNotifMessage);
      if (this.notif.notifMessage) {
        this.notif.notifMessage = "";
      } else {
        this.notif.successDisplay = false;
      }
    },
  },
};
</script>
