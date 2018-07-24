import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe-list/recipe-item/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class SelectRecipeService {
  public selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  setRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
