import {TestBed} from '@angular/core/testing';

import {ClientDataStoreService} from './client-data-store.service';

describe('ClientDataStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientDataStoreService = TestBed.get(ClientDataStoreService);
    expect(service).toBeTruthy();
  });
});
