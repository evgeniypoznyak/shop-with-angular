import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngridients(){
    return this.ingredients.slice();
  }

  addIngridient(ingridient: Ingredient){
    this.ingredients.push(ingridient);
  }
}
