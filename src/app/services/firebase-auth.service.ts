import {Injectable} from '@angular/core';
import {FirebaseAuth} from './firebase-auth';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService implements FirebaseAuth {

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router) {
  }

  public userLogin(email: string, password: string): void {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/user]']);
      }).catch(error => console.log(error));
  }

  public userLogOut(): void {
    this.firebaseAuth.auth.signOut().then(() => {
      this.router.navigate(['/login]']);
    });
  }

  public isUserSignedIn(): void {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);
        this.router.navigate(['/user]']);
      } else {
        console.log('user is not signed in');
      }
    });
  }
}
