import { TestBed } from '@angular/core/testing';

import { MesVoituresService } from './mes-voitures.service';

describe('MesVoituresService', () => {
  let service: MesVoituresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesVoituresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
