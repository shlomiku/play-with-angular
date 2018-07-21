import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe-item/recipe.object';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('name', 'recipe description', 'http://energy106.ca/wp-content/uploads/2017/11/Junk-Food.jpg'),
    new Recipe('name2', 'recipe description2', 'http://energy106.ca/wp-content/uploads/2017/11/Junk-Food.jpg'),
    new Recipe('name3', 'recipe description4', 'http://energy106.ca/wp-content/uploads/2017/11/Junk-Food.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
