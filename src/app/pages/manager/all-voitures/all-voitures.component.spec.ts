import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVoituresComponent } from './all-voitures.component';

describe('AllVoituresComponent', () => {
  let component: AllVoituresComponent;
  let fixture: ComponentFixture<AllVoituresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllVoituresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllVoituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
