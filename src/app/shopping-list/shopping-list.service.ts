import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    // get a copy of array
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    // pushing a new element to the a copy
    this.ingredients.push(ingredient);
    // throw a copy of new array in event and called this event
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // pushing selected ingredients to current array of ingredients
    this.ingredients.push(...ingredients);
    // trowing a copy and emit event in shopping-list.component.ts, were we assign current array to ingredients shopping array.
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
