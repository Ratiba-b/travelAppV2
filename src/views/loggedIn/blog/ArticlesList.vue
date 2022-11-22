<template>
  <div class="bg-white">
    <div class="h-10 rounded-lg"></div>
    <main class="relative -mt-32">
      <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div
            class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <div class="m">
              <h2 class="sr-only">Articles</h2>

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
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Axios from "axios";
import { useAuthStore } from "../../../stores/authStore";
import { useBlogStore } from "../../../stores/blogStore";
import { mapStores } from "pinia";
import { ref } from "vue";

export default {
  setup() {
    const blogStore = useBlogStore();
    const articles = ref([]);
    const id = localStorage.getItem("userId");
    const list = ref([]);

    //recup la liste de tous les article du user i

    const getArticles = async () => {
      console.log("user", id);
      await blogStore.getArticles(id);
      articles.value = blogStore.articles;
      console.log("article", articles.value);

      for (let i = 0; i < articles.value.length; i++) {
        console.log(articles.value[i]);

        list.value.push({
          id: articles.value[i].id,
          name: articles.value[i].title,
          href: `/home/article/${articles.value[i].id}`,
          price: articles.value[i].location,
          imageSrc: `http://localhost:8080/${articles.value[i].picture}`,
        });
      }

      console.log("article", list.value);
    };

    getArticles();

    return {
      articles,
      list,
    };
  },
  data() {
    // const id = Math.random();
    // const list = [];
    // const authStore = useAuthStore();
    // return {
    //   list,
    //   articles: {},
    //   authStore,
    //   user: "",
    //   token: authStore.token,
    // };
  },
  async created() {
    // this.user = this.authStore.user.id;
    // console.log("created", this.user);
    // this.getArticles();
    // console.log("blog", this.list);
  },
  computed: {
    // ...mapStores(useBlogStore),
  },
  methods: {
    // async getArticles() {
    //   console.log("user", this.user);
    //   this.blogStore
    //     .getArticles()
    //     .catch((err) => console.log("error", err));
    //   this.articles = this.blogStore.articles;
    //   console.log("in articles list", this.blogStore.articles);
    //   console.log("article", this.articles);
    //   for (let i = 0; i < this.articles.length; i++) {
    //     console.log(this.articles[i]);
    //     this.list.push({
    //       id: this.articles[i].id,
    //       name: this.articles[i].title,
    //       href: `/home/article/${this.articles[i].id}`,
    //       price: this.articles[i].location,
    //       imageSrc: `http://localhost:8080/${this.articles[i].picture}`,
    //     });
    //   }
    // },
  },
};
</script>

<style></style>
