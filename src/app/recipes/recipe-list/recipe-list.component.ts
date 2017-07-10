import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ('Name1', 'Description1', 'http://oyakis.com/wp-content/uploads/2015/06/maki-sushi-roll1.png'),
    new Recipe ('Name2', 'Description2', 'http://oyakis.com/wp-content/uploads/2015/06/maki-sushi-roll1.png')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
