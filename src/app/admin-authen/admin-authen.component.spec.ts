import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthenComponent } from './admin-authen.component';

describe('AdminAuthenComponent', () => {
  let component: AdminAuthenComponent;
  let fixture: ComponentFixture<AdminAuthenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuthenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAuthenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
