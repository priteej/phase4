import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAppComponent } from './angular-app.component';

describe('AngularAppComponent', () => {
  let component: AngularAppComponent;
  let fixture: ComponentFixture<AngularAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
