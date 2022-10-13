<template>
  <app-header />

  <main class="pt-20">
    <div class="px-4 sm:px-6 lg:px-8 h-56 flex justify-center m-20">
      <div class="bg-white shadow sm:rounded-lg w-96 h-64">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Se connecter
          </h3>
          <div class="mt-2 max-w-xl text-sm text-gray-500">
            <form v-show="tab === 'login'" class="items-center">
              <!-- Email -->
              <div class="mb-3">
                <label class="inline-block mb-2">Pseudo</label>
                <input
                  type="text"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Entrez votre pseudo"
                  v-model="form.username"
                />
              </div>
              <!-- Password -->
              <div class="mb-3">
                <label class="inline-block mb-2">Mot de passe</label>
                <input
                  type="password"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Mot de passe"
                  v-model="form.password"
                />
              </div>
              <button
                type="submit"
                class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
                @click.prevent="login"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapStores } from "pinia";
import { useAuthStore } from "../store/auth.module";

import { reactive, computed, watch } from "vue";
import AppHeader from "@/components/Header.vue";
// import { Form, input, ErrorMessage } from "vee-validate";
// import * as yup from "yup";

export default {
  name: "Auth",
  components: {
    // Form,
    // Field,
    // ErrorMessage,
    AppHeader,
  },
  // setup(props, { emit }) {
  //   const { meta: formMeta, handleSubmit } = useForm();
  //   const emailField = reactive(useField("email", "email"));
  //   const passwordField = reactive(useField("password", "password"));

  //   const confirmPasswordValidator = computed(() => {
  //     return !props.isLogin ? "confirmPassword:password" : () => true;
  //   });
  //   const confirmPasswordField = reactive(
  //     useField("confirmPassword", "confirmPasswordValidator")
  //   );
  // },
  data() {
    // const schema = {
    //   password(value) {
    //     if (value && value.trim() && value.length >= 6) {
    //       return true;
    //     }
    //   },
    //   username(value) {
    //     if (!value && !value.trim()) {
    //       return "Veuillez indiquer votre pseudo";
    //     }
    //   },
    // };

    return {
      //tab affiche soit login soit register
      tab: "login",
      form: {
        username: "",

        password: "",
      },
      regInSubmission: null,
      regRegAlertVariant: "",
      regAlertMsg: "",

      loading: false,
      message: "",
      // schema,
      // validationError: {
      //   username: false,
      // },
    };
  },

  computed: {
    ...mapStores(useAuthStore),
  },

  methods: {
    login() {
      console.log(this.form);
      fetch("http://localhost:3000/api/auth/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(this.form),
      })
        .then((blob) => blob.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      // this.authStore.login(this.username, this.password).catch((error) =>
      //   this.$emit("error", {
      //     message: "Email ou mdp invalide",
      //     type: "danger",
      //   })
      // );
    },
    // login(values) {
    //   alert(JSON.stringify(values, null, 2));
    // },
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
