import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionsService implements OnInit {
  loggedUser = {};
  loggedRoles = [];
  loggedTTC = null;
  loggedToken = null;
  sessionApplication = {};

  constructor() {}
  ngOnInit() {
    this.loggedUser = undefined;
    this.loggedTTC = undefined;
    this.loggedRoles = undefined;
    this.loggedToken = undefined;
    this.sessionApplication = undefined;
  }
}
