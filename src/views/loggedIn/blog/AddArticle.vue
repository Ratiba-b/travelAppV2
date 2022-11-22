<template>
  <div class="h-10 rounded-lg"></div>
  <main class="relative -mt-32">
    <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
      <div class="overflow-hidden rounded-lg bg-white shadow">
        <div class="h-20 rounded-lg"></div>
        <form
          class="m-10 space-6"
          enctype="multipart/form-data"
          @submit.prevent="saveArticle"
        >
          <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                  Nouvel Article
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  accusamus architecto unde dolore inventore nisi necessitatibus
                  commodi, ipsam, corrupti recusandae cupiditate ipsa nemo
                  consectetur omnis fugit magnam, laborum sapiente laboriosam
                </p>
              </div>
              <div class="mt-5 space-y-6 md:col-span-2 md:mt-0">
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company-website"
                      class="block text-sm font-medium text-gray-700"
                      >Titre</label
                    >
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                        placeholder="Premier voyage en Asie"
                        v-model="article.title"
                      />
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company-website"
                      class="block text-sm font-medium text-gray-700"
                      >Destination</label
                    >
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                        placeholder="Kuala Lumpur"
                        v-model="article.location"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <!-- <label for="about" class="block text-sm font-medium text-gray-700"
                >Introduction</label
              > -->

                  <!-- <div class="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                  placeholder="Séjour dépaysant dans ce pays aux paysages plus magnifiques les uns que les autres..."
                  v-model="article.paragraphOne"
                />
              </div> -->
                  <label
                    for="about"
                    class="block text-sm font-medium text-gray-700"
                    >Description</label
                  >
                  <div class="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows="3"
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                      placeholder="Séjour dépaysant dans ce pays aux paysages plus magnifiques les uns que les autres..."
                      v-model="article.description"
                    />
                  </div>
                  <p class="mt-2 text-sm text-gray-500">
                    Garde en souvenir ce précieux voyage
                  </p>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700"
                    >Photo de couverture</label
                  >
                  <div
                    class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                  >
                    <div class="space-y-1 text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          class="relative cursor-pointer rounded-md bg-white font-medium text-pink-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:text-pink-500"
                        >
                          <span>Télécharger un fichier</span>
                          <!-- <input
                        type="file"
                        class="sr-only"
                        @change="selectImage"
                      /> -->
                        </label>
                        <p class="pl-1">ou faites glisser</p>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF jusqu'à 10MB
                      </p>
                    </div>
                    <input
                      name="picture"
                      type="file"
                      ref="file"
                      @change="selectFile"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-10 rounded-lg"></div>
          <div class="flex justify-end">
            <button
              type="button"
              class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Annuler
            </button>
            <button
              type="submit"
              class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Enregistrer
            </button>
          </div>
        </form>
        <div class="h-20 rounded-lg"></div>
      </div>
    </div>
  </main>
</template>

<script>
// import { cocktailService } from "@/_services";
import { watch } from "vue";
import Axios from "axios";
import { useBlogStore } from "../../../stores/blogStore";
import { mapStores } from "pinia";

export default {
  name: "ArticleAdd",
  props: ["id"],
  data() {
    return {
      article: {
        user_id: localStorage.getItem("userId"),
        title: "",
        location: "",
        description: "",
        picture: "",
      },
    };
  },
  setup(props) {
    console.log(props);
    watch(props, (value, old) => {
      console.log("setup()", value.id);
    });
  },
  computed: {
    ...mapStores(useBlogStore),
  },

  methods: {
    selectFile() {
      this.article.picture = this.$refs.file.files[0];
    },
    selectImage(event) {
      console.log(event);
      this.article.picture = event.target.files[0].name;
    },
    async saveArticle() {
      const formData = new FormData();
      formData.append("user_id", this.article.user_id);
      formData.append("title", this.article.title);
      formData.append("location", this.article.location);
      formData.append("description", this.article.description);
      formData.append("picture", this.article.picture);
      console.log("article");

      this.blogStore
        .sendArticle(formData)
        .catch((err) => console.log("error", err));

      // try {
      //   await Axios.put("http://localhost:8080/articles", formData, {
      //     onUploadProgress: (uploadEvent) => {
      //       console.log(
      //         "upload progress " +
      //           Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
      //           "%"
      //       );
      //     },
      //   }).then(this.$router.push("/home/blog"));
      // } catch (err) {
      //   console.log(err);
      // }
    },
    // addCocktail() {
    //   console.log("cocktail add", this.cocktail);
    //   cocktailService
    //     .createCocktail(this.cocktail)
    //     .then((res) => this.$router.push("/admin/cocktails/index"))
    //     .catch((err) => console.log(err));
    // },
  },
};
</script>

<style></style>
