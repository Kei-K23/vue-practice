<script setup>
defineProps(["recipe"]);
</script>

<template>
  <div
    class="card border border-neutral-700 hover:shadow-lg hover:shadow-indigo-500 transition-shadow duration-300 overflow-hidden"
  >
    <img
      :src="recipe.image"
      :alt="recipe.title"
      class="w-full h-48 object-cover"
    />
    <div class="p-4">
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-semibold">{{ recipe.title }}</h3>
        <button class="text-2xl">♥</button>
      </div>
      <div class="mt-2 flex items-center text-sm text-gray-500">
        <span>🕒 {{ recipe.readyInMinutes }}min</span>
        <span class="mx-2">•</span>
        <span>👥 {{ recipe.servings }} servings</span>
      </div>
      <RouterLink
        :to="{ name: 'recipe-details', params: { id: recipe.id } }"
        class="btn btn-sm btn-primary mt-4"
      >
        View Recipe
      </RouterLink>
    </div>
  </div>
</template>
