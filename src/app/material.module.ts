import { NgModule } from '@angular/core';
import {
MatNativeDateModule,
MatSnackBarModule,
MatIconModule,
MatButtonModule,
MatTableModule,
MatPaginatorModule,
MatSortModule,
MatTabsModule,
MatCheckboxModule,
MatToolbarModule,
MatCard,
MatCardModule,
MatFormField,
MatFormFieldModule,
MatProgressSpinnerModule,
MatInputModule
} from '@angular/material';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import { MatDialogModule } from '@angular/material';


@NgModule({
  imports: [
  MatTabsModule,
  MatDividerModule,
  MatSliderModule,
  MatSelectModule,
  MatRadioModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatIconModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatPaginatorModule
],
  exports: [
  MatTabsModule,
  MatDividerModule,
  MatSliderModule,
  MatSelectModule,
  MatRadioModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatIconModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatSortModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatTabsModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatPaginatorModule,
  MatDividerModule
],
  declarations: [],
})
export class MaterialModule { }