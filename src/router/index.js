import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "../_helpers/auth-guard";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "publicLayout",
      component: () => import("../views/public/Layout.vue"),
      children: [
        {
          path: "/",
          name: "Home",
          component: () => import("../views/public/Home.vue"),
        },

        {
          path: "/cocktails", // landing oage
          name: "cocktails",
          component: () => import("../views/public/Cocktails.vue"),
        },
        {
          path: "/contact", // landing oage
          name: "contact",
          component: () => import("../views/public/Contact.vue"),
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/admin/Layout.vue"),

      children: [
        {
          path: "dashboard", // landing oage
          name: "dashboard",
          component: () => import("../views/admin/Dashboard.vue"),
        },
        {
          path: "users/index", // landing oage
          name: "userIndex",
          component: () => import("../views/admin/users/UserIndex.vue"),
        },
        {
          path: "users/edit/:id(\\d+)", // landing oage
          name: "userEdit",
          component: () => import("../views/admin/users/UserEdit.vue"),
          props: true,
        },
        {
          path: "users/add", // landing oage
          name: "userAdd",
          component: () => import("../views/admin/users/UserAdd.vue"),
        },
        {
          path: "todo",
          name: "todo",
          component: () => import("../components/Sidebar.vue"),
        },

        {
          path: "cocktails/index", // landing oage
          name: "cocktailIndex",
          component: () => import("../views/admin/cocktails/CocktailIndex.vue"),
        },
        {
          path: "cocktails/edit/", // landing oage
          name: "cocktailEdit",
          component: () => import("../views/admin/cocktails/CocktailEdit.vue"),
        },
        {
          path: "cocktails/edit/:id", // landing oage
          name: "Article",
          component: () => import("../components/Article.vue"),
        },
        {
          path: "article/upload", // landing oage
          name: "ArticlePicture",
          component: () => import("../views/admin/cocktails/PictureUpload.vue"),
        },
        {
          path: "/user", // landing oage
          name: "user",
          component: () => import("../components/BoardUser.vue"),
        },
        {
          path: "pro", // landing oage
          name: "pro",
          component: () => import("../components/BoardPro.vue"),
        },
        {
          path: "/admin", // landing oage
          name: "admin",
          component: () => import("../components/BoardAdmin.vue"),
        },
        {
          path: "travels",
          name: "travels",
          component: () => import("../views/TravelsList.vue"),
        },
        {
          path: "edit/travel/:id",
          name: "addTravels",
          component: () => import("../views/EditTravel.vue"),
        },
        {
          path: "add/travel",
          name: "addTravels",
          component: () => import("../views/AddTravel.vue"),
        },
        {
          path: "calendar/:id",
          name: "Planner",
          component: () => import("../views/Planner.vue"),
        },

        {
          path: "/:pathMatch(.*)*",
          redirect: "/admin/dashboard",
        },
      ],
    },

    {
      path: "/login", // landing oage
      name: "login",
      component: () => import("../views/Login.vue"),
    },

    {
      path: "/register",
      name: "register",

      component: () => import("../views/Register.vue"),
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("../components/Tutorial.vue"),
    },
    // {
    //   path: "/add",
    //   name: "add",
    //   component: () => import("../components/AddTutorial.vue"),
    // },
    // {
    //   path: "/travels",
    //   name: "travels",
    //   component: () => import("../views/TravelsList.vue"),
    // },
    // {
    //   path: "/edit/travel/:id",
    //   name: "addTravels",
    //   component: () => import("../views/EditTravel.vue"),
    // },
    // {
    //   path: "/add/travel",
    //   name: "addTravels",
    //   component: () => import("../views/AddTravel.vue"),
    // },
    {
      path: "/calendar",
      name: "calendar",
      component: () => import("../components/Agenda.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/NotFound.vue"),
    },
    // {
    //   path: "/travels",
    //   name: "travels",
    //   component: () => import("../views/Travels.vue"),
    // },
    // {
    //   path: "/travels/add",
    //   name: "addTravels",
    //   component: () => import("../views/AddTravels.vue"),
    // },
    // {
    //   path: "/travels/add/step2",
    //   name: "Step2AddTravel",
    //   component: () => import("../components/travels/Step2AddTravel.vue"),
    // },
    // {
    //   path: "/",
    //   alias: "/tutorials",
    //   name: "tutorials",
    //   component: () => import("../components/TutorialsList.vue"),
    // },
    // {
    //   path: "/tutorials/:id",
    //   name: "tutorial-details",
    //   component: () => import("../components/Tutorial.vue"),
    // },
    // {
    //   path: "/add",
    //   name: "add",
    //   component: () => import("../components/AddTutorial.vue"),
    // },
  ],
});

//verouillage de la partie admin(token)
router.beforeEach((to, from, next) => {
  console.log("to.matched[0].name router", to.matched[0].name);
  // bloquer les routes children si pas de token
  if (localStorage.getItem("token")) {
    authGuard();
    console.log("auth guard router", authGuard());
  }

  next();
});
export default router;
