import { defineStore } from "pinia";
import { useHttpStore } from "./http-store";
import router from "@/router";

export const useBlogStore = defineStore("blog", {
  state: () => ({
    articles: [],
    choosenArticle: {},
    picture: null,
    user: localStorage.getItem("userId"),
    token: localStorage.getItem("token"),

    API_URL: "http://localhost:8080",

    // call http store
    http: useHttpStore(),
  }),
  // getters: {
  //   saveRoles(state) {
  //     localStorage.setItem("roles", state.user.roles);
  //   },
  //},

  actions: {
    async sendArticle(article) {
      console.log("Sending article", article);
      await this.http
        .put(`${this.API_URL}/articles`, article)
        .then(this.getArticles())
        .catch((err) => console.log("error", err));
      router.push("/home/blog");
    },

    async getArticles() {
      console.log("user", this.user);
      await this.http
        .get(`${this.API_URL}/articles/`, { data: this.user })
        .then((res) => {
          this.articles = res.data.data;
        })
        .catch((err) => console.log(err));
      // liste de tous mes articles avec toutes les ifnos  ici l'id du chaque article

      console.log("article in blog store", this.articles);
    },

    async showArticle(articleId) {
      console.log("article id", articleId);
      let article_id = articleId;
      const response = await this.http
        .get(`${this.API_URL}/articles/${article_id}`)
        .catch((err) => console.log("err", err));
      console.log("response", response);
      // envoyer une image piur update
      // this.picture = response.data.data.picture;
      this.choosenArticle = {
        article_id: response.data.data.id,
        user_id: response.data.data.user_id,
        title: response.data.data.title,
        location: response.data.data.location,
        description: response.data.data.description,
        pictureURL: `${this.API_URL}/${response.data.data.picture}`,
        picture: response.data.data.picture,
      };

      console.log("this.article", this.choosenArticle);
    },

    async deleteArticle() {
      console.log("delete article");

      await this.http
        .delete(`${this.API_URL}/${this.article_id}`)
        .then(console.log("ok"))
        .catch((err) => console.log(err));
      router.push("/home/blog");
    },
  },
});
