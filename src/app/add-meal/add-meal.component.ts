import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Meal } from '../meal.model';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent implements OnInit {

  @Output() addMealSender = new EventEmitter();

  addClicked (
    name: string,
    description: string,
    calories: number,
    ) {
      const newMealToAdd: Meal = new Meal ( name, description, calories );
      this.addMealSender.emit( newMealToAdd );
    }

    ngOnInit() {

    }

}
