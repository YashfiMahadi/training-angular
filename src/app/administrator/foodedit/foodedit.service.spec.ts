import { TestBed } from '@angular/core/testing';

import { FoodeditService } from './foodedit.service';

describe('FoodeditService', () => {
  let service: FoodeditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodeditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
