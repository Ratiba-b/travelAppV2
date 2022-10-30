<template>
  <div>
    <h1>Edition Utilisateur</h1>
    <form @submit.prevent="edit">
      <input type="text" id="user_id" v-model="user.id" hidden />
      <div>
        <label for="user_username">Pseudo</label>
        <input type="text" id="user_username" v-model="user.username" />
      </div>
      <br />
      <div>
        <label for="user_email">Email</label>
        <input type="text" id="user_email" v-model="user.email" />
      </div>
      <!-- <div>
        <label for="user_password">Password</label>
        <input type="text" id="user_password" v-model="user.password" />
      </div> -->
      <div>
        <button type="submit">Modifier</button>
      </div>
    </form>
  </div>
  <div>{{ id }}</div>
</template>

<script>
import { userService } from "@/_services";
export default {
  name: "UserEdit",
  props: ["id"],
  data() {
    return {
      user: {},
    };
  },
  methods: {
    // Envoi a l'API pour modification
    edit() {
      console.log("this.user", this.user);
      userService
        .updateUser(this.user)
        .then((res) => this.$router.push("/admin/users/index"))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    //Recuperation a l'affichage de l'utilisateur
    userService
      .getUser(this.id)
      .then((res) => {
        // 1er data est cote api le deucieme est cote front
        console.log(res);
        this.user = res.data.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style></style>
