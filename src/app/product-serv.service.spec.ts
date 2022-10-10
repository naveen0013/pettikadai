import { TestBed } from '@angular/core/testing';

import { ProductServService } from './product-serv.service';

describe('ProductServService', () => {
  let service: ProductServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
