import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule, MatInputModule, MatButtonModule,
  MatPaginatorModule, MatSortModule, MatTableModule,
  MatFormFieldModule, MatMenuModule, MatNativeDateModule,
  MatDatepickerModule, MatCheckboxModule, MatSelectModule,
  MatIconModule, MatDialogModule, MatProgressBarModule,
  MatTooltipModule, MatAutocompleteModule, MatRadioModule,
  MatExpansionModule, MatSlideToggleModule, MatSnackBarModule,
  MatButtonToggleModule, MatCardModule, MatChipsModule,
  MatGridListModule, MatListModule, MatProgressSpinnerModule,
  MatRippleModule, MatSidenavModule, MatSliderModule, MatTabsModule, MatToolbarModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    FlexLayoutModule,

    // BrowserAnimationsModule, BrowserModule,
    MatStepperModule, MatInputModule, MatButtonModule,
    MatPaginatorModule, MatSortModule, MatTableModule,
    MatFormFieldModule, MatMenuModule, MatNativeDateModule,
    MatDatepickerModule, MatCheckboxModule, MatSelectModule,
    MatIconModule, MatDialogModule, MatProgressBarModule,
    MatTooltipModule, MatAutocompleteModule, MatRadioModule,
    MatExpansionModule, MatSlideToggleModule, MatSnackBarModule,

    ReactiveFormsModule, FormsModule, HttpClientModule, FormsModule,

    MatButtonToggleModule, MatCardModule, MatCheckboxModule,
    MatChipsModule, MatGridListModule, MatListModule,
    MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSidenavModule, MatSliderModule, MatTabsModule,
    MatToolbarModule,
  ],
  exports: [
    FlexLayoutModule,
    // BrowserAnimationsModule, BrowserModule,
    MatStepperModule, MatInputModule, MatButtonModule,
    MatPaginatorModule, MatSortModule, MatTableModule,
    MatFormFieldModule, MatMenuModule, MatNativeDateModule,
    MatDatepickerModule, MatCheckboxModule, MatSelectModule,
    MatIconModule, MatDialogModule, MatProgressBarModule,
    MatTooltipModule, MatAutocompleteModule, MatRadioModule,
    MatExpansionModule, MatSlideToggleModule, MatSnackBarModule,

    ReactiveFormsModule, FormsModule, HttpClientModule, FormsModule,

    MatButtonToggleModule, MatCardModule, MatCheckboxModule,
    MatChipsModule, MatGridListModule, MatListModule,
    MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSidenavModule, MatSliderModule, MatTabsModule,
    MatToolbarModule,
  ]
})
export class NgMaterialModule { }
