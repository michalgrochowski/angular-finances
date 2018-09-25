import {TestBed} from '@angular/core/testing';
import {AuthGuardService} from './auth-guard.service';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

class MockAngularFireAuth {
}

describe('AuthGuardService', () => {
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule.withRoutes([]),
    ],
    providers: [
      {provide: Router, useValue: mockRouter},
      {provide: AngularFireAuth, useClass: MockAngularFireAuth},
    ]
  }));

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });
});
