import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  /*private recipes: Recipe[] = [
    new Recipe('First recipe',
      'A Gingerbread recipe',
      'https://i2.wp.com/www.sugarspunrun.com/wp-content/uploads/2017/12/Gingerbread-Cookie-Recipe-1-of-1-8.jpg',
      [
        new Ingredient('Eggs', 10),
        new Ingredient('Bread', 1)
      ]),
    new Recipe('Second recipe',
      'A chicken recipe',
      'https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe.jpg',
      [
        new Ingredient('Meat', 5),
        new Ingredient('Lime', 1)
      ])
  ];*/
  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
