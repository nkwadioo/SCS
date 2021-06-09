import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  HideWorkpermit = new BehaviorSubject<any>({});
  SORHide = new BehaviorSubject<any>({});
  AfidavitHide = new BehaviorSubject<any>({});
  ContractNoHide = new BehaviorSubject<any>({});
  DisplayLogPOQSOR = new BehaviorSubject<any>({});
  POQ = new BehaviorSubject<any>({});
  LogbookHide = new BehaviorSubject<any>({});

  private LogbookHideSource = new BehaviorSubject<any>([]);
  LogbookHide$ = this.LogbookHideSource.asObservable();

  private POQSource = new BehaviorSubject<any>([]);
  POQ$ = this.POQSource.asObservable();

  private HideWorkpermitSource = new BehaviorSubject<any>([]);
  HideWorkpermit$ = this.HideWorkpermitSource.asObservable();

  private DisplayLogPOQSORSource = new BehaviorSubject<any>([]);
  DisplayLogPOQSOR$ = this.DisplayLogPOQSORSource.asObservable();


  private SORHideSource = new BehaviorSubject<any>([]);
  SORHide$ = this.SORHideSource.asObservable();

  private ContractNoHideSource = new BehaviorSubject<any>([]);
  ContractNoHide$ = this.ContractNoHideSource.asObservable();

  private AfidavitHideSource = new BehaviorSubject<any>([]);
  AfidavitHide$ = this.AfidavitHideSource.asObservable();

  constructor() { }
}
