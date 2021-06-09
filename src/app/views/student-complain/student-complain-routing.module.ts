import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComplainComponent } from './manage-complain/manage-complain.component';
import { NewComplainComponent } from './new-complain/new-complain.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Student Complaints'
    },
    children: [
      {
        path: '',
        redirectTo: 'Complain'
      },
      {
        path: 'Complain',
        component: NewComplainComponent,
        data: {
          title: 'New Complain'
        }
      },
      {
        path: 'Manage',
        component: ManageComplainComponent,
        data: {
          title: 'Manage Complain'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentComplainRoutingModule { }
