import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Sushi Set 1',
      'Sushi (すし, 寿司, 鮨) is the Japanese preparation and serving of specially prepared vinegared rice ' +
      '(鮨飯 sushi-meshi) combined with varied ingredients (ネタ neta) such as chiefly seafood (often uncooked), ' +
      'vegetables, and occasionally tropical fruits. Styles of sushi and its presentation vary widely, but the key ' +
      'ingredient in all cases is the sushi rice, also referred to as shari (しゃり), or sumeshi (酢飯).',
      'http://oyakis.com/wp-content/uploads/2015/06/maki-sushi-roll1.png',
      [
        new Ingredient('Rice', 1),
        new Ingredient('Fish', 2),
        new Ingredient('Avocado', 1)
      ]),
    new Recipe(
      'Sushi Set 2',
      'Sushi can be prepared with either brown or white rice. It is often prepared with raw seafood, but some common ' +
      'varieties of sushi use cooked ingredients, and many other sorts are vegetarian. Sushi is often served with ' +
      'pickled ginger, wasabi, and soy sauce. Daikon radish is popular as a garnish.',
      'http://sushiza.ru/items_img/20160306135230_set_losos.png',
      [
        new Ingredient('Rice', 2),
        new Ingredient('Fish', 1),
        new Ingredient('Avocado', 1),
        new Ingredient('Wasabi', 2)
      ])
  ];

  constructor(private slService: ShoppingListService, private router: Router, private route: ActivatedRoute) {

  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

// transferring to shopping list service, to get access shopping list.
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
