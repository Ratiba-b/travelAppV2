<template>
  <publicNav />

  <main class="pt-20">
    <div class="px-4 sm:px-6 lg:px-8 h-56 flex justify-center m-20">
      <div class="bg-white shadow sm:rounded-lg w-96 h-64">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Se connecter
          </h3>
          <div class="mt-2 max-w-xl text-sm text-gray-500">
            <form class="items-center" @submit.prevent="login">
              <!-- Email -->
              <div class="mb-3">
                <label class="inline-block mb-2">email</label>
                <input
                  type="text"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Entrez votre pseudo"
                  v-model="user.username"
                />
              </div>
              <!-- Password -->
              <div class="mb-3">
                <label class="inline-block mb-2">Mot de passe</label>
                <input
                  type="password"
                  class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                  placeholder="Mot de passe"
                  v-model="user.password"
                />
              </div>
              <button
                type="submit"
                class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
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
import { useAuthStore } from "../stores/authStore";
import { accountService } from "../_services/account.service";
import { mapWritableState, mapState, mapActions } from "pinia";

// import { useAuthStore } from "../stores/auth.module";

// import { reactive, computed, watch } from "vue";
import PublicNav from "@/components/PublicNav.vue";
// import { Form, input, ErrorMessage } from "vee-validate";
// import * as yup from "yup";

const storeAuth = useAuthStore();
export default {
  name: "Auth",
  components: {
    // Form,
    // Field,
    // ErrorMessage,
    PublicNav,
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
      user: { username: "", password: "" },

      //tab affiche soit login soit register
      // tab: "login",
      // form: {
      //   username: "",

      //   password: "",
      // },
      // regInSubmission: null,
      // regRegAlertVariant: "",
      // regAlertMsg: "",

      // loading: false,
      // message: "",
      // schema,
      // validationError: {
      //   username: false,
      // },
    };
  },
  computed: {
    ...mapState(useAuthStore, ["getUser"]),

    ...mapStores(useAuthStore),
    ...mapWritableState(useAuthStore, ["user"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["addUser"]),

    login() {
      try {
        storeAuth.login(this.user.username, this.user.password);
        if (storeAuth.user.roles.includes("ROLE_PRO")) {
          console.log(" You're a pro welcome", storeAuth.user.roles);
          this.$router.push("/admin/dashboard");
        } else {
          console.log("not a pro", storeAuth.user.roles);
          this.$router.push("/login");
        }
      } catch (err) {
        this.$emit("error", {
          message: "invalid username or password",
          error: err,
          type: "danger",
        });
      }

      // console.log(this.user.username, this.user.password);
      // storeAuth
      //   .login(this.user.username, this.user.password)
      //   .then(this.$router.push("/admin/dashboard"))
      //   .catch((err) => {
      //     this.$emit("error", {
      //       message: "invalid username or password",
      //       error: err,
      //       type: "danger",
      //     });
      //   });
      // if (storeAuth.user.roles.includes("ROLE_PRO")) {
      //   console.log(" You're a pro welcome", storeAuth.user.roles);
      //   this.$router.push("/admin/dashboard");
      // } else {
      //   console.log("not a pro", storeAuth.user.roles);
      //   this.$router.push("/login");
      // }
      // storeAuth
      //   .login(this.username, this.password)
      //   .then(console.log("login successfully"))
      //   .catch((err) => console.log(err));

      // this.authStore.login(this.username, this.password).catch((err) =>
      //   console.error("err", {
      //     message: "Invalid email or password",
      //   })
      // );

      /********************** auth ***********************************************/
      // let user = [];
      //       accountService
      //         .login(this.user)
      //         .then((res) => {
      //           console.log(this.user);
      //           accountService.saveToken(res.data.access_token);
      //           console.log("token", res.data);
      //           user = {
      //             id: res.data.id,
      //             username: res.data.username,
      //             email: res.data.email,
      //             roles: res.data.roles,
      //           };
      //           storeAuth.addUser(user);

      //           console.log("storeAuth getUser", storeAuth.getUser);
      //           this.$router.push("/admin/dashboard");
      //         })
      //         .catch((err) => console.log(err));
      /********************** auth ***********************************************/

      // fetch("http://localhost:8080/auth/login", {
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   method: "POST",
      //   body: JSON.stringify(this.user),
      // })
      //   .then((blob) => blob.json())
      //   .then((data) => {
      //     console.log(data);
      //     localStorage.setItem("token", data.access_token);
      //     this.$router.push("/admin/dashboard");
      //   })
      //   .catch((err) => console.log(err));
    },
  },

  // computed: {
  //   ...mapStores(useAuthStore),
  // },

  // methods: {
  //   login() {
  //     console.log(this.form);
  //     fetch("http://localhost:3000/api/auth/login", {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //       body: JSON.stringify(this.form),
  //     })
  //       .then((blob) => blob.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.log(error));
  //     // this.authStore.login(this.username, this.password).catch((error) =>
  //     //   this.$emit("error", {
  //     //     message: "Email ou mdp invalide",
  //     //     type: "danger",
  //     //   })
  //     // );
  //   },
  //   // login(values) {
  //   //   alert(JSON.stringify(values, null, 2));
  //   // },
  // },
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
