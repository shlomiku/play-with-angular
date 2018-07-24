import { Component, OnInit } from '@angular/core';
import {SelectRecipeService} from '../select-recipe.service';
import {Recipe} from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  selectedRecipe: Recipe = new Recipe('Recipes', 'please select a recipe', '');

  constructor(public recipeService: SelectRecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe( recipe => this.selectedRecipe = recipe );
  }

}
