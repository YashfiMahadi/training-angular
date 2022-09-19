import { TestBed } from '@angular/core/testing';

import { FoodaddService } from './foodadd.service';

describe('FoodaddService', () => {
  let service: FoodaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
