<template>
  <!-- <div>Nombre d'utilisateurs {{ comptage }}</div>
  <div class="flex justify-center">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Pseudo</th>
          <th>Email</th>
          <th>Création</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>

          <td>
            {{ dateFormat[index] }}
          </td>
          <td><button @click="goEdit(user.id)">Edit</button></td>
          <td><button @click="del(index)">delete</button></td>
        </tr>
      </tbody>
    </table>
  </div> -->
  <div class="">
    <main class="ml-5 flex justify-center w-full">
      <div class="py-6">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1
            class="text-2xl font-semibold text-gray-900 flex justify-center mb-10"
          >
            {{ comptage }}
          </h1>
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <!-- Replace with your content -->
          <div class="py-4">
            <div class="px-4 sm:px-6 lg:px-8">
              <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                  <h1 class="text-xl font-semibold text-gray-900">
                    Les voyageurs:
                  </h1>
                  <p class="mt-2 text-sm text-gray-700">
                    A list of all the users in your account including their
                    name, title, email and role.
                  </p>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                  <router-link
                    to="/admin/users/add"
                    class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  >
                    Ajouter un nouveau voyageur
                  </router-link>
                </div>
              </div>
              <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div
                    class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
                  >
                    <div
                      class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
                    >
                      <table class="min-w-full divide-y divide-gray-300">
                        <thead class="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                            >
                              ID
                            </th>
                            <th
                              scope="col"
                              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Pseudo
                            </th>

                            <th
                              scope="col"
                              class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Email
                            </th>
                            <th
                              scope="col"
                              class="relative py-3.5 pl-3 pr-4 sm:pr-6"
                            >
                              <span class="sr-only">Création</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                          <tr v-for="(user, index) in users" :key="user.id">
                            <td
                              class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                            >
                              {{ user.id }}
                            </td>
                            <td
                              class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                            >
                              {{ user.username }}
                            </td>
                            <td
                              class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                            >
                              {{ user.email }}
                            </td>
                            <td
                              class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                            >
                              {{ dateFormat[index] }}
                            </td>

                            <td
                              class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                            >
                              <button @click="goEdit(user.id)">Voir</button>
                            </td>
                            <td
                              class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                            >
                              <button @click="del(index)">delete</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { userService } from "@/_services";
import { accountService } from "@/_services";
export default {
  name: "UserIndex",
  data() {
    return { users: [] };
  },
  mounted() {
    accountService.getToken();
    console.log(accountService.getToken());
    console.log(userService.getAllUsers());
    userService
      .getAllUsers()
      .then((res) => {
        // 1er data est cote api le deucieme est cote front

        this.users = res.data.data;
        console.log(accountService.getToken());
      })
      .catch((err) => console.log(err));
  },
  methods: {
    goEdit(id) {
      console.log(id);
      this.$router.push("/admin/users/edit/" + id);
    },
    del(index) {
      console.log(index);
      console.log("deleteUser id", this.users[index].id);
      userService
        .deleteUser(this.users[index].id)
        .then((res) => this.users.splice(index, 1))
        .catch((err) => console.log(err));
    },
  },
  computed: {
    comptage() {
      return this.users.length == 0
        ? "Aucun utilisateur"
        : `Nombre d'utilisateurs: ${this.users.length}`;
    },
    dateFormat() {
      return this.users.map((u) =>
        u.createdAt.split("T")[0].split("-").reverse().join("/")
      );
    },
  },
};
</script>

<style></style>
