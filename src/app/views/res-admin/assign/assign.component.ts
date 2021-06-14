import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
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

  constructor(fb: FormBuilder, private activatedRoute: ActivatedRoute, public refData: ReferenceDataService, // private breakpointObserver: BreakpointObserver,
    public rgx: RGXService, public loadingService: LoadingService, private apiservice: ApiService, private dialogs: DialogsService,
    private router: Router, private sessions: SessionsService) {

      this.activatedRoute.params.subscribe(params => {
        if (params.id  && this.sessions.sessionApplication['referencenumber'] == undefined) {
          this.apiservice.getApplicationByReference(
            `${this.apiservice.userID}/${this.apiservice.complain}/${params.id}`
          ).toPromise()
          .then((res: any) => {
            if(res){
              this.sessions.sessionApplication = res;
              this.patchForm()
            }else {
              // throw error and navigate user back to list, cant find match
            }
          }).catch( error => {
            console.log(error);
            // throw error and navigate user back to list, fatch error
          })
        }else {
          if(params.id && this.sessions.sessionApplication['referencenumber'] !== undefined){
            debugger
            if(params.id == this.sessions.sessionApplication['referencenumber']){

              this.patchForm()
            }
            // throw error and navigate user back to list memory lick
            
          }else {
            // throw error and navigate user back to list missing params

          }
        }
       
      });

      this.complainInfor = fb.group({
        resNumber: [{value: '', disabled: true}, Validators.required],
        residenceFloor: [{value: '', disabled: true}, Validators.required],
        roomNumber: [{value: '', disabled: true}, Validators.required],
        comaplainType: [{value: '', disabled: true}, Validators.required],
        complainDetails: [{value: '', disabled: true}, Validators.required],
      })

      this.studentInfor = fb.group({
        studentName: [
          {value: '', disabled: true}, 
          Validators.compose([
            Validators.required,
            Validators.pattern(this.rgx.alphabetic().exp)
          ])
        ],
        studentSurname: [
          {value: '', disabled: true},
          Validators.compose([
            Validators.required,
            Validators.pattern(this.rgx.alphabetic().exp)
          ])
        ],
        studentNumber: [
          {value: '', disabled: true},
          Validators.compose([
            Validators.required,
            Validators.pattern(this.rgx.numeric().exp)
          ])
        ],
        cellphoneNumber: [
          {value: '', disabled: true},
          Validators.compose([
            Validators.required,
            Validators.pattern(this.rgx.tel().exp)
          ])
        ],
        emailAddress: [
          {value: '', disabled: true},
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

  patchForm() {
    console.log('patching');
    const studentDetails = this.sessions.sessionApplication['myaap']['StudentInformation'];
    const complainDetails = this.sessions.sessionApplication['myaap']['ComplainInformation'];
    this.studentInfor.patchValue({
      studentName: studentDetails.studentName ? studentDetails.studentName : '',
      studentSurname: studentDetails.studentSurname ? studentDetails.studentSurname : '',
      studentNumber: studentDetails.studentNumber ? studentDetails.studentNumber : '',
      cellphoneNumber: studentDetails.cellphoneNumber ? studentDetails.cellphoneNumber : '',
      emailAddress: studentDetails.emailAddress ? studentDetails.emailAddress : '',
    });
    this.complainInfor.patchValue({
      resNumber: complainDetails.resNumber ? complainDetails.resNumber : '',
      residenceFloor: complainDetails.residenceFloor ? complainDetails.residenceFloor : '',
      roomNumber: complainDetails.roomNumber ? complainDetails.roomNumber : '',
      comaplainType: complainDetails.comaplainType ? complainDetails.comaplainType : '',
      complainDetails: complainDetails.complainDetails ? complainDetails.complainDetails : '',
    });
  }

}
