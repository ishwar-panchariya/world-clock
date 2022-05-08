import { TestBed } from '@angular/core/testing';

import { WorldClockApiService } from './world-clock-api.service';

describe('WorldClockApiService', () => {
  let service: WorldClockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldClockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
