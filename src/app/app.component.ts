import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { DialogsService } from './shared/dialogs.service';
// import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router, private dialog: DialogsService,
    private apiservice: ApiService, private httpService: HttpClient) { }

  ngOnInit() {

    // const authenticate = this.apiservice.authenticated();
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
      let initalHeight = 0;
      window.onscroll = function () {
        const appbody = document.getElementsByClassName('app-body')[0];
        const bodyObj = document.body;
        if (appbody.clientHeight && bodyObj.style) {
          if (initalHeight !== appbody.clientHeight) {
            bodyObj.style.height = appbody.clientHeight + 'px';
            initalHeight = appbody.clientHeight;
          }
        }
        // const bodyObj = document.body.style.height = appbody;

      };

    });
  }
}
