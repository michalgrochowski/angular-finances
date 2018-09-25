import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NavigationComponent} from './navigation.component';
import {ClientDataStore} from '../../../services/client-data-store';
import {MockClientDataStore} from '../../../mocks/mock-client-data-store';
import {FirebaseAuth} from '../../../services/firebase-auth';
import {MockFirebaseAuth} from '../../../mocks/mock-firebase-auth';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let clientDataStore: ClientDataStore;
  let firebaseAuth: FirebaseAuth;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent],
      providers: [
        {provide: ClientDataStore, useClass: MockClientDataStore},
        {provide: FirebaseAuth, useClass: MockFirebaseAuth},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    clientDataStore = TestBed.get(ClientDataStore);
    firebaseAuth = TestBed.get(FirebaseAuth);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
