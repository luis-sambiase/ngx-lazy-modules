import { TestBed } from '@angular/core/testing';

import { NgxLazyModulesService } from './ngx-lazy-modules.service';

describe('NgxLazyModulesService', () => {
  let service: NgxLazyModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLazyModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
