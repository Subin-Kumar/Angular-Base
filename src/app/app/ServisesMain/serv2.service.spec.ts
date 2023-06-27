/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Serv2Service } from './serv2.service';

describe('Service: Serv2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Serv2Service]
    });
  });

  it('should ...', inject([Serv2Service], (service: Serv2Service) => {
    expect(service).toBeTruthy();
  }));
});
