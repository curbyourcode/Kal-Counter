import { Component, Output, Input, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Meal } from '../meal.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {

  carlorieIntake = new FormControl();
  @Input() childMealList: Meal [];
  @Output() clickSender = new EventEmitter();
  selectedCompleteness = 'notDone';

  constructor() { }

  ngOnInit() {
  }

  OnChange( optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log( this.selectedCompleteness );
  }

  editButtonEvent (mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

}
