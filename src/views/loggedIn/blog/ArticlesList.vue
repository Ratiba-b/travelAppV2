<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">items</h2>

      <div
        class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <router-link v-for="item in list" :to="item.href" class="group">
          <div
            class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
          >
            <img
              :src="item.imageSrc"
              :alt="item.imageAlt"
              class="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ item.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">
            {{ item.price }}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { useAuthStore } from "../../../stores/authStore";
import { useBlogStore } from "../../../stores/blogStore";
import { mapStores } from "pinia";

export default {
  data() {
    const id = Math.random();
    const list = [];
    const authStore = useAuthStore();
    return {
      list,
      articles: {},
      authStore,
      user: "",
      token: authStore.token,
    };
  },
  async created() {
    this.user = this.authStore.user.id;
    console.log("created", this.user);
    this.getArticles();
    console.log("blog", this.list);
  },
  computed: {
    ...mapStores(useBlogStore),
  },
  methods: {
    async getArticles() {
      console.log("user", this.user);
      // const response = await Axios.get("http://localhost:8080/articles/", {
      //   id: this.user,
      //   headers: { "x-access-token": this.token },
      // });

      // console.log("response", response.data);

      // this.articles = response.data.data;
      this.blogStore
        .getArticles()

        .catch((err) => console.log("error", err));
      this.articles = this.blogStore.articles;
      console.log("in articles list", this.blogStore.articles);

      console.log("article", this.articles);
      for (let i = 0; i < this.articles.length; i++) {
        console.log(this.articles[i]);

        this.list.push({
          id: this.articles[i].id,
          name: this.articles[i].title,
          href: `/home/article/${this.articles[i].id}`,
          price: this.articles[i].location,
          imageSrc: `http://localhost:8080/${this.articles[i].picture}`,
        });
      }
    },
  },
};
// import { cocktailService } from "@/_services";
// export default {
//   name: "cocktailIndex",
//   data() {
//     return { cocktails: [] };
//   },
//   methods: {
//     goEdit(id) {
//       console.log(id);
//       this.$router.push("/admin/cocktails/edit/" + id);
//     },
//     del(index) {
//       console.log(index);
//       console.log("deletecocktail id", this.cocktails[index].id);
//       cocktailService
//         .deleteCocktail(this.cocktails[index].id)
//         .then((res) => this.cocktails.splice(index, 1))
//         .catch((err) => console.log(err));
//     },
//   },
//   mounted() {
//     cocktailService
//       .getAllCocktails()
//       .then((res) => {
//         // 1er data est cote api le deucieme est cote front
//         console.log(res.data.data);
//         this.cocktails = res.data.data;
//       })
//       .catch((err) => console.log(err));
//   },

//   computed: {
//     comptage() {
//       return this.cocktails.length == 0
//         ? "Aucun utilisateur"
//         : `Nombre d'utilisateur: ${this.cocktails.length}`;
//     },
//     dateFormat() {
//       return this.cocktails.map((u) =>
//         u.createdAt.split("T")[0].split("-").reverse().join("/")
//       );
//     },
//   },
//};
</script>

<style></style>

<!-- COCKTAILS  -->
<!-- <div>
  <h1>Liste des cocktails</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nom</th>
        <th>Recette</th>
        <th>description</th>
        <th>Création</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(cocktail, index) in cocktails" :key="cocktail.id">
        <td>{{ cocktail.id }}</td>
        <td>{{ cocktail.nom }}</td>
        <td>{{ cocktail.recette }}</td>
        <td>{{ cocktail.description }}</td>

        <td>
          {{ dateFormat[index] }}
        </td>
        <td><button @click="goEdit(cocktail.id)">Edit</button></td>
        <td><button @click="del(index)">delete</button></td>
      </tr>
    </tbody>
  </table>
</div> -->
