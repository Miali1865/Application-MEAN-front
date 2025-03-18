import { TestBed } from '@angular/core/testing';

import { LoaderspinnerService } from './loaderspinner.service';

describe('LoaderspinnerService', () => {
  let service: LoaderspinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderspinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
