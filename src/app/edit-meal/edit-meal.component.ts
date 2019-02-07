import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Meal } from '../meal.model';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.scss']
})
export class EditMealComponent implements OnInit {

  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();

  constructor() { }

  doneClicked() {
    this.doneClickedSender.emit();
  }

  ngOnInit() {
  }

}
