import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "../_helpers/auth-guard";
import { useAuthStore } from "../stores/authStore";
const user = true;
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
          path: "/about", // landing oage
          name: "cocktails",
          component: () => import("../views/public/About.vue"),
        },
        {
          path: "/contact", // landing oage
          name: "contact",
          component: () => import("../views/public/Contact.vue"),
        },
      ],
    },
    {
      // faire rediriger sur /home/dashboard a la connexion
      path: "/home",
      name: "home",
      component: () => import("../views/loggedIn/Layout.vue"),
      children: [
        {
          path: "dashboard", // landing oage
          name: "dashboard",
          component: () => import("../views/loggedIn/Dashboard.vue"),
          beforeEnter: (to, from, next) => {
            if (authGuard() && localStorage.getItem("roles")) {
              next();
            } else {
              console.log("router", to.matched[0].name);
              next("/login");
            }
          },
        },
        {
          path: "users/list", // landing oage
          name: "userIndex",
          component: () =>
            import("../views/loggedIn/UsersForPros/UserIndex.vue"),

          beforeEnter: (to, from, next) => {
            if (
              localStorage
                .getItem("roles")
                .includes("ROLE_PRO", "ROLE_ADMIN") &&
              authGuard()
            ) {
              next();
            } else {
              console.log("router", to.matched[0].name);
              next(to.matched[0].name);
            }
          },
        },
        {
          path: "users/edit/:id(\\d+)", // landing oage
          name: "userEdit",
          component: () =>
            import("../views/loggedIn/UsersForPros/UserEdit.vue"),
          props: true,

          beforeEnter: (to, from, next) => {
            if (
              localStorage
                .getItem("roles")
                .includes("ROLE_PRO", "ROLE_ADMIN") &&
              authGuard()
            ) {
              next();
            } else {
              console.log("router", to.matched[0].name);
              next(to.matched[0].name);
            }
          },
        },
        {
          path: "users/add", // landing oage
          name: "userAdd",
          component: () => import("../views/loggedIn/UsersForPros/UserAdd.vue"),

          beforeEnter: (to, from, next) => {
            if (
              localStorage.getItem("roles").includes("ROLE_PRO", "ROLE_ADMIN")
            ) {
              next();
            } else {
              console.log("router", to.matched[0].name);
              next(to.matched[0].name);
            }
          },
        },
        {
          path: "blog", // landing oage
          name: "ArticlesList",

          component: () => import("../views/loggedIn/blog/ArticlesList.vue"),

          beforeEnter: (to, from, next) => {
            if (
              localStorage.getItem("roles").includes("ROLE_USER", "ROLE_ADMIN")
            ) {
              next();
            } else {
              console.log("router", to.matched[0].name);
              next(to.matched[0].name);
            }
          },
        },

        {
          path: "article/:id", // landing oage
          name: "ArticleIndex",

          component: () => import("../views/loggedIn/blog/Article.vue"),

          beforeEnter: (to, from, next) => {
            if (
              localStorage
                .getItem("roles")
                .includes("ROLE_USER", "ROLE_ADMIN", "ROLE_ADMIN")
            ) {
              next();
            } else {
              console.log("router", to.matched[0].name);
              next(to.matched[0].name);
            }
          },
        },
        {
          path: "article/add", // landing oage
          name: "AddArticle",
          component: () => import("../views/loggedIn/blog/AddArticle.vue"),

          beforeEnter: (to, from, next) => {
            if (
              localStorage
                .getItem("roles")
                .includes("ROLE_USER", "ROLE_ADMIN") &&
              authGuard()
            ) {
              next();
            } else {
              console.log("router", to.matched[0].name);
              next(to.matched[0].name);
            }
          },
        },
        {
          path: "travels/list",
          name: "travels",
          component: () => import("../views/loggedIn/travels/TravelsList.vue"),
        },
        // {
        //   path: "travel/maps/:id",
        //   name: "maps",
        //   component: () => import("../views/loggedIn/travels/TravelMaps.vue"),
        // },
        // {
        //   path: "edit/travel/:id",
        //   name: "addTravels",
        //   component: () => import("../views/loggedIn/travels/EditTravel.vue"),
        // },
        {
          path: "add/travel",
          name: "addTravels",
          component: () => import("../views/loggedIn/travels/AddTravel.vue"),
        },
        {
          path: "add/travel/steps/:id",
          name: "steps",
          component: () => import("../views/loggedIn/travels/AddSteps.vue"),
        },
        {
          path: "calendar/:id",
          name: "Planner",

          component: () => import("../views/loggedIn/planning/Planner.vue"),
        },
        {
          path: "travel/:id",
          name: "Display",
          component: () =>
            import("../views/loggedIn/travels/DisplayOneTravel.vue"),
        },
        {
          path: "profile",
          name: "ProfilePage",
          component: () => import("../views/loggedIn/ProfilePage.vue"),
        },
        {
          path: "/:pathMatch(.*)*",
          redirect: "/home/dashboard",
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
      path: "/:pathMatch(.*)*",
      component: () => import("../views/NotFound.vue"),
    },
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
