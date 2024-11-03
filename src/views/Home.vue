<script setup>
import { onMounted, ref } from "vue";
import { recipeService } from "../services/api";
import RecipeCard from "../components/RecipeCard.vue";

const recipes = ref([]);

onMounted(async () => {
  const res = await recipeService.getRecipes();
  recipes.value.push(...res);
});
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <RecipeCard v-for="recipe in recipes" :recipe="recipe" />
  </div>
</template>
