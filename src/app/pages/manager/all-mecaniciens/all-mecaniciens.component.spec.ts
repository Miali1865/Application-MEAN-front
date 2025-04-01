import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMecaniciensComponent } from './all-mecaniciens.component';

describe('AllMecaniciensComponent', () => {
  let component: AllMecaniciensComponent;
  let fixture: ComponentFixture<AllMecaniciensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllMecaniciensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMecaniciensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
