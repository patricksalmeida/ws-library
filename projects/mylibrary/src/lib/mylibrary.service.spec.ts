import { TestBed } from '@angular/core/testing';

import { MylibraryService } from './mylibrary.service';

describe('MylibraryService', () => {
  let service: MylibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MylibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
