import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe ('Sushi Set 1', 'Sushi (すし, 寿司, 鮨) is the Japanese preparation and serving of specially prepared vinegared rice (鮨飯 sushi-meshi) combined with varied ingredients (ネタ neta) such as chiefly seafood (often uncooked), vegetables, and occasionally tropical fruits. Styles of sushi and its presentation vary widely, but the key ingredient in all cases is the sushi rice, also referred to as shari (しゃり), or sumeshi (酢飯).', 'http://oyakis.com/wp-content/uploads/2015/06/maki-sushi-roll1.png'),
    new Recipe ('Sushi Set 2', 'Sushi can be prepared with either brown or white rice. It is often prepared with raw seafood, but some common varieties of sushi use cooked ingredients, and many other sorts are vegetarian. Sushi is often served with pickled ginger, wasabi, and soy sauce. Daikon radish is popular as a garnish.', 'http://sushiza.ru/items_img/20160306135230_set_losos.png')
  ];

  constructor() {
  }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
