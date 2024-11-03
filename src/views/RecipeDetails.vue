<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { recipeService } from "../services/api";

const route = useRoute();
const recipe = computed(() => {
  return recipeService.getRecipeById(route.params.id);
});
</script>

<template>
  <div v-if="recipe" class="max-w-4xl mx-auto">
    <div class="rounded-xl shadow-md overflow-hidden border border-neutral-700">
      <img
        :src="recipe.image"
        :alt="recipe.title"
        class="w-full h-72 object-cover"
      />
      <div class="p-6">
        <div class="flex items-center justify-between">
          <h1 class="text-3xl font-bold">{{ recipe.title }}</h1>
          <button class="text-3xl">♥</button>
        </div>

        <div class="mt-4 flex items-center space-x-4 text-gray-300">
          <span>🕒 {{ recipe.readyInMinutes }} minutes</span>
          <span>👥 {{ recipe.servings }} servings</span>
        </div>

        <div class="mt-6">
          <h2 class="text-xl font-semibold mb-2">About</h2>
          <p class="text-gray-300" v-html="recipe.summary"></p>
        </div>

        <div class="mt-6">
          <h2 class="text-xl font-semibold mb-2">Instructions</h2>
          <p class="text-gray-300 whitespace-pre-line">
            {{ recipe.instructions }}
          </p>
        </div>

        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="cuisine in recipe.cuisines"
            :key="cuisine"
            class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {{ cuisine }}
          </span>
          <span
            v-for="diet in recipe.diets"
            :key="diet"
            class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {{ diet }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center text-gray-500">Recipe not found</div>
</template>
