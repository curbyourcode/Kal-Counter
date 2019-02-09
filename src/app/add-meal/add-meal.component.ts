import { Component, Output, Input, EventEmitter, } from '@angular/core';
import { Meal } from '../meal.model';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent {

  @Input() newMealSender = new EventEmitter();
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();

  addClicked (
    name: string,
    description: string,
    calories: number,
    ) {
      const newMealToAdd: Meal = new Meal (name, description, calories );
      this.newMealSender.emit(newMealToAdd );
    }

}
