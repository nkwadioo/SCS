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
      'token': 11, 'name': 'Sam', 'surname': 'Sesoko', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '7806135800087', 'dateOfBirth': '1995/04/11', 'email': 'Sam.Sesoko@sita.co.za',
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
    {
      'token': 12, 'name': 'Nicky', 'surname': 'Pakise', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '8904115479089', 'dateOfBirth': '1995/04/11', 'email': 'Jacob.Tlale@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    {
      'token': 13, 'name': 'Thabang', 'surname': 'Matlala', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '9405115479089', 'dateOfBirth': '1995/04/11', 'email': 'Solly.Mahanjane@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    {
      'token': 14, 'name': 'Jacob', 'surname': 'Mohalane', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '9509134800086', 'dateOfBirth': '1995/04/11', 'email': 'Dan.Mkhabela@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    {
      'token': 15, 'name': 'Jack', 'surname': 'Mabaso', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '6004115479089', 'dateOfBirth': '1995/04/11', 'email': 'Joshua.Mthimkhulu@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    {
      'token': 16, 'name': 'John', 'surname': 'Mohalane', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '5904115479089', 'dateOfBirth': '1995/04/11', 'email': 'Mary.Albert@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    // { For CIT
    //   'token': 16, 'name': 'John', 'surname': 'Mohalane', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
    //   'idNumber': '5904115479089', 'dateOfBirth': '1995/04/11', 'email': 'Mary.Albert@sita.co.za',
    //   'cellphoneNumber': '0835962404'
    // },

    {
      'token': 17, 'name': 'Sello', 'surname': 'Maake', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '7804115479089', 'dateOfBirth': '1995/04/11', 'email': 'Paulina.Grootboom@sita.co.za',
      'cellphoneNumber': '0835962404'
    },
    {
      'token': 18, 'name': 'Noah', 'surname': 'Makakula', 'maidenName': '', 'initials': 'N', 'nationality': 'South African',
      'idNumber': '7707085800087', 'dateOfBirth': '1977/07/08', 'email': 'Noah.Makakula@sita.co.za',
      'cellphoneNumber': '0735862404'
    },
    {
      'token': 19, 'name': 'Elijah', 'surname': 'Jones', 'maidenName': '', 'initials': 'E', 'nationality': 'South African',
      'idNumber': '8407055800089', 'dateOfBirth': '1984/04/11', 'email': 'Elijah.Jones@sita.co.za',
      'cellphoneNumber': '0833962404'
    },
    {
      'token': 20, 'name': 'Benjamin', 'surname': 'Miller', 'maidenName': '', 'initials': 'B', 'nationality': 'South African',
      'idNumber': '8603055800083', 'dateOfBirth': '1986/04/11', 'email': 'Benjamin.Miller@sita.co.za',
      'cellphoneNumber': '0645962404'
    },
    {
      'token': 21, 'name': 'Jane', 'surname': 'Walker', 'maidenName': '', 'initials': 'J', 'nationality': 'South African',
      'idNumber': '8202054800085', 'dateOfBirth': '1982/02/05', 'email': 'Jane.Walker@sita.co.za',
      'cellphoneNumber': '0623458704'
    },
    {
      'token': 22, 'name': 'Harriet', 'surname': 'Harris', 'maidenName': '', 'initials': 'H', 'nationality': 'South African',
      'idNumber': '9010104800081', 'dateOfBirth': '1990/10/10', 'email': 'Harriet.Harris@sita.co.za',
      'cellphoneNumber': '0725962404'
    },
    {
      'token': 23, 'name': 'Moses', 'surname': 'Kgaphola', 'maidenName': '', 'initials': 'M', 'nationality': 'South African',
      'idNumber': '9001014800089', 'dateOfBirth': '1990/01/01', 'email': 'Moseskgaphola@gmail.com',
      'cellphoneNumber': '0725772502'
    },
    {
      'token': 24, 'name': 'Lerato', 'surname': 'Phala', 'maidenName': '', 'initials': 'L', 'nationality': 'South African',
      'idNumber': '9010144800083', 'dateOfBirth': '1990/10/14', 'email': 'Leratophala@gmail.com',
      'cellphoneNumber': '0825672502'
    },
    {
      'token': 25, 'name': 'Johannes', 'surname': 'jacob', 'maidenName': '', 'initials': 'J', 'nationality': 'South African',
      'idNumber': '8710045507076', 'dateOfBirth': '1987/10/04', 'email': 'Johannesjacob@gmail.com',
      'cellphoneNumber': '0835652002'
    },
    {
      'token': 26, 'name': 'David', 'surname': 'Booysen', 'maidenName': '', 'initials': 'D', 'nationality': 'South African',
      'idNumber': '2501014800085', 'dateOfBirth': '1995/10/04', 'email': 'David.Booysen@gmail.com',
      'cellphoneNumber': '0835652002'
    },
    {
      'token': 27, 'name': 'Thabiso', 'surname': 'Makgolane', 'maidenName': '', 'initials': 'T', 'nationality': 'South African',
      'idNumber': '9110045508086', 'dateOfBirth': '1991/10/04', 'email': 'Thabiso@gmail.com',
      'cellphoneNumber': '0835652002'
    },
    {
      'token': 28, 'name': 'kgadi', 'surname': 'Mathebula', 'maidenName': '', 'initials': 'K', 'nationality': 'South African',
      'idNumber': '8810045508086', 'dateOfBirth': '1988/10/04', 'email': 'kgadi@gmail.com',
      'cellphoneNumber': '0825652002'
    },
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
