import { recipes } from "./recipes-data";

export const recipeService = {
  async getRecipes() {
    return Promise.resolve(recipes);
  },
  getRecipeById(id) {
    return recipes.filter((recipe) => recipe.id === Number(id))[0];
  },
};
