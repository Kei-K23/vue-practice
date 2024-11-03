<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <RouterLink to="/" class="text-2xl font-bold text-primary">
          Food Hub 🍛
        </RouterLink>
        <div class="flex space-x-4">
          <RouterLink
            to="/"
            class="text-gray-300 hover:text-primary transition-colors"
            active-class="text-indigo-400"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/favorites"
            class="text-gray-300 hover:text-primary transition-colors"
            active-class="text-indigo-400"
          >
            Favorites
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
