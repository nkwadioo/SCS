import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ApiService } from '../../../services/api.service';
import { LoadingService } from '../../../services/loading.service';
import { ReferenceDataService } from '../../../services/ReferenceDataService';
import { SchedulingService } from '../../../services/scheduling.service';
import { SessionsService } from '../../../services/sessions.service';
import { DialogsService } from '../../../shared/dialogs.service';

export interface COMPLAINTS {
  id: String | number;
  referenceNo: String;
  name: String;
  surname: String;
  dateCreated: String;
  studentNo: String;
  status: String;
  preview: String;
  edit: String;
}

@Component({
  selector: 'app-manage-complain',
  templateUrl: './manage-complain.component.html',
  styleUrls: ['./manage-complain.component.scss']
})
export class ManageComplainComponent implements OnInit {
  displayedColumns: string[] = ['id', 'referenceNo', 'name', 'surname',
  'dateCreated', 'studentNo', 'status', 'preview', 'edit'
];
dataSource = new MatTableDataSource<COMPLAINTS>();
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatPaginator) paginator2: MatPaginator;

isLargeScreen: any;
pageSize = 10;
pageSizeTest = 10;

  constructor(
    private fb: FormBuilder,
    public refData: ReferenceDataService,
    private breakpointObserver: BreakpointObserver,
    public loadingService: LoadingService,
    private apiservice: ApiService,
    private dialogs: DialogsService,
    private sessions: SessionsService,
    private schedulingService: SchedulingService,
    private router: Router
  ) { }

  ngOnInit() {
        // Media check
        this.breakpointObserver.observe([
          '(min-width: 600px)'
        ]).pipe(
          tap(result => this.isLargeScreen = result.matches)
        ).subscribe(result => {
          if (result.matches) {
            this.dataSource.paginator = this.paginator;
            this.pageSize = 5;
          } else {
            this.dataSource.paginator = null;
            this.pageSize = 10;
          }
        });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
