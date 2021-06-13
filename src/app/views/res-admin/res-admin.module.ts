import { NgMaterialModule } from './../../shared/ng-material/ng-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResAdminRoutingModule } from './res-admin-routing.module';
import { ListComplaintsComponent } from './list-complaints/list-complaints.component';
import { AssignComponent } from './assign/assign.component';

@NgModule({
  declarations: [ListComplaintsComponent, AssignComponent],
  imports: [
    CommonModule,
    ResAdminRoutingModule,
    NgMaterialModule
  ]
})
export class ResAdminModule { }
