import {Injectable} from '@angular/core';
import {FirebaseRegister} from './firebase-register';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseRegisterService implements FirebaseRegister {

  constructor(private firebaseAuth: AngularFireAuth) {
  }

  public registerNewUser(email: string, password: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then()
      .catch(error => console.log(error));
  }
}
