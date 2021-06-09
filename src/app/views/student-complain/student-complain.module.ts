import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentComplainRoutingModule } from './student-complain-routing.module';
import { ManageComplainComponent } from './manage-complain/manage-complain.component';
import { NewComplainComponent } from './new-complain/new-complain.component';

@NgModule({
  declarations: [ManageComplainComponent, NewComplainComponent],
  imports: [
    CommonModule,
    StudentComplainRoutingModule
  ]
})
export class StudentComplainModule { }
