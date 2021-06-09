import { DialogsService } from './../shared/dialogs.service';
import { IAttachment } from './../models/IAttachment';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  testing: any = '';
  url = 'http://localhost:3000/employees';
  db: any = [];
  obj: any;
  numberOfObjects: any = 0;
  startDate: any = new Date();
  private _id: number;
  today: Date = new Date();


  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }

  constructor(private httpService: HttpClient, private apiservice: ApiService,
  private dialog: DialogsService) { }

  submit(form: FormGroup, id?: any) {
    /*
      1) get the last id from the list
      2) create a new object and save
    */
    if (!(this.id ? this.id : id)) {
      this.httpService.get(this.url).toPromise().then(async data => {
        this.db = data;
        this.numberOfObjects = this.db.length;
        // create and save the new application's id
        // tslint:disable-next-line: radix
        this._id = parseInt(this.db[this.numberOfObjects - 1].id) + 1;
        // try using the (start date + current time stamp) as you unique search for the current record
        this.obj = {
          'id': this.id,
          'status': 'Draft',
          'startDate': this.startDate.getFullYear() + '/' + this.startDate.getMonth() + '/' + this.startDate.getDay(),
          'acceptTermsConditions': form['controls']['acceptTermsConditions']['value']
        };


      }).then( async data => this.doPost() );
    } else {

      this.doUpdate(form);
    }
  }

  // this should create a new form or the error message will appeare on the applicants page
  doPost() {


    this.httpService.post(`${this.url}`, this.obj).subscribe(data => {
      alert('Saved');
      return false;
    },
      (err: HttpErrorResponse) => {
        alert('We ran into a problem trying to save your application');
      });
      return false;
  }

  // the form that is passed to this method should be an object of the values that the form currently holds
  doUpdate(form) {
    // this.obj = form;
    this.httpService.put(`${this.url}/${this.id}`, form).subscribe(data => {
      alert('Saved');
    },
      (err: HttpErrorResponse) => {
        alert('We ran into a problem trying to save your application');

    });
  }

  // Extract all invalid controls from the form
  public findInvalidControls(f: FormGroup) {
    const invalid = [];
    const controls = f.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }

  public previewAttachment(f: IAttachment) {
    if (f.filebinary) {
      let r = f.filebinary;
      const x = r.indexOf(',');
      r = r.substring(x + 1, r.length - 1) + '=';
      const fileData = atob(r);

      const byteNumbers = new Array(fileData.length);
      for (let i = 0; i < fileData.length; i++) {
        byteNumbers[i] = fileData.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      const file = new Blob([byteArray], { type: 'application/pdf;base64' });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    }
  }

  public   onFileChange(ev, f) {
    // this.percent = 0;
    const reader = new FileReader();
    const file = ev.target.files[0];
    this[`${f}`]['filename'] = file.name;
    reader.readAsDataURL(file);
    reader.onload = event => {
      this[`${f}`].attachment = event.target['result'];
      this[`${f}`].filename = file.name;
      this[`${f}`].referenceNumber = this.apiservice.TTAreferencenumber;
      this[`${f}`].systemname = this.apiservice.appName;
      if (!this[`${f}`].id) {
        const res = this.apiservice.saveAttachmentMetadata(this[`${f}`]);
        if (!res) {
          this.dialog.Alert('Error saving the attachment metadata');
        }
      } else {
        if (!this.apiservice.updateAttachment(this[`${f}`])) {
          this.dialog.Alert('There is an error saving the attachment');
        }
      }
    };

    reader.onprogress = progress => {
      if (progress.lengthComputable) {
        // this.percent = (progress.loaded / progress.total) * 100;
      }
    };
  }
}

