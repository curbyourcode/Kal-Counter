import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ComponentModule } from './component/component.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { MealComponent } from './meal/meal.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { CompletenessPipe } from './completeness.pipe';
import { FooterComponent } from './footer/footer.component';

import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { FacebookLikeComponent} from './facebook-like/facebook-like.component';
// import { SpinnerComponent } from './spinner/spinner.component';
 import { SpinnerModule } from './spinner/spinner.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    EditMealComponent,
    AddMealComponent,
    MealComponent,
    MealListComponent,
    CompletenessPipe,
    FooterComponent,
    FacebookLikeComponent,
    // SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentModule,
    FlexLayoutModule,
    JwSocialButtonsModule,
    SpinnerModule


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
