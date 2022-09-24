<template>
  <!-- Auth Modal -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    id="modal"
    :class="hiddenClass"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div
              class="modal-close cursor-pointer z-50"
              @click="modalVisibility = false"
            >
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition"
                href="#"
                @click.prevent="tab = 'login'"
                :class="{
                  'hover:text-white text-white bg-blue-600': tab === 'login',
                  'hover:text-blue-600': tab === 'register',
                }"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition"
                href="#"
                @click.prevent="tab = 'register'"
                :class="{
                  'hover:text-white text-white bg-blue-600': tab === 'register',
                  'hover:text-blue-600': tab === 'login',
                }"
                >Register</a
              >
            </li>
          </ul>

          <!-- Login Form -->
          <form v-show="tab === 'login'">
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <input
                type="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email"
              />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <input
                type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password"
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
          <!-- Registration Form -->
          <form v-show="tab === 'register'">
            <!-- Name -->
            <div class="mb-3">
              <label class="inline-block mb-2">Name</label>
              <input
                type="text"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Name"
                v-model="form.name"
              />
            </div>
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <input
                type="email"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Enter Email"
                v-model="form.email"
              />
            </div>
            <!-- Age -->
            <div class="mb-3">
              <label class="inline-block mb-2">Age</label>
              <input
                type="number"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                v-model="form.age"
              />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <input
                type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Password"
                v-model="form.password"
              />
            </div>
            <!-- Confirm Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Confirm Password</label>
              <input
                type="password"
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                placeholder="Confirm Password"
                v-model="form.confirmedPassword"
              />
            </div>
            <!-- Country -->
            <div class="mb-3">
              <label class="inline-block mb-2">Country</label>
              <select
                class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
                v-model="form.country"
              >
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Germany">Germany</option>
              </select>
            </div>
            <!-- TOS -->
            <div class="mb-3 pl-6">
              <input
                type="checkbox"
                class="w-4 h-4 float-left -ml-6 mt-1 rounded"
                v-model="form.tos"
              />
              <label class="inline-block">Accept terms of service</label>
            </div>
            <button
              type="submit"
              class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
              @click.prevent="register"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Form, input } from "vee-validate";
import { auth, usersCollection } from "@/includes/firebase";
import { mapState, mapWritableState } from "pinia";
import useModalStore from "@/stores/modal";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Auth",
  // components: {
  //   Form,
  //   input,
  // },
  data() {
    return {
      //tab affiche soit login soit register
      tab: "login",
      form: {
        name: "",
        email: "",
        age: "",
        password: "",
        confirmedPassword: "",
        country: "",
        tos: "",
      },
      regInSubmission: null,
      regRegAlertVariant: "",
      regAlertMsg: "",
    };
  },
  computed: {
    // affcihe ou non la page d'inscription/connexion => voir avec les getters et states qui permettent de changer l'etat de la classe de auth modal du template => le mettre en hidden ou non
    ...mapState(useModalStore, ["hiddenClass"]),
    //modalVisibility est un alias de isOpen pour eviter un conflit de nom et bien savoir a quoi sert isOpen pour chaque composants dans lequel il est utilise
    ...mapWritableState(useModalStore, { modalVisibility: "isOpen" }),
  },

  methods: {
    login() {
      console.log("login");
    },
    async register() {
      console.log(this.form.email);
      let userCred = null;
      try {
        //credentials
        userCred = await auth().createUserWithEmailAndPassword(
          this.form.email,
          this.form.password
        );
        alert("données bien enregistrées");
      } catch (error) {
        alert("pas enregistrées");
      }

      this.regInSubmission = false;
      this.regAlertVariant = "bg-red-500";
      this.regAlertMsg = "An unexpected error occurred. Please try again later";
      return;
    },
  },
};
</script>
