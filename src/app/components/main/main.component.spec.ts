import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MainComponent} from './main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FirebaseAuth} from '../../services/firebase-auth';
import {MockFirebaseAuth} from '../../mocks/mock-firebase-auth';
import {ClientDataStore} from '../../services/client-data-store';
import {MockClientDataStore} from '../../mocks/mock-client-data-store';
import {LoadingIndicator} from '../../services/loading-indicator';
import {MockLoadingIndicator} from '../../mocks/mock-loading-indicator.service';
import {RouterTestingModule} from '@angular/router/testing';
import {CurrentComponent} from './current/current.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let firbaseAuth: FirebaseAuth;
  let clientDataStore: ClientDataStore;
  let loadingIndicator: LoadingIndicator;
  const mockFirebaseUser: firebase.UserInfo = {
    displayName: null,
    email: null,
    phoneNumber: null,
    photoURL: null,
    providerId: null,
    uid: '123'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, CurrentComponent],
      imports: [ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([{path: 'current', component: CurrentComponent}]),
      ],
      providers: [
        {provide: FirebaseAuth, useClass: MockFirebaseAuth},
        {provide: ClientDataStore, useClass: MockClientDataStore},
        {provide: LoadingIndicator, useClass: MockLoadingIndicator},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    firbaseAuth = TestBed.get(FirebaseAuth);
    clientDataStore = TestBed.get(ClientDataStore);
    loadingIndicator = TestBed.get(LoadingIndicator);
    fixture.detectChanges();
  });

  it('should create', () => {
    component.currentUser = mockFirebaseUser;
    console.log(component.currentUser);
    expect(component).toBeTruthy();
  });
});
