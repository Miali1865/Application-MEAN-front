import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesManagerComponent } from './factures-manager.component';

describe('FacturesManagerComponent', () => {
  let component: FacturesManagerComponent;
  let fixture: ComponentFixture<FacturesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturesManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
