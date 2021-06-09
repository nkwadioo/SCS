import { Injectable } from '@angular/core';

export interface Regex {
  exp: string;
  msg: string;
}

@Injectable({
  providedIn: 'root'
})


export class RGXService {

  constructor() { }

  tel(): any {
    return ({
      exp: '^[0][1-9][0-9]{8}$',
      msg: 'Input of 10 digits starting with 0 accepted'
    });
  }

  email(): any {
    return ({
      // tslint:disable-next-line:max-line-length
      exp: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9].(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
      msg: 'Invalid email'
    });
  }
  id(): any {
    return ({
      // tslint:disable-next-line:max-line-length
      exp: '(?<Year>[0-9][0-9])(?<Month>([0][1-9])|([1][0-2]))(?<Day>([0-2][0-9])|([3][0-1]))(?<Gender>[0-9])(?<Series>[0-9]{3})(?<Citizenship>[0-9])(?<Uniform>[0-9])(?<Control>[0-9])',
      msg: 'ID is ivalid'
    });
  }

  alphabetic(): any {
    return ({
      exp: '^[a-zA-Z_ ]*$',
      msg: 'Alphabetic input only'
    });
  }
  numeric(): any {
    return ({
      exp: '^[0-9]*$',
      msg: 'Numeric input only'
    });
  }

   alphanum(): any {
    return ({
      exp: '^[a-zA-Z0-9_]*$',
      msg: 'Numeric input only'
    });
  }





  // rgx = {
  //   aphanum: {
  //     rgx: '^[a-zA-Z0-9_]*$',
  //     msg: 'alpha numeric input only'
  //   },

  //   alphabetic: {
  //     exp: '^[a-zA-Z_]*$',
  //     msg: 'Alphabetic input only'
  //   },
  //   numeric: {
  //     exp: '^[0-9]*$',
  //     msg: 'Numeric input only'
  //   },
  //   names: {
  //     rgx: '^(?=.{1,45}$)[a-zA-Z]+(?:[-\s][a-zA-Z]+)*$',
  //     msg: 'Alphabets,-,space input only'
  //   },
  //   name: {
  //     exp: '^[a-zA-Z]+([- \s][a-zA-Z]+){0,3}$',
  //     msg: 'Alphabets and - input only accepted'
  //   },
  //   tel: {
  //     exp: '^[0][1-9][0-9]{8}$',
  //     msg: 'Input of 10 digits starting with 0 accepted'
  //   },
  //   text: {
  //     exp: '^[\\w]+([- \s][\\w]+)*$',
  //     msg: 'Invalid input',
  //     rep: '/[^A-Z,a-z,0-9,-,\',_,\s]/g'
  //   },
  //   textspace: {
  //     exp: '^[a-zA-Z0-9\\\\/ @*&()-_]*$',
  //     msg: 'Invalid input'
  //   },
  //   regNum: {
  //     exp: '^[a-zA-Z0-9\\\\/ _()-]*$',
  //     msg: 'Invalid input'
  //   },
  //   saIDNum: {
  //     // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:max-line-length
  //     exp: '(?<Year>[0-9][0-9])(?<Month>([0][1-9])|([1][0-2]))(?<Day>([0-2][0-9])|([3][0-1]))(?<Gender>[0-9])(?<Series>[0-9]{3})(?<Citizenship>[0-9])(?<Uniform>[0-9])(?<Control>[0-9])',
  //     msg: 'ID is ivalid'
  //   },
  //   regnum: {
  //     exp: '^[0-9A-Za-z \\\\/.s-]*',
  //     msg: 'Invalid input'

  //   },
  //   saCellNumber: {
  //     exp: '0((60[3-9]|64[0-5]|66[0-5])\d{6}|(7[1-4689]|6[1-3]|8[1-4])\d{7})',
  //     msg: 'Invalid SA number'
  //   },
  //   email: {
  //
  // tslint:disable-next-line:max-line-length
  //     exp: '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
  //     msg: 'Invalid email'
  //   }
  // };
}


