import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // get values of current form
  @ViewChild('f') slForm: NgForm;
  // prevent memory leak
  subscription: Subscription;
  // if edit mode, then edit item instead of creating new one.
  editMode = false;
  // get index for future use in edit method
  editedItemIndex: number;
  // only for form assign values, and later pass them to onSubmit
  editedItem: Ingredient;

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
    // catch Subject Observable here (with subscription to prevent memory leaks)
    // to make this in shopping list component reachable, so we can pass and edit data here
    this.subscription = this.slService.startEditing.subscribe(
      (index: number) => {

        // make changes for vales here for future needs:
        this.editedItemIndex = index
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      // we passing newIngredient with updated values already
      this.slService.updateIngridient(this.editedItemIndex, newIngredient)
    } else {
      this.slService.addIngredient(newIngredient);
    }
    // this.onClear();
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
