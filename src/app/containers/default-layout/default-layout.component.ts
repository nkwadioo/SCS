import { Component, OnDestroy, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { ApiService } from '../../services/api.service';
import { DialogsService } from '../../shared/dialogs.service';
import { async } from 'q';
import { SessionsService } from '../../services/sessions.service';
import { ReferenceDataService } from '../../services/ReferenceDataService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})

export class DefaultLayoutComponent implements OnDestroy, OnInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  public loggedUser: any;
  candidates: any[] = this.refData.Profiles;
  screen = window.screen.width;

  constructor(private refData: ReferenceDataService, private apiservice: ApiService,
    private dialog: DialogsService, private session: SessionsService,
    @Inject(DOCUMENT) _document?: any) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnInit() {
    const token = sessionStorage.getItem('token');
    const candidate = this.candidates.find((s) => ((token) === s.token.toString()));
    this.session.loggedUser = candidate;
    const portalData = this.session.loggedUser;
    this.loggedUser = 'Welcome, ' + portalData['name'] + ' ' + portalData['surname'] + ' ';
    this.apiservice.userID = portalData['idNumber'];

    //  if (this.apiservice.authenticated()) {
    //   this.apiservice.getProfile().toPromise().then(data => {
    //       sessionStorage.setItem('user', JSON.stringify(data));
    //       this.session.loggedUser = data;
    //         const portalData =  this.session.loggedUser;
    //       this.loggedUser = 'Welcome, ' + portalData['name'] + ' ' + portalData['surname'] + ' ';
    //       this.apiservice.userID = portalData['idNumber'];
    //     })
    //     .catch(error => {

    //       this.dialog.Alert('Failed to get your Profile from Portal, you will be taken back to portal login for authentication.')
    //       // tslint:disable-next-line: deprecation
    //       .afterClosed().subscribe(respond => {
    //         window.location.href = 'http://cit.eservices.gov.za/tonkana/login/home.jsf';
    //       }
    //       );
    //     });
    // } else {
    //   this.dialog.Alert('Your were not authenticated.' +
    //     'You can only access this application from the portal.');
    //     window.location.href = 'http://cit.eservices.gov.za/tonkana/login/home.jsf';
    // }
   }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}



