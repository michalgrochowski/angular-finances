import {Injectable} from '@angular/core';
import {FirebaseRegister} from './firebase-register';
import {AngularFireAuth} from '@angular/fire/auth';
import {FirebaseAuth} from './firebase-auth';
import {AngularFirestore} from '@angular/fire/firestore';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

@Injectable({
  providedIn: 'root'
})
export class FirebaseRegisterService implements FirebaseRegister {

  constructor(private authService: FirebaseAuth,
              private firebaseAuth: AngularFireAuth,
              private database: AngularFirestore) {
  }

  public registerNewUser(name: string, surname: string, email: string, password: string): void {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user.user.uid);
        this.database.collection('users').doc(user.user.uid).set({
          name: name,
          surname: surname,
          uid: user.user.uid,
          email: user.user.email
        }).then(() => {
          this.database.collection('months').doc(user.user.uid).set({
            [new Date().getFullYear()]: [
              {
                month: monthNames[new Date().getMonth()],
              }
            ]
          }).then(() => {
            this.database.collection('settings').doc(user.user.uid).set({
              theme: 'dark'
            });
          });
        }).then(() => this.authService.isUserSignedIn());
      })
      .catch(error => console.log(error));
  }
}
