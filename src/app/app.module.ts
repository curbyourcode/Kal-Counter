import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ComponentModule } from './component/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { MealComponent } from './meal/meal.component';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    EditMealComponent,
    AddMealComponent,
    MealComponent
  ],
  imports: [
BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
