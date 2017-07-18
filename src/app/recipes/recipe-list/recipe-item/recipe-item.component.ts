import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers: [RecipeService]
})
export class RecipeItemComponent implements OnInit {
  // binding in *ngFor loop: [recipe] = resEl
  @Input() recipe: Recipe;


  constructor( private recipeService: RecipeService ) {
  }

  ngOnInit() {
  }

  onSelected() {
        // КОНТЕКСТ ИМЕННО ЭТОГО ОБЪЕКТА ЧЕРЕЗ THIS ПОЭТОМУ ТУТ ПОНЯТНО ЧТО ЗА ЭЛЕМЕНТ
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
