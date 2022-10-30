<template>
  <div>
    <h1>Creation d'un utilisateur</h1>
    <p v-if="errors.length">
      <b>Merci de corriger les erreurs suivantes :</b>
      <ul>
        <li v-for="error in errors" :key="error">{{error}}</li>
      </ul>
    </p>
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
                    v-model="user.username"
                  />
                </div>
                <!-- Email -->
                <div class="mb-3 w-80">
                  <label class="inline-block mb-2">Email</label>
                  <input
                    type="email"
                    class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                    placeholder="Enter Email"
                    v-model="user.email"
                  />
                </div>

                <!-- Password -->
                <div class="mb-3 w-80">
                  <label class="inline-block mb-2">Mot de passe</label>
                  <input
                    type="password"
                    class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                    placeholder="Password"
                    v-model="user.password"
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
                    v-model="confirm"
                  />
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
export default {
  name: "UserAdd",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      confirm: "",
      errors: [],
    };
  },
  methods: {
    addUser() {
      this.errors = []
      console.log(this.user, this.confirm);
      if(this.user.password != this.confirm){
        this.errors.push("Les mots de passe doivent être identiques")
      }
      if(this.user.password.length < 6){
        this.errors.push("Le mot de passe doit être superieur à 6 caractères")
      }
      if (this.errors.length == 0){
        userService
        .createUser(this.user)
        .then((res) => this.$router.push("/admin/users/index"))
        .catch((err) => console.log(err));
      }
    
    },
  },
};
</script>

<style></style>
