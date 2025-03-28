import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierManagerComponent } from './calendrier-manager.component';

describe('CalendrierManagerComponent', () => {
  let component: CalendrierManagerComponent;
  let fixture: ComponentFixture<CalendrierManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendrierManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendrierManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
