import { Injectable } from '@angular/core';
import { Applications } from '../models/applications';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DialogsService } from '../shared/dialogs.service';

@Injectable({
  providedIn: 'root'
})

// /score -> post
// /update -> put
// /getusersByIdnumber -> get
export class ApiService {
  [x: string]: any;

  apiAuthenticateURL = 'http://cit.eservices.gov.za/nvframework/rest/getAuthentication/';
  apiAddAttachment = 'http://cit.eservices.gov.za/nvframework/rest';
  apiGetAttachment = 'http://cit.eservices.gov.za/nvframework/rest/getallattachments/';
  apiSendSMSURL = 'http://cit.eservices.gov.za/nvframework/rest/sendsms/';
  apiLookupURL = 'http://cit.eservices.gov.za/nvframework/rest/getlookups/';
  apiURL = 'http://cit.eservices.gov.za/nvframework/rest';

  // apiURL = 'http://Wcenifms924:9191/nvframework/rest';
  // apiAddAttachment = 'http://wcenifms924:9191/nvframework/rest';
  // apiLookupURL = 'http://wcenifms924:9191/nvframework/rest/getlookups/';
  // apiAuthenticateURL =
  // 'http://Mcen0086:8080/nvframework/rest/getAuthentication/';

  smsMessage = {
    sysid: 'EMATRIC',
    to: null,
    msg: null,
    pwd: 'dt$sHs24pS*',
    ref: null,
    priority: '0'
  };

  userID = '';
  complain = 'Complain';
  referencenumber = '';


  constructor(private httpClient: HttpClient, private dialog: DialogsService) {}

  getProducts(): Observable<any> {
    return this.http.get(this.endpoin).pipe(map(this.extractData));
  }

  public createApplication(application) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post(this.apiURL + '/score/', application, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }


  public updateApplication(application) {
    return this.httpClient.put(
      this.apiURL + '/update/',
      application,
      this.httpOptions
    );
  }

  public deleteApplication(id: string) {
    return this.httpClient.delete(this.apiURL + '/' + id);
  }

  public getApplicationById(id: string) {
    return this.httpClient.get<any>(this.apiURL + '/getusersByIdnumber/' + id);
  }

  public getApplicationByReference(id: string) {
    return this.httpClient.get<any>(
      this.apiURL + '/getApplicationByReference/' + id
    );
  }

  // use the system name like ATTS, TTA, ADMIN
  public getallbysystem(system: string) {
    return this.httpClient.get<any>(this.apiURL + '/getallbysystem/' + system);
  }

  public saveAttachmentMetadata(metadata) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post(
      this.apiURL + '/saveAttachmentMetadata/',
      metadata,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

  public saveAttachment(attachment, id) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.put(
      this.apiURL + `/upload/${id}`, attachment,
      {
        headers: new HttpHeaders({
          'Content-Type': 'multipart/form-data'
          ,
          'boundary': '--------------------abc123'
      //     , 'Content-Disposition': 'form-data',
      // 'name': 'uploadedFile',
      //     'filename': 'sam.pdf'
        })
      }
    );
  }

  // /getallattachments/"+"{systemname}/" + "{identifier}/" + "{referencenumber}"
  public getAllAttachments(id: string) {
    return this.httpClient.get<any>(this.apiURL + '/getallattachments/' + id);
  }
  public updateAttachment(attachment) {
    return this.httpClient.put(
      this.apiAddAttachment + '/updateAttachment/',
      attachment,
      this.httpOptions
    );
  }

  public getAttachmentById(id: string) {
    return this.httpClient.get<any>(
      this.apiURL + '/getAttachmentById/' + id
    );
  }

  public getApplicationByStartDate(date, applications) {
    let record;
    applications.forEach(obj => {
      if (obj && obj.startDate === date) {
        record = obj;
      }
    });
    return record;
    // return this.httpClient.get<Applications>(this.apiURL + '?startDate=' + date);
  }

  public getApplicationIndex(date, applications: Array<[]>) {
    let index;
    for (let i = 0; i < applications.length; i++) {
      if (applications[i] && applications[i]['startDate'] === date) {
        index = i;
      }
    }
    return index;
    // return this.httpClient.get<Applications>(this.apiURL + '?startDate=' + date);
  }

  public getApplicationIndexById(id, applications: Array<[]>) {
    let index;
    for (let i = 0; i < applications.length; i++) {
      if (applications[i] && applications[i]['id'] === id) {
        index = i;
      }
    }
    return index;
    // return this.httpClient.get<Applications>(this.apiURL + '?startDate=' + date);
  }

  public getApplications() {
    return this.httpClient.get<Applications>(this.apiURL);
  }

  public getProfile() {
    return this.httpClient.get<any>(
      this.apiAuthenticateURL + sessionStorage.getItem('token')
    );
  }

  authenticated(): boolean {
    const token = sessionStorage.getItem('token');
    if (token == null) {
      return false;
    } else {
      localStorage.clear();
      return true;
    }
  }
  public sendsmsMessage(message) {
    return this.httpClient.post(this.apiSendSMSURL, this.smsMessage, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  public getLookup(lookup: string) {
    return this.httpClient.get<[]>(this.apiLookupURL + lookup);
  }
}
