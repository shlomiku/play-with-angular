import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { HeaderComponent } from './header/header.component';
import {SelectRecipeService} from './recipes/select-recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingComponent,
    RecipeDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SelectRecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
