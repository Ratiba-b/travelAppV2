import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue"),
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
    {
      path: "/add",
      name: "add",
      component: () => import("../components/AddTutorial.vue"),
    },
    {
      path: "/travels",
      name: "travels",
      component: () => import("../views/TravelsList.vue"),
    },
    {
      path: "/edit/travel/:id",
      name: "addTravels",
      component: () => import("../views/EditTravel.vue"),
    },
    {
      path: "/add/travel",
      name: "addTravels",
      component: () => import("../views/AddTravel.vue"),
    },
    {
      path: "/calendar",
      name: "calendar",
      component: () => import("../views/Calendar.vue"),
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

export default router;
