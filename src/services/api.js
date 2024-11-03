import { recipes } from "./recipes-data";

export const recipeService = {
  async getRecipes() {
    return Promise.resolve(recipes);
  },
};
