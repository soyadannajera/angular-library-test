import { TestBed } from '@angular/core/testing';

import { SiltFlowLibService } from './silt-flow-lib.service';

describe('SiltFlowLibService', () => {
  let service: SiltFlowLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiltFlowLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
