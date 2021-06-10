import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { LoadingService } from '../../../../services/loading.service';
import { ReferenceDataService } from '../../../../services/ReferenceDataService';
import { RGXService } from '../../../../services/rgx.service';
import { SessionsService } from '../../../../services/sessions.service';
import { DialogsService } from '../../../../shared/dialogs.service';

@Component({
  selector: 'app-view-complain',
  templateUrl: './view-complain.component.html',
  styleUrls: ['./view-complain.component.scss']
})
export class ViewComplainComponent implements OnInit {

  complainInfor: FormGroup;

  ResidenceNumber = this.refData.ResidenceNumber;
  ResidenceFloor = this.refData.ResidenceFloor;

  constructor(private fb: FormBuilder,
    public rgx: RGXService,
    public router: Router,
    public refData: ReferenceDataService,
    private dialogs: DialogsService,
    private apiservice: ApiService,
    private loadingService: LoadingService,
    private session: SessionsService,) {
    this.complainInfor = fb.group({
      resNumber: ['', Validators.required],
      residenceFloor: ['', Validators.required],
      roomNumber: ['', Validators.required],
      comaplainType: ['', Validators.required],
      complainDetails: ['', Validators.required],

      studentName: ['', Validators.required],
      studentSurname: ['', Validators.required],
      studentNumber: ['', Validators.required],
      cellphoneNumber: ['', Validators.required],
      emailAddress: ['', Validators.required],
    });
  }

  ngOnInit() {

    if (this.apiservice.referencenumber) {
      this.loadingService.loadingOn();
      this.apiservice
        .getApplicationByReference(
          `${this.apiservice.userID}/${this.apiservice.complain}/${this.apiservice.referencenumber}`
        )
        .toPromise()
        .then((res) => {
          if (res) {
            const studentDetails = res.myaap.StudentInformation;
            const complainDetails = res.myaap.ComplainInformation;
            this.refData.ResidenceFloor.filter(item => {
              if (item.id === complainDetails.residenceFloor) {
                complainDetails.residenceFloor = item.Floor;
              }
            });
            this.refData.ResidenceNumber.filter(item => {
              if (item.id === complainDetails.resNumber) {
                complainDetails.resNumber = item.Res;
              }
            });
            // after filtering
            this.complainInfor = this.fb.group({
              studentName: [studentDetails.studentName, Validators.required],
              studentSurname: [studentDetails.studentSurname, Validators.required],
              studentNumber: [studentDetails.studentNumber, Validators.required],
              cellphoneNumber: [studentDetails.cellphoneNumber, Validators.required],
              emailAddress: [studentDetails.emailAddress, Validators.required],
              resNumber: [complainDetails.resNumber, Validators.required],
              residenceFloor: [complainDetails.residenceFloor, Validators.required],
              roomNumber: [complainDetails.roomNumber, Validators.required],
              comaplainType: [complainDetails.comaplainType, Validators.required],
              complainDetails: [complainDetails.complainDetails, Validators.required],
            });

            this.complainInfor.disable();
          }
        });
      this.loadingService.loadingOff();
    }
  }

  manageComplain() {
    this.router.navigate(['/student-complain/Manage']);
  }

}
