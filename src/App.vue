<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/favorite">Favorite</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>
