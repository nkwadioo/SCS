import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmComponent } from './confirm/confirm.component';
import { AlertComponent } from './alert/alert.component';
import { WarningComponent } from './warning/warning.component';
import { ContinueComponent } from './continue/continue.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(private dialog: MatDialog) { }

  Confirm(msg) {
    return this.dialog.open(ConfirmComponent, {
      width: '360px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '180px' },
      data: {
        message: msg
      }
    });
  }

  Alert(msg) {
    return this.dialog.open(AlertComponent, {
      width: '360px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '200px' },
      data: {
        message: msg
      }
    });
  }

  Warning(msg) {
    this.dialog.open(WarningComponent, {
      width: '360px',
      panelClass: 'confirm-dialog-container',
      position: { top: '180px' },
      disableClose: true,
      data: {
        message: msg
      }
    });
  }

  Continue(msg) {
    return this.dialog.open(ContinueComponent, {
      width: '360px',
      panelClass: 'confirm-dialog-container',
      position: { top: '180px' },
      disableClose: true,
      data: {
        message: msg
      }
    });
  }

}
