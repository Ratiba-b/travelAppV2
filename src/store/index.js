import { defineStore } from "pinia";

import { auth } from "./auth.module";

export const useUserStore = defineStore("modules", {
  auth,
});
