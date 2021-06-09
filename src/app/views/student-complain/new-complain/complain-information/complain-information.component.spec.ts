import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainInformationComponent } from './complain-information.component';

describe('ComplainInformationComponent', () => {
  let component: ComplainInformationComponent;
  let fixture: ComponentFixture<ComplainInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
