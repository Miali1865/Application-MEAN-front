import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAccueilComponent } from './layout-accueil.component';

describe('LayoutAccueilComponent', () => {
  let component: LayoutAccueilComponent;
  let fixture: ComponentFixture<LayoutAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutAccueilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
