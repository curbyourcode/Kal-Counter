import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Meal } from '../meal.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent  {

  calorieIntake = new FormControl();
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  selectedCompleteness = 'notDone';


  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;

  }

  addButtonHasBeenClicked(newMealFromChild: Meal) {
    this.clickSender.emit(newMealFromChild);

  }

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

}
