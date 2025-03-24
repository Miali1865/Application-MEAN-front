import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamelayoutComponent } from './samelayout.component';

describe('SamelayoutComponent', () => {
  let component: SamelayoutComponent;
  let fixture: ComponentFixture<SamelayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamelayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
