import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AngularFirestore} from '@angular/fire/firestore';
import {of} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {MainComponent} from './components/main/main.component';

describe('AppComponent', () => {
  const data = of({1: 1});
  const collectionStub = {
    valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
  };
  const angularFiresotreStub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([{path: 'main', component: MainComponent}]),
      ],
      providers: [
        {provide: AngularFirestore, useValue: angularFiresotreStub},
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
