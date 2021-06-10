import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComplainComponent } from './manage-complain/manage-complain.component';
import { NewComplainComponent } from './new-complain/new-complain.component';
import { ViewComplainComponent } from './new-complain/view-complain/view-complain.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Student Complaints'
    },
    children: [
      {
        path: '',
        redirectTo: 'complain'
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
      {
        path: 'View',
        component: ViewComplainComponent,
        data: {
          title: 'View Complain'
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
