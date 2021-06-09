import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageComplainComponent } from './manage-complain.component';

describe('ManageComplainComponent', () => {
  let component: ManageComplainComponent;
  let fixture: ComponentFixture<ManageComplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageComplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageComplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
