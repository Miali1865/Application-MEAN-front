import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmecanicienComponent } from './dashboardmecanicien.component';

describe('DashboardmecanicienComponent', () => {
  let component: DashboardmecanicienComponent;
  let fixture: ComponentFixture<DashboardmecanicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardmecanicienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardmecanicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
