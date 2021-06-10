import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentComplainRoutingModule } from './student-complain-routing.module';
import { ManageComplainComponent } from './manage-complain/manage-complain.component';
import { NewComplainComponent } from './new-complain/new-complain.component';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatRadioModule, MatSelectModule, MatSortModule, MatStepperModule, MatTableModule, MatTooltipModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentInformationComponent } from './new-complain/student-information/student-information.component';
import { ComplainInformationComponent } from './new-complain/complain-information/complain-information.component';
import { ViewComplainComponent } from './new-complain/view-complain/view-complain.component';


@NgModule({
  declarations: [ManageComplainComponent, NewComplainComponent, StudentInformationComponent, ComplainInformationComponent, ViewComplainComponent],
  imports: [
    CommonModule,
    StudentComplainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
    // Material
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatMenuModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatDialogModule
  ]
})
export class StudentComplainModule { }
