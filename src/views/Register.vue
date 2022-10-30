<template>
  <publicNav />

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
            <form v-show="tab === 'login'" class="">
              <!-- Username -->
              <div class="mb-3 w-80">
                <label class="inline-block mb-2">Username</label>
                <input
                  type="username"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Enter a username"
                />
              </div>
              <!-- Email -->
              <div class="mb-3 w-80">
                <label class="inline-block mb-2">Email</label>
                <input
                  type="email"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Enter Email"
                />
              </div>
              <div class="mb-3 w-80">
                <label class="inline-block mb-2">Role</label>
                <input
                  type="email"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Enter Email"
                />
              </div>

              <!-- Password -->
              <div class="mb-3 w-80">
                <label class="inline-block mb-2">Mot de passe</label>
                <input
                  type="password"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Password"
                />
              </div>
              <!-- Password confimation -->
              <div class="mb-3 w-80">
                <label class="inline-block mb-2"
                  >Confimer le mot de passe</label
                >
                <input
                  type="password"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700 w-80"
                @click.prevent="login"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PublicNav from "@/components/PublicNav.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Auth",
  components: {
    Form,
    Field,
    ErrorMessage,
    PublicNav,
  },

  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      //tab affiche soit login soit register
      tab: "login",
      form: {
        name: "",
        email: "",
        age: "",
        password: "",
        confirmedPassword: "",
        role: "",
      },
      regInSubmission: null,
      regRegAlertVariant: "",
      regAlertMsg: "",

      loading: false,
      message: "",
      schema,
    };
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
