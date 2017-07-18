import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

// всегда необходимо сначала инджект при конструкторе, чтобы можно было обращаться к этому свойству в ngOnInit
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        console.log(this);
        this.selectedRecipe = recipe;
      }
    );
  }

}
