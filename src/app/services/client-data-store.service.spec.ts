import {TestBed} from '@angular/core/testing';
import {ClientDataStoreService} from './client-data-store.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {LoadingIndicator} from './loading-indicator';
import {MockLoadingIndicator} from '../mocks/mock-loading-indicator.service';

class MockAngularFirestore {
}

describe('ClientDataStoreService', () => {
  let service: ClientDataStoreService;
  let fireStore: AngularFirestore;
  let loadingIndicator: LoadingIndicator;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: AngularFirestore, useClass: MockAngularFirestore},
      {provide: LoadingIndicator, useClass: MockLoadingIndicator},
    ],
  }));

  it('should be created', () => {
    service = TestBed.get(ClientDataStoreService);
    fireStore = TestBed.get(AngularFirestore);
    loadingIndicator = TestBed.get(LoadingIndicator);
    expect(service).toBeTruthy();
  });
});
