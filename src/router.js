import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomePage from "./pages/HomePage.vue";
import Contacts from "./pages/Contacts.vue";
import About from "./pages/Contacts.vue";
import Portfolio from "./pages/Contacts.vue";

import Page404 from "./pages/Page404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
      meta: { transition: "slide-left" },
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: { transition: "slide-right" },
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
      meta: { transition: "slide-left" },
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
      meta: { transition: "slide-right" },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "page-404",
      component: Page404,
    },
  ],
});

export { router };
