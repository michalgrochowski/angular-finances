import {TestBed} from '@angular/core/testing';
import {FirebaseRegisterService} from './firebase-register.service';
import {FirebaseAuth} from './firebase-auth';
import {MockFirebaseAuth} from '../mocks/mock-firebase-auth';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

class MockAngularFireAuth {
}

class MockAngularFirestore {
}

describe('FirebaseRegisterService', () => {
  let service: FirebaseRegisterService;
  let firebaseAuth: FirebaseAuth;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: FirebaseAuth, useClass: MockFirebaseAuth},
      {provide: AngularFireAuth, useClass: MockAngularFireAuth},
      {provide: AngularFirestore, useClass: MockAngularFirestore},
    ]
  }));

  it('should be created', () => {
    service = TestBed.get(FirebaseRegisterService);
    firebaseAuth = TestBed.get(FirebaseAuth);
    expect(service).toBeTruthy();
  });
});
