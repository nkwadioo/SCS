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
  referenceNo: String;
  name: String;
  surname: String;
  dateCreated: String;
  studentNo: String;
  status: String;
  View: String;
  Edit: String;
  Delete: String;
}

@Component({
  selector: 'app-manage-complain',
  templateUrl: './manage-complain.component.html',
  styleUrls: ['./manage-complain.component.scss']
})
export class ManageComplainComponent implements OnInit {
 
displayedColumns: string[] = [];

dataSource = new MatTableDataSource();
complainData: COMPLAINTS[] = new Array();
screenHeight: any;
screenWidth: any;
@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatPaginator) paginator2: MatPaginator;

isLargeScreen: any;
pageSize = 10;
pageSizeTest = 10;
db: any;

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
  ) { 
    this.screenHeight = window.screen.height;
    this.screenWidth = window.screen.width;
    this.setDisplayedColumns();
  }

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
        this.pageSize = 1000;
      }
    });
    this.complainData = [];
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.loadingService.loadingOn();
    this.loadComplain();
    this.loadingService.loadingOff();
  }

  async getComplain() {
    try {
      // Get the whole Complaints data from database
      this.apiservice
        .getApplicationById(
          `${this.apiservice.userID}/${this.apiservice.complain}`
        )
        .toPromise()
        .then(res => {
          this.db = res;
          this.db.forEach(element => {
            const appInfo = element.myaap.StudentInformation;
            if (element.status !== 'Deleted') {
              const dateCreated = this.refData.formatDate(element.dateCreated);
              this.complainData.push({
                referenceNo: element.referencenumber,
                studentNo: appInfo.studentNumber,
                name: appInfo.studentName,
                surname: appInfo.studentSurname,
                dateCreated: dateCreated,
                status: element.status,
                View: '',
                Edit: '',
                Delete: ''
              }
              );
            }
          });
          this.complainData = this.complainData;
          this.dataSource.data = this.complainData;
          this.dataSource.data = this.dataSource.data;
        });
    } catch (err) {
      alert('Error: ' + err);
    }
  }
  loadComplain() {
    this.complainData = [];
    this.getComplain().then(data => { });
    const source = this.complainData;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editComplain(id: string): void {
    this.sessions.sessionApplication = this.db.find(
      x => id === x['referencenumber']
    );
    this.apiservice.referencenumber = id;
    // Redirect to trade-application
    this.router.navigate(['/ttc-accreditation/ttc-application']);
  }

  deleteComlain(id: string): void {
    this.dialogs
      .Confirm(
        'This complain cannot be recovered.Do you really want to delete this complain?'
      )
      .afterClosed()
      .subscribe(respond => {
        if (respond) {
          // Get candidate applications
          this.apiservice
            .getApplicationByReference(
              `${this.apiservice.userID}/${this.apiservice.AccredAppName}/${id}`
            )
            .toPromise()
            .then(res => {
              res['status'] = 'Deleted';
              // Update candidate applications
              this.apiservice.updateApplication(res).subscribe(
                () => {
                  this.loadComplain();
                },
                error => {
                  this.dialogs.Alert(error.message);
                }
              );
            });
        }
      });
  }

  viewComplain(id: string): void {
    this.apiservice.referencenumber = id;
    this.router.navigate(['ttc-accreditation/view-application']);
  }
  setDisplayedColumns() {
    this.displayedColumns = ['referenceNo', 'name', 'surname',
    'dateCreated', 'studentNo', 'status', 'View', 'Edit', 'Delete'
  ];
  }



}
