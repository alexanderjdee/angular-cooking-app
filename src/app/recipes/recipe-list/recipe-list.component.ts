import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe', 'http://pureandapplied.com/preview/wp-content/uploads/2013/05/MyRecipes2.jpg'),
    new Recipe('Another Test Recipe', 'This is another test recipe', 'http://pureandapplied.com/preview/wp-content/uploads/2013/05/MyRecipes2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
