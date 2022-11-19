<template>
  <div>
    
    <h1>Creation d'un utilisateur</h1>
    <p v-if="errors.length">
      <b>Merci de corriger les erreurs suivantes :</b>
      <ul>
        <li v-for="error in errors" :key="error">{{error}}</li>
      </ul>
    </p>
    <div >
      <span>{{successMessage}}</span>
    </div>
    <main class="pt-20">
      
      <div class="px-4 sm:px-6 lg:px-8 h-56 flex justify-center m-20">
        <div class="bg-white shadow sm:rounded-lg w-96 h-96">
         
          <div class="sm:p-2">
            <div
              class="mt-2 max-w-xl text-sm text-gray-500 grid justify-items-center"
            >
              <form @submit.prevent="addUser">
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
                  <label class="inline-block mb-2"
                    >Confimer le mot de passe</label
                  >
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
                >
                  créer un utilisateur
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { userService } from "@/_services";
import useValidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import {useAuthStore} from "../../../stores/authStore"
import {useNotifStore} from "../../../stores/notifStore"
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
    successMessage(){
      this.message = "Le client a été ajouté avec succès !"
    }
  },

  data() {
    const storeNotif = useNotifStore();

    return {
     message: "",
     storeNotif
    };
  },
  methods: {
    addUser() {
      console.log("data", this.state);
      this.v$.$validate();
      if (!this.v$.$error && this.state.roles) {
        this.authStore
          .register(this.state)
          .then(this.storeNotif.successDisplay = true)
          .catch((err) => this.errors.push(err.message));
        // console.log("err", err.data.message);

        this.state =  reactive({
        
      username: "",
      email: "",
      roles: ["client"],
      password: {
        password: "",
        confirm: "",
      },
    })
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
