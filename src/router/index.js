import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Dynamic from "../views/Dynamic.vue";
import Travels from "../views/Travels.vue";
import AddTravels from "../views/AddTravels.vue";
import Step2AddTravel from "../components/travels/Step2AddTravel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/dynamic/:id",
      name: "dynamic",
      component: () => import("../views/Dynamic.vue"),
      props: true,
    },
    {
      path: "/travels",
      name: "travels",
      component: () => import("../views/Travels.vue"),
    },
    {
      path: "/travels/add",
      name: "addTravels",
      component: () => import("../views/AddTravels.vue"),
    },

    {
      path: "/travels/add/step2",
      name: "Step2AddTravel",
      component: () => import("../components/travels/Step2AddTravel.vue"),
    },
    {
      path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("../components/TutorialsList.vue"),
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
  ],
});

export default router;
