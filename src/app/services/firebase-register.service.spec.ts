import { TestBed } from '@angular/core/testing';

import { FirebaseRegisterService } from './firebase-register.service';

describe('FirebaseRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseRegisterService = TestBed.get(FirebaseRegisterService);
    expect(service).toBeTruthy();
  });
});
