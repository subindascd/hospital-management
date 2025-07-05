import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsRegistrationComponent } from './doctors-registration.component';

describe('DoctorsRegistrationComponent', () => {
  let component: DoctorsRegistrationComponent;
  let fixture: ComponentFixture<DoctorsRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorsRegistrationComponent]
    });
    fixture = TestBed.createComponent(DoctorsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
