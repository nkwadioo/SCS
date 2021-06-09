import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComplainInformationComponent } from './complain-information/complain-information.component';
import { StudentInformationComponent } from './student-information/student-information.component';

@Component({
  selector: 'app-new-complain',
  templateUrl: './new-complain.component.html',
  styleUrls: ['./new-complain.component.scss']
})
export class NewComplainComponent implements OnInit {

  @ViewChild(StudentInformationComponent)
  private studentInformation: StudentInformationComponent;

  @ViewChild(ComplainInformationComponent)
  private complainInformation: ComplainInformationComponent;

  studentForm: FormGroup = new FormGroup({});
  complainForm: FormGroup = new FormGroup({});

  canSubmit = false;
  isStudentValid = true;
  isComplainValid = true;
  isLinear = false;
  stepper = true;

  fromComplainStatus: any = {
    studentStatus: false,
    complainStatus: false,
  };

  canDisable = false;
  isPersonalValueValid = true;
  formApplicactionStatus = true;

  // For Disable Forms
  @Input() completed = true;
  isEditable = true;
  formApplicactionEditable = true;
  formApplicationValue: any;

  ngAfterViewInit() {
    this.studentForm = this.studentInformation.studentInfor;
    this.complainForm = this.complainInformation.complainInfor;
  }
  constructor(public router: Router, private _formBuilder: FormBuilder) { }
  ngOnInit() { }

  public getFormStatus(data: any) {
    switch (data.formname) {
      case 'student':
        this.fromComplainStatus.studentStatus = data.formStatus;
        this.isStudentValid = data.formStatus;
        break;
      case 'complain':
        this.fromComplainStatus.complainStatus = data.formStatus;
        this.isComplainValid = data.formStatus;
        break;
    }
    if (this.fromComplainStatus.studentStatus
      && this.fromComplainStatus.complainStatus) {
      this.canSubmit = true;
    } else {
      this.canSubmit = false;
    }
  }

  public getComplainStatus(data: any) {
    if (this.formApplicactionStatus = data) {
      this.canDisable = true;
    } else {
      this.canDisable = false;
    }
  }

}
