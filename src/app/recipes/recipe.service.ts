import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel', 'Super-tasty schnitzel', 'https://thecozyapron.com/wp-content/uploads/2012/02/schnitzel_thecozyapron_1.jpg', [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe('Big Fat Burger', 'Thick, juicy, succulent burger', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg', [new Ingredient('Buns', 2), new Ingredient('Meat', 1)])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    //returns copy of recipes array, rather than a reference to this array
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
