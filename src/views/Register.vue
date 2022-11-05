<template>
  <publicNav />
  {{ errors }}
  <main class="pt-20">
    <div class="px-4 sm:px-6 lg:px-8 h-56 flex justify-center m-20">
      <div class="bg-white shadow sm:rounded-lg w-96 h-96">
        <div class="sm:p-2">
          <h3
            class="text-lg font-medium leading-6 text-gray-900 flex justify-center"
          >
            S'enregistrer
          </h3>
          <div
            class="mt-2 max-w-xl text-sm text-gray-500 grid justify-items-center"
          >
            <!-- Username -->
            <div class="mb-3 w-80">
              <label class="inline-block mb-2">Username</label>
              <input
                type="username"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter a username"
                v-model="state.username"
              />
              <span v-if="v$.username.$error">
                {{ v$.username.$errors[0].$message }}
              </span>
            </div>
            <!-- Email -->
            <div class="mb-3 w-80">
              <label class="inline-block mb-2">Email</label>
              <input
                type="text"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email"
                v-model="state.email"
              />
              <span v-if="v$.email.$error">
                {{ v$.email.$errors[0].$message }}
              </span>
            </div>
            <div class="mb-3 w-80">
              <fieldset>
                <legend class="">Choisir un(des) role(s)</legend>
                <div>
                  <label class="inline-block mb-2">Pro</label>
                  <input
                    type="checkbox"
                    value="user"
                    class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                    v-model="state.roles"
                  />
                </div>
                <div>
                  <label class="inline-block mb-2">User</label>
                  <input
                    type="checkbox"
                    value="pro"
                    class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                    v-model="state.roles"
                  />
                </div>
              </fieldset>

              <!-- <option type="select" placeholder="Role" v-model="state.role" />
              <span v-if="v$.role.$error">
                {{ v$.role.$errors[0].$message }}
              </span> -->
            </div>
            {{ state.roles }}
            <!-- Password -->
            <div class="mb-3 w-80">
              <label class="inline-block mb-2">Mot de passe</label>
              <input
                type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password"
                v-model="state.password.password"
              />
              <span v-if="v$.password.password.$error">
                {{ v$.password.password.$errors[0].$message }}
              </span>
            </div>
            <!-- Password confimation -->
            <div class="mb-3 w-80">
              <label class="inline-block mb-2">Confimer le mot de passe</label>
              <input
                type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password"
                v-model="state.password.confirm"
              />
              <span v-if="v$.password.confirm.$error">
                {{ v$.password.confirm.$errors[0].$message }}
              </span>
            </div>
            <button
              type="submit"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700 w-80"
              @click="register"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PublicNav from "@/components/PublicNav.vue";
import useValidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { mapStores } from "pinia";
import { reactive, computed } from "vue";
import { useAuthStore } from "../stores/authStore";

export default {
  name: "Register",
  components: {
    PublicNav,
  },
  setup() {
    const state = reactive({
      username: "",
      email: "",
      roles: [],
      password: {
        password: "",
        confirm: "",
      },
    });
    const rules = computed(() => {
      return {
        username: { required },
        email: { required, email },
        roles: { required },
        password: {
          password: { required, minLength: minLength(6) },
          confirm: { required, sameAs: sameAs(state.password.password) },
        },
      };
    });
    const v$ = useValidate(rules, state);

    const errors = [];

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
    register() {
      console.log("data", this.state.roles);
      this.v$.$validate();
      if (!this.v$.$error && this.state.roles) {
        this.authStore
          .register(this.state)
          .then(() => this.$router.push("/login"))
          .catch((err) => this.errors.push(err.message));
        console.log("ok");
      } else {
        console.log(this.v$.$errors[0].$message);
        alert("not register");
      }
    },
  },
  // computed: {
  //   loggedIn() {
  //     return this.$store.state.auth.status.loggedIn;
  //   },
  // },
  // created() {
  //   if (this.loggedIn) {
  //     this.$router.push("/profile");
  //   }
  // },
  // methods: {
  //   handleLogin(user) {
  //     this.loading = true;

  //     this.$store.dispatch("auth/login", user).then(
  //       () => {
  //         this.$router.push("/profile");
  //       },
  //       (error) => {
  //         this.loading = false;
  //         this.message =
  //           (error.response &&
  //             error.response.data &&
  //             error.response.data.message) ||
  //           error.message ||
  //           error.toString();
  //       }
  //     );
  //   },
  // },
  // created() {
  //   if (this.loggedIn) {
  //     this.$router.push("/profile");
  //   }
  // },
};
</script>

<style></style>
