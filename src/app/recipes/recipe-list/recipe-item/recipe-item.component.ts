import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelected() {
    // КОНТЕКСТ ИМЕННО ЭТОГО ОБЪЕКТА ЧЕРЕЗ THIS ПОЭТОМУ ТУТ ПОНЯТНО ЧТО ЗА ЭЛЕМЕНТ
    this.recipeSelected.emit();
  }

}
