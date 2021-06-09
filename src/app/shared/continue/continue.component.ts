import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-continue',
  templateUrl: './continue.component.html',
  styleUrls: ['./continue.component.scss']
})

export class ContinueComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public quit) { }
}
