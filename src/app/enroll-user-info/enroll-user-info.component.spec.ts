import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollUserInfoComponent } from './enroll-user-info.component';

describe('EnrollUserInfoComponent', () => {
  let component: EnrollUserInfoComponent;
  let fixture: ComponentFixture<EnrollUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
