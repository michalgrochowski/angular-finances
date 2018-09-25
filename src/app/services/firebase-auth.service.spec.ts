import {TestBed} from '@angular/core/testing';
import {FirebaseAuthService} from './firebase-auth.service';
import {FirebaseAuth} from './firebase-auth';
import {MockFirebaseAuth} from '../mocks/mock-firebase-auth';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {ClientDataStore} from './client-data-store';
import {MockClientDataStore} from '../mocks/mock-client-data-store';

class MockAngularFireAuth {
}

describe('FirebaseAuthService', () => {
  let service: FirebaseAuthService;
  let firebaseAuth: FirebaseAuth;
  let clientDataStore: ClientDataStore;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule.withRoutes([]),
    ],
    providers: [
      {provide: FirebaseAuth, useClass: MockFirebaseAuth},
      {provide: AngularFireAuth, useClass: MockAngularFireAuth},
      {provide: Router, useValue: mockRouter},
      {provide: ClientDataStore, useClass: MockClientDataStore},
    ]
  }));

  it('should be created', () => {
    service = TestBed.get(FirebaseAuthService);
    firebaseAuth = TestBed.get(FirebaseAuth);
    clientDataStore = TestBed.get(ClientDataStore);
    expect(service).toBeTruthy();
  });
});
