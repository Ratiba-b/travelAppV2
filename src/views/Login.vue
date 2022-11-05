<template>
  <publicNav />

  <main class="pt-20">
    <div class="px-4 sm:px-6 lg:px-8 h-56 flex justify-center m-20">
      <div class="bg-white shadow sm:rounded-lg w-96 h-64">
        <div class="px-4 py-5 sm:p-6">
          {{ errors[0] }}
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Se connecter
          </h3>
          <div class="items-center mt-2 max-w-xl text-sm text-gray-500">
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Pseudo</label>
              <input
                type="text"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Entrez votre pseudo"
                v-model="state.username"
              />
              <span v-if="v$.username.$error">
                {{ v$.username.$errors[0].$message }}
              </span>
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Mot de passe</label>
              <input
                type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Mot de passe"
                v-model="state.password"
              />
              <span v-if="v$.password.$error">
                {{ v$.password.$errors[0].$message }}
              </span>
            </div>
            <button
              type="submit"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
              @click="login"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapStores } from "pinia";
import { useAuthStore } from "../stores/authStore";
import { accountService } from "../_services/account.service";
import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import PublicNav from "@/components/PublicNav.vue";

const storeAuth = useAuthStore();
export default {
  name: "Login",
  components: {
    PublicNav,
  },
  setup() {
    const state = reactive({
      username: "",
      password: "",
    });

    const rules = computed(() => {
      return {
        username: { required },
        password: { required, minLength: minLength(6) },
      };
    });

    const v$ = useValidate(rules, state);
    let errors = [];

    return {
      state,
      v$,
      errors,
    };
  },

  computed: {
    ...mapStores(useAuthStore),
  },

  methods: {
    login() {
      let errors = [];
      this.v$.$validate();

      if (!this.v$.$error) {
        this.authStore
          .login(this.state)
          .then(this.$router.push("/home/dashboard"))
          .catch((err) => console.log(err));
      } else {
        console.log("error");
      }

      this.errors.push(errors);
      console.log("ok", this.errors);
    },
    verify() {
      console.log("verify");
    },
  },
};
</script>

<style></style>
