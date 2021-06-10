import { forEach } from '@angular/router/src/utils/collection';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root',
})
export class ReferenceDataService {
  apiLookupURL = 'http://wcenifms924:9191/nvframework/rest/getlookups/';
  constructor(private httpClient: HttpClient, private apiservice: ApiService) { }


  Profiles = [
    {
      'token': 0, 'name': 'John', 'surname': 'Mohalane', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '5904115479089', 'dateOfBirth': '1995/04/11', 'email': 'Mary.Albert@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    {
      'token': 1, 'name': 'David', 'surname': 'Mabusa', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '9504115479089', 'dateOfBirth': '1995/04/11', 'email': 'david.mabusa@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    {
      'token': 10, 'name': 'Nicky', 'surname': 'Twala', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '9806135800085', 'dateOfBirth': '1995/04/11', 'email': 'Nicky.Twala@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    {
      'token': 2, 'name': 'Jack', 'surname': 'Methews', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '8110133800083', 'dateOfBirth': '1995/04/11', 'email': 'Jack.Methews@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    {
      'token': 3, 'name': 'Sello', 'surname': 'Mathe', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '9210185800089', 'dateOfBirth': '1995/04/11', 'email': 'Sello.Mathe@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    {
      'token': 4, 'name': 'Jacob', 'surname': 'Tlale', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '9511185800080', 'dateOfBirth': '1995/04/11', 'email': 'Jacob.Tlale@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    {
      'token': 5, 'name': 'Solly', 'surname': 'Mahanjane', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '8804135800081', 'dateOfBirth': '1995/04/11', 'email': 'Solly.Mahanjane@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    {
      'token': 6, 'name': 'Dan', 'surname': 'Mkhabela', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '8405045800086', 'dateOfBirth': '1995/04/11', 'email': 'Dan.Mkhabela@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    {
      'token': 7, 'name': 'Joshua', 'surname': 'Mthimkhulu', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '7908205800086', 'dateOfBirth': '1995/04/11', 'email': 'Joshua.Mthimkhulu@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    {
      'token': 8, 'name': 'Mary', 'surname': 'Albert', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '9806134800086', 'dateOfBirth': '1995/04/11', 'email': 'Mary.Albert@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    {
      'token': 9, 'name': 'Paulina', 'surname': 'Grootboom', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '7908204800087', 'dateOfBirth': '1995/04/11', 'email': 'Paulina.Grootboom@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
  ];

  ResidenceNumber = [
    { id: 1, Res: 'M1' },
    { id: 2, Res: 'M2' },
    { id: 3, Res: 'M3' },
    { id: 4, Res: 'M4' },
    { id: 5, Res: 'M5' },
    { id: 6, Res: 'M6' },
    { id: 7, Res: 'M7' },
    { id: 8, Res: 'M8' },
    { id: 9, Res: 'M9' },
    { id: 10, Res: 'M10' },
    { id: 11, Res: 'M11' },
    { id: 12, Res: 'M12' },
    { id: 13, Res: 'M13' },
    { id: 14, Res: 'M14' },
    { id: 15, Res: 'M15' },
    { id: 16, Res: 'M16' },
    { id: 17, Res: 'M17' },
    { id: 18, Res: 'M18' },
    { id: 19, Res: 'M19' },
    { id: 20, Res: 'M20' },
  ];

  ResidenceFloor = [
    { id: 1, Floor: 'Ground Floor' },
    { id: 2, Floor: 'First Floor' },
    { id: 3, Floor: 'Second Floor' },
    { id: 4, Floor: 'Third Floor' },
    { id: 5, Floor: 'Firth Floor' },
    { id: 6, Floor: 'Sixth Floor' },
    { id: 7, Floor: 'Seventh Floor' },
  ];

  public getLookup(lookup: string) {
    return this.httpClient.get<[]>(this.apiLookupURL + lookup);
  }

  public generateTodaysDate() {
    const currentDate = new Date();

    const today =
      currentDate.getFullYear() +
      '/' +
      (currentDate.getMonth() + 1) +
      '/' +
      currentDate.getDate() +
      ' - ' +
      currentDate.getHours() +
      ':' +
      currentDate.getMinutes() +
      ':' +
      currentDate.getSeconds();

    return today;
  }

  public formatDateTime(date) {
    const myDate = new Date(date);
    let month;
    // tslint:disable-next-line: prefer-const
    let day;

    // format Month
    if (myDate.getMonth() < 9) {
      month = myDate.getMonth() + 1;
      month = '0' + month;
    } else {
      month = myDate.getMonth() + 1;
    }

    const convertedTo =
      myDate.getFullYear() +
      '/' +
      month +
      '/' +
      myDate.getDate() +
      ' - ' +
      myDate.getHours() +
      ':' +
      myDate.getMinutes();
    return convertedTo;
  }

  public formatDate(date) {
    const months = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12',
    };

    const myDate = (new Date(date) + '').split(' ');
    const month = months[`${myDate[1]}`];
    const day = myDate[2];
    const convertedTo = `${myDate[3]}/${month}/${day}`;
    return convertedTo;
  }

}
