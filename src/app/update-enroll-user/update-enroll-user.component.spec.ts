import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEnrollUserComponent } from './update-enroll-user.component';

describe('UpdateEnrollUserComponent', () => {
  let component: UpdateEnrollUserComponent;
  let fixture: ComponentFixture<UpdateEnrollUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEnrollUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEnrollUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
