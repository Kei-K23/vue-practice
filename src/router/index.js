import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Favorite from "../views/Favorite.vue";
import RecipeDetails from "../views/RecipeDetails.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/favorites", component: Favorite },
  { path: "/recipes/:id", name: "recipe-details", component: RecipeDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
