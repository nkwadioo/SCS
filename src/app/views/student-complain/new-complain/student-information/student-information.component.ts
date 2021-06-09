import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { LoadingService } from '../../../../services/loading.service';
import { ReferenceDataService } from '../../../../services/ReferenceDataService';
import { RGXService } from '../../../../services/rgx.service';
import { SchedulingService } from '../../../../services/scheduling.service';
import { SessionsService } from '../../../../services/sessions.service';
import { DialogsService } from '../../../../shared/dialogs.service';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.scss']
})
export class StudentInformationComponent implements OnInit {

  @Output() sendStudentState: EventEmitter<any> = new EventEmitter();

  enableTabs = false;
  studentInfor: FormGroup;
  constructor(    public router: Router,
    fb: FormBuilder,
    private apiservice: ApiService,
    public rgx: RGXService,
    private session: SessionsService,
    private dialog: DialogsService,
    public refData: ReferenceDataService,
    private loadingService: LoadingService,
    public SchedulingServices: SchedulingService) { 
    this.studentInfor = fb.group({
      studentName: ['', Validators.compose([
          Validators.required,
          Validators.pattern(this.rgx.alphabetic().exp)
        ])
      ],
      studentSurname: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.rgx.alphabetic().exp)
        ])
      ],
      studentNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.rgx.numeric().exp)
        ])
      ],
      cellphoneNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.rgx.tel().exp)
        ])
      ],
      emailAddress: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.rgx.email().exp)
        ])
      ],
    });
  }

  ngOnInit() {
  }

  onClickSubmit(StudInfo) {
    debugger;
    if (this.studentInfor.valid) {
      const appInfo = StudInfo.getRawValue();
      this.enableTabs = true;
      this.sendStatus();
      const newApp: {} = {
        status: 'Draft',
        StudentInformation: {
          studentName: null,
          studentSurname: null,
          studentNumber: null,
          cellphoneNumber: null,
          emailAddress: null,
        },
        ComplainInformation: {
          resNumber: null,
          picture: null,
          roomNumber: null,
          comaplainType: null,
          complainDetails: null,
        }
      };

      try {
        if (this.apiservice.referencenumber) {
          this.apiservice
            .getApplicationByReference(
              `${this.apiservice.userID}/${this.apiservice.complain}/${this.apiservice.referencenumber}`
            )
            .toPromise()
            .then(res => {
              if (res) {
                res.myaap['StudentInformation'] = StudInfo.getRawValue();
                this.apiservice
                  .updateApplication(res)
                  .toPromise()
                  .then(resp => { });
              } else {
                this.dialog.Alert(
                  'This complain does not exist . You will have to recreating the complain'
                );
                this.router.navigate(['student-compplain/Manage']);
              }
            });
        } else {
          newApp['StudentInformation'] = StudInfo.getRawValue();
          this.session.sessionApplication = {
            identifier: this.apiservice.userID,
            systemName: this.apiservice.appName,
            searchcode: newApp['StudentInformation']['studentNumber'],
            status: 'Draft',
            myaap: newApp
          };
          this.apiservice
            .createApplication(this.session.sessionApplication)
            .toPromise()
            .then(resp => {
              this.apiservice.referencenumber = resp['referencenumber'];
              this.session.sessionApplication = JSON.parse(
                JSON.stringify(resp)
              );
            })
            .catch(error => {
              return Promise.reject(error);
            });
        }
      } catch (e) {
        this.dialog.Alert('Error: ' + e);
      }
    }
  }

  sendStatus() {
    debugger;
    const obj: any = {
      wasClicked: this.enableTabs,
      formname: 'student',
      formStatus: this.studentInfor.valid
    };
    this.sendStudentState.emit(obj);
  }

}
