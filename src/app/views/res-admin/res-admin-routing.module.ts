import { ListComplaintsComponent } from './list-complaints/list-complaints.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignComponent } from './assign/assign.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Complains List'
    },
    children: [
      // {
      //   path: '',
      //   redirectTo: 'list'
      // },
      {
        path: 'list',
        component: ListComplaintsComponent,
        data: {
          title: 'List Complain'
        }
      },
      {
        path: 'assign/:id',
        component: AssignComponent,
        data: {
          title: 'Complain Assignment'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResAdminRoutingModule { }
