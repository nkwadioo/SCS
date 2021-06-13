import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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


@Component({
  selector: 'app-list-complaints',
  templateUrl: './list-complaints.component.html',
  styleUrls: ['./list-complaints.component.scss']
})
export class ListComplaintsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['referenceNo', 'studentNo', 'status', 'action'];
  dataSource = new MatTableDataSource();

  isLargeScreen: any;
  complainData: any[];
  db: any;
  pageSize = 10;

  constructor(public refData: ReferenceDataService,
    private breakpointObserver: BreakpointObserver,
    public loadingService: LoadingService,
    private apiservice: ApiService,
    private dialogs: DialogsService,
    private router: Router,
    private sessions: SessionsService) { }

  ngOnInit() {
    
    this.loadingService.loadingOn();
    this.loadComplain();
    this.loadingService.loadingOff();
  }

  complainsAction(action, complain) {
    console.log(action, complain)
    this.sessions.sessionApplication = complain;
    this.router.navigate([`/res-admin/${action}`]);
  }
  
  async getComplain() {
    try {
      // Get the whole Complaints data from database
      this.apiservice.getallbysystem(`${this.apiservice.complain}`)
        .toPromise()
        .then((res: []) => {
          let complainList = res.filter( (list: any) => {
            if(list.status.toLowerCase() === 'submitted'){
              return list;
            }
          })
          this.dataSource.data = complainList;
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

  ngAfterViewInit(): void {
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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

}
