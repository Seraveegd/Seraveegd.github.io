import { TestBed } from '@angular/core/testing';

import { AffixeService } from './affixe.service';

describe('AffixeService', () => {
  let service: AffixeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffixeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
