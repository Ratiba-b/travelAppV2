<template>
  <div class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <router-link to="/" class="text-white font-bold uppercase text-2xl mr-8">
        Travelapp
      </router-link>
      <div class="flex flex-grow items-center">
        <ul class="flex flex-row mt-1">
          <li>
            <router-link to="/login" class="px-2 text-white"
              >Se connecter</router-link
            >
          </li>
          <li>
            <router-link to="/register" class="px-2 text-white">
              Register
            </router-link>
          </li>

          <li>
            <router-link to="/about" class="px-2 text-white"
              >A propos</router-link
            >
          </li>
          <li>
            <router-link to="/contact" class="px-2 text-white"
              >Contact</router-link
            >
          </li>
          <!-- <li v-if="showModeratorBoard">
            <router-link to="/pro" class="px-2 text-white">pro</router-link>
          </li>
          <li v-if="showAdminBoard">
            <router-link to="/admin" class="px-2 text-white"
              >Contact</router-link
            >
          </li>
          <li>
            <router-link to="/user" class="px-2 text-white">User</router-link>
          </li> -->
        </ul>
      </div>

      <!-- <div v-if="currentUser">
        <li>
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li>
          <a class="nav-link" @click.prevent="logOut"> LogOut </a>
        </li>
      </div> -->
    </nav>
  </div>
</template>

<script>
import { userService } from "@/_services";
export default {
  name: "PublicNav",

  // computed: {
  //   currentUser() {},
  // },
};
</script>

<style></style>
