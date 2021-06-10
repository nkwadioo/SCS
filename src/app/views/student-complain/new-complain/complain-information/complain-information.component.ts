import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { ApplicationService } from '../../../../services/application.service';
import { ReferenceDataService } from '../../../../services/ReferenceDataService';
import { RGXService } from '../../../../services/rgx.service';
import { SessionsService } from '../../../../services/sessions.service';
import { DialogsService } from '../../../../shared/dialogs.service';

@Component({
  selector: 'app-complain-information',
  templateUrl: './complain-information.component.html',
  styleUrls: ['./complain-information.component.scss']
})
export class ComplainInformationComponent implements OnInit {

  complainInfor: FormGroup;

  ResidenceNumber = this.refData.ResidenceNumber;
  ResidenceFloor = this.refData.ResidenceFloor;

  constructor( fb: FormBuilder,
    public rgx: RGXService,
    public router: Router,
    public refData: ReferenceDataService,
    private dialogs: DialogsService,
    private apiservice: ApiService,
    private session: SessionsService,) { 
    this.complainInfor = fb.group({
      resNumber: ['', Validators.required],
      residenceFloor: ['', Validators.required],
      roomNumber: ['', Validators.required],
      comaplainType: ['', Validators.required],
      complainDetails: ['', Validators.required],
    });
  }
  ngOnInit() {
  }

  onClickSubmit(complanInformation) {
    this.apiservice
      .getApplicationByReference(
        `${this.apiservice.userID}/${this.apiservice.complain}/${this.apiservice.referencenumber}`
      )
      .toPromise()
      .then(res => {
        if (res) {
          res.myaap['status'] = 'Submitted';
          res['status'] = 'Submitted';
          res.myaap['ComplainInformation'] = complanInformation.getRawValue();
          // Update candidate applications
          this.apiservice
            .updateApplication(res)
            .toPromise()
            .then(resp => {
              if(resp){
                this.session.sessionApplication = resp;
                this.dialogs.Alert('Your Complain is Successfully Submitted');
                this.router.navigate(['/student-complain/Manage']);
              }
            });
        }
      });
  }

}
