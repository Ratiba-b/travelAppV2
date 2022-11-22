<template>
  <div class="h-10 rounded-lg"></div>
  <main class="relative -mt-32">
    <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div>
          <div class="h-20 rounded-lg"></div>

          <h1
            class="text-2xl font-semibold text-gray-900 flex justify-center mb-10"
          >
            Creation d'un utilisateur
          </h1>

          <div class="h-20 rounded-lg"></div>

          <div class="m-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Informations Personnelles
                  </h3>
                  <p class="mt-1 text-sm text-gray-600">
                    Veuillez entrer les informations du client
                  </p>
                </div>
              </div>
              <div class="m-5 md:col-span-2 md:mt-0">
                <form>
                  <div class="overflow-hidden shadow sm:rounded-md">
                    <div class="bg-white px-4 py-5 sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="first-name"
                            class="block text-sm font-medium text-gray-700"
                            >Nom</label
                          >
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            v-model="state.name"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="last-name"
                            class="block text-sm font-medium text-gray-700"
                            >Prénom</label
                          >
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            v-model="state.surname"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="first-name"
                            class="block text-sm font-medium text-gray-700"
                            >Pseudo</label
                          >
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            v-model="state.username"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="last-name"
                            class="block text-sm font-medium text-gray-700"
                            >Email</label
                          >
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            v-model="state.email"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="first-name"
                            class="block text-sm font-medium text-gray-700"
                            >Mot de passe
                          </label>
                          <input
                            type="password"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            v-model="state.password.password"
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="last-name"
                            class="block text-sm font-medium text-gray-700"
                            >Confirmer</label
                          >
                          <input
                            type="password"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            v-model="state.password.confirm"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                      <button
                        type="submit"
                        class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                    <div class="h-10 rounded-lg"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { userService } from "@/_services";
import useValidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { useAuthStore } from "../../../stores/authStore";
import { useNotifStore } from "../../../stores/notifStore";
import { mapStores } from "pinia";
import { reactive, computed } from "vue";

export default {
  name: "UserAdd",

  setup() {
    const storeAuth = useAuthStore();

    const state = reactive({
      username: "",
      email: "",
      roles: ["client"],
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
    successMessage() {
      this.message = "Le client a été ajouté avec succès !";
    },
  },

  data() {
    const storeNotif = useNotifStore();

    return {
      message: "",
      storeNotif,
    };
  },
  methods: {
    addUser() {
      console.log("data", this.state);
      this.v$.$validate();
      if (!this.v$.$error && this.state.roles) {
        this.authStore
          .register(this.state)
          .then((this.storeNotif.successDisplay = true))
          .catch((err) => this.errors.push(err.message));
        // console.log("err", err.data.message);

        this.state = reactive({
          username: "",

          email: "",
          roles: ["client"],
          password: {
            password: "",
            confirm: "",
          },
        });
      } else {
        console.log(this.errors.push(this.v$.$errors[0].$message));
        alert("not register", this.errors);
      }

      // this.errors = []
      // console.log(this.user, this.confirm);
      // if(this.user.password != this.confirm){
      //   this.errors.push("Les mots de passe doivent être identiques")
      // }
      // if(this.user.password.length < 6){
      //   this.errors.push("Le mot de passe doit être superieur à 6 caractères")
      // }
      // if (this.errors.length == 0){
      //   userService
      //   .createUser(this.user)
      //   .then((res) => this.$router.push("/admin/users/index"))
      //   .catch((err) => console.log(err));
      // }
    },
  },
};
</script>

<style></style>
