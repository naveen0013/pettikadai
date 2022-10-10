import { TestBed } from '@angular/core/testing';

import { EventEmitterServService } from './event-emitter-serv.service';

describe('EventEmitterServService', () => {
  let service: EventEmitterServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEmitterServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
