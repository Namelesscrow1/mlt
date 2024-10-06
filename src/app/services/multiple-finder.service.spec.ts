import { TestBed } from '@angular/core/testing';

import { MultipleFinderService } from './multiple-finder.service';

describe('MultipleFinderService', () => {
  let service: MultipleFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
