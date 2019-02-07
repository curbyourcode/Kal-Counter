import { Component, Input } from '@angular/core';
import { Meal } from '../meal.model';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent {

  @Input() meal: Meal;

}
