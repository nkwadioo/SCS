import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { RGXService } from '../../../services/rgx.service';
import { tap } from 'rxjs/operators';
import { ApiService } from '../../../services/api.service';
import { LoadingService } from '../../../services/loading.service';
import { ReferenceDataService } from '../../../services/ReferenceDataService';
import { SchedulingService } from '../../../services/scheduling.service';
import { SessionsService } from '../../../services/sessions.service';
import { DialogsService } from '../../../shared/dialogs.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent implements OnInit {

  complainInfor: FormGroup;
  studentInfor: FormGroup;

  constructor(fb: FormBuilder,
    public refData: ReferenceDataService,
    // private breakpointObserver: BreakpointObserver,
    public rgx: RGXService,
    public loadingService: LoadingService,
    private apiservice: ApiService,
    private dialogs: DialogsService,
    private router: Router,
    private sessions: SessionsService) {
      this.complainInfor = fb.group({
        resNumber: ['', Validators.required],
        residenceFloor: ['', Validators.required],
        roomNumber: ['', Validators.required],
        comaplainType: ['', Validators.required],
        complainDetails: ['', Validators.required],
      })

      this.studentInfor = fb.group({
        studentName: [{
          value: '', disabled: true}, 
          Validators.compose([
            Validators.required,
            Validators.pattern(this.rgx.alphabetic().exp)
          ])
        ],
        studentSurname: [{
          value: '', disabled: true},
          Validators.compose([
            Validators.required,
            Validators.pattern(this.rgx.alphabetic().exp)
          ])
        ],
        studentNumber: [{
          value: '', disabled: true},
          Validators.compose([
            Validators.required,
            Validators.pattern(this.rgx.numeric().exp)
          ])
        ],
        cellphoneNumber: [{
          value: '', disabled: true},
          Validators.compose([
            Validators.required,
            Validators.pattern(this.rgx.tel().exp)
          ])
        ],
        emailAddress: [{
          value: '', disabled: true},
          Validators.compose([
            Validators.required,
            Validators.pattern(this.rgx.email().exp)
          ])
        ],
      });
      console.log(this.sessions.sessionApplication)
    }

  ngOnInit() {
  }

}
