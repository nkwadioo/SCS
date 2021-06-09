import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complain-information',
  templateUrl: './complain-information.component.html',
  styleUrls: ['./complain-information.component.scss']
})
export class ComplainInformationComponent implements OnInit {

  complainInfor: FormGroup;
  constructor(fb: FormBuilder,) { 
    this.complainInfor = fb.group({
      resNumber: ['', Validators.required],
      picture: ['', Validators.required],
      roomNumber: ['', Validators.required],
      comaplainType: ['', Validators.required],
      complainDetails: ['', Validators.required],
    });
  }
  ngOnInit() {
  }

}
