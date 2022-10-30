<template>
  <div class="w-5/6 ml-40">
    <div class="w-5/6"></div>
    <form
      class="space-y-6 pl-40"
      enctype="multipart/form-data"
      @submit.prevent="sendFile"
    >
      <div
        v-if="message"
        :class="`message ${error ? 'is-danger' : 'is-success'}`"
      >
        <div class="message-body">{{ message }}</div>
      </div>
      <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6 ml-40">
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
                      <input
                        type="file"
                        class="sr-only"
                        @change="selectImage"
                      />
                    </label>
                    <p class="pl-1">ou faites glisser</p>
                  </div>
                  <p class="text-xs text-gray-500">
                    PNG, JPG, GIF jusqu'à 10MB
                  </p>
                </div>
                <input type="file" ref="file" @change="selectFile" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          Enregistrer
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { cocktailService } from "@/_services";
import { watch } from "vue";
import Axios from "axios";
export default {
  name: "CocktailEdit",
  props: ["id"],
  data() {
    return {
      picture: "",
      message: "",
      error: false,
    };
  },
  setup(props) {
    console.log(props);
    watch(props, (value, old) => {
      console.log("setup()", value.id);
    });
  },

  methods: {
    selectFile() {
      const picture = this.$refs.file.files[0];
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      const MAX_SIZE = 200000;
      const tooLarge = picture.size > MAX_SIZE;

      if (allowedTypes.includes(picture.type) && !tooLarge) {
        this.picture = picture;
        console.log("pic", this.picture);
        this.error = false;
        this.message = "";
      } else {
        this.error = true;
        this.message = tooLarge
          ? `Size is too large max is ${MAX_SIZE / 1000}kb`
          : "Seulement les images sont autorisées";
      }
    },
    selectImage(event) {
      console.log(event);
      this.article.picture = event.target.files[0].name;
    },
    async sendFile() {
      console.log("save pic");

      try {
        const formData = new FormData();
        formData.append("picture", this.picture);
        await Axios.put("http://localhost:8080/article/upload", formData);
        this.message = "Image enregistrée";
        this.picture = "";
        this.error = false;
      } catch (err) {
        this.message = err.response.data.error;
        this.error = true;
      }
    },
    addCocktail() {
      console.log("cocktail add", this.cocktail);
      cocktailService
        .createCocktail(this.cocktail)
        .then((res) => this.$router.push("/admin/cocktails/index"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
