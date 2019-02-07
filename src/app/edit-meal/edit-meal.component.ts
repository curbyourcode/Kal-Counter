import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { Meal } from '../meal.model';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.scss']
})
export class EditMealComponent {

  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();


  doneClicked() {
    this.doneClickedSender.emit();
  }

}
