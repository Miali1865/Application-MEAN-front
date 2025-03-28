import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUtilisateursManagerComponent } from './gestion-utilisateurs-manager.component';

describe('GestionUtilisateursManagerComponent', () => {
  let component: GestionUtilisateursManagerComponent;
  let fixture: ComponentFixture<GestionUtilisateursManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionUtilisateursManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionUtilisateursManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
