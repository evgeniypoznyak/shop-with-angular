import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();
 private recipes: Recipe[] = [
    new Recipe('Sushi Set 1', 'Sushi (すし, 寿司, 鮨) is the Japanese preparation and serving of specially prepared vinegared rice (鮨飯 sushi-meshi) combined with varied ingredients', 'http://oyakis.com/wp-content/uploads/2015/06/maki-sushi-roll1.png'),
    new Recipe('Sushi Set 2', 'Sushi can be prepared with either brown or white rice. It is often prepared with raw seafood, but some common varieties of sushi use cooked', 'http://sushiza.ru/items_img/20160306135230_set_losos.png')
  ];

getRecipes(){
  return this.recipes.slice();
}

}
