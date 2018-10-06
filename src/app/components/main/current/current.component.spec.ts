import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrentComponent} from './current.component';
import {ClientDataStore} from '../../../services/client-data-store';
import {MockClientDataStore} from '../../../mocks/mock-client-data-store';
import {LoadingIndicator} from '../../../services/loading-indicator';
import {MockLoadingIndicator} from '../../../mocks/mock-loading-indicator.service';

describe('CurrentComponent', () => {
  let component: CurrentComponent;
  let clientDataStore: ClientDataStore;
  let loadingIndicator: LoadingIndicator;
  let fixture: ComponentFixture<CurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentComponent],
      providers: [
        {provide: ClientDataStore, useClass: MockClientDataStore},
        {provide: LoadingIndicator, useClass: MockLoadingIndicator},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentComponent);
    component = fixture.componentInstance;
    clientDataStore = TestBed.get(ClientDataStore);
    loadingIndicator = TestBed.get(LoadingIndicator);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
