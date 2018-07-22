import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe-item/recipe.object';
import {SelectRecipeService} from '../select-recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('name', 'recipe description', 'http://energy106.ca/wp-content/uploads/2017/11/Junk-Food.jpg'),
    new Recipe('name2', 'recipe description2', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/6/0/FN_snapchat_coachella_wingman%20.jpeg.rend.hgtvcom.616.462.suffix/1523633513292.jpeg'),
    new Recipe('name3', 'recipe description4', 'https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg'),
  ];

  constructor(private selectRecipeService: SelectRecipeService) { }

  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe) {
    this.selectRecipeService.setRecipe(recipe);
  }
}
