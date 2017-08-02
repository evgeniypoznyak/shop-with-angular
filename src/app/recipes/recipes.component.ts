import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {


// всегда необходимо сначала инджект при конструкторе, чтобы можно было обращаться к этому свойству в ngOnInit
  constructor() {
  }

  ngOnInit() {

  }


}
