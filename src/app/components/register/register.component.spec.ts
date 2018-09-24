import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterComponent} from './register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FirebaseAuth} from '../../services/firebase-auth';
import {MockFirebaseAuth} from '../../mocks/mock-firebase-auth';
import {FirebaseRegister} from '../../services/firebase-register';
import {MockFirebaseRegister} from '../../mocks/mock-firebase-register';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let firbaseAuth: FirebaseAuth;
  let firbaseRegister: FirebaseRegister;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        {provide: FirebaseAuth, useClass: MockFirebaseAuth},
        {provide: FirebaseRegister, useClass: MockFirebaseRegister},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    firbaseAuth = TestBed.get(FirebaseAuth);
    firbaseRegister = TestBed.get(FirebaseRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
