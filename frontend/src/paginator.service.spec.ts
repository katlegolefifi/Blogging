/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaginatorService } from './paginator.service';

describe('Service: Paginator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginatorService]
    });
  });

  it('should ...', inject([PaginatorService], (service: PaginatorService) => {
    expect(service).toBeTruthy();
  }));
});
