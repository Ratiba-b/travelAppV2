<template>
  <div class="bg-white">
    <div class="h-10 rounded-lg"></div>
    <main class="relative -mt-32">
      <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8"
          >
            <div>
              <form
                enctype="multipart/form-data"
                @submit.prevent="updateArticle"
              >
                <div>
                  <input
                    class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    v-model="article.title"
                    :disabled="disabled === 1"
                  />

                  <p class="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis aperiam velit exercitationem harum dolorem ea
                    sed magnam dolores assumenda temporibus ducimus soluta
                    consectetur illum obcaecati cum nisi incidunt, nemo hic.
                  </p>

                  <div
                    class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:gap-y-16 lg:gap-x-8"
                  >
                    <div class="border-t border-gray-200 pt-4">
                      <p class="font-medium text-gray-900">Lorem ipsum dolor</p>
                      <textarea
                        class="w-full mt-4 text-sm text-gray-500"
                        v-model="article.description"
                        :disabled="disabled === 1"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div
                  class="mt-40 grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"
                >
                  <div v-if="disabled === 1">
                    <div class="flex flex-row-reverse mb-10">
                      <button
                        class="ml-5 inline-flex items-start justify-start rounded-md border border-transparent bg-pink-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:rose-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 sm:w-auto"
                        @click="deleteArticle"
                      >
                        Supprimer
                      </button>
                      <button
                        class="inline-flex items-start justify-start rounded-md border border-transparent bg-pink-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:rose-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 sm:w-auto"
                        @click="disabled = (disabled + 1) % 2"
                      >
                        Modifier
                      </button>
                    </div>
                    <!-- <img :src="article.picture" class="rounded-lg bg-gray-100" /> -->
                  </div>
                  <div v-else>
                    <div class="flex flex-row-reverse mb-10">
                      <button
                        class="inline-flex items-start justify-start rounded-md border border-transparent bg-pink-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:rose-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 sm:w-auto"
                        @click="disabled = (disabled + 1) % 2"
                      >
                        Annuler
                      </button>
                      <button
                        type="submit"
                        class="inline-flex items-start justify-start rounded-md border border-transparent bg-pink-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:rose-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 sm:w-auto"
                      >
                        Enregistrer
                      </button>
                      <input
                        name="picture"
                        type="file"
                        ref="file"
                        @change="selectFile"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <img :src="article.pictureURL" class="rounded-lg bg-gray-100" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Axios from "../../../_services/caller.service";
import { useAuthStore } from "../../../stores/authStore";
import { useBlogStore } from "../../../stores/blogStore";
import { mapStores } from "pinia";
import { useHttpStore } from "../../../stores/http-store";

export default {
  data() {
    const storeAuth = useAuthStore();
    const features = [
      // { name: "Origin", description: "Designed by Good Goods, Inc." },
      // {
      //   name: "Material",
      //   description:
      //     "Solid walnut base with rare earth magnets and powder coated steel card cover",
      // },
      // { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
      // {
      //   name: "Finish",
      //   description: "Hand sanded and finished with natural oil",
      // },
      // { name: "Includes", description: "Wood card tray and 3 refill packs" },
      // {
      //   name: "Considerations",
      //   description:
      //     "Made from natural materials. Grain and color vary with each item.",
      // },
    ];
    return {
      features,
      article: {},
      disabled: 1,
      article_id: this.$route.params.id,
      picture: "",
      token: storeAuth.token,
    };
  },

  async created() {
    console.log("disabled", this.disabled);
    let article_id = this.$route.params.id;
    this.blogStore
      .showArticle(article_id)
      .then(() => {
        this.article = this.blogStore.choosenArticle;
      })
      .catch((err) => console.log("err", err));

    console.log("created article", this.article);
  },
  computed: {
    ...mapStores(useBlogStore, useHttpStore),
  },
  methods: {
    selectFile() {
      this.picture = this.$refs.file.files[0];
      console.log("pic", this.picture);
    },
    async updateArticle() {
      console.log("picture", this.picture);
      console.log("article", this.article);

      const formData = new FormData();

      formData.append("user_id", this.article.user_id);
      formData.append("title", this.article.title);
      formData.append("location", this.article.location);
      formData.append("description", this.article.description);
      if (!this.picture) {
        formData.append("picture", this.blogStore.choosenArticle.picture);
      } else {
        formData.append("picture", this.picture);
      }

      console.log(formData);

      await Axios.patch("/articles/" + this.article_id, formData)
        .then(this.blogStore.getArticles())
        .catch((err) => console.log(err));
      this.disabled = 1;
      // this.$router.push("/admin/cocktails/index");
    },

    async deleteArticle() {
      console.log("delete article");

      await Axios.delete(`http://localhost:8080/articles/${this.article_id}`)
        .then(this.blogStore.getArticles())
        .catch((err) => console.log(err));
      this.$router.push("/home/blog");
    },
  },
};
</script>
