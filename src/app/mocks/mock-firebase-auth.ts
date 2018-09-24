import {FirebaseAuth} from '../services/firebase-auth';
import {User} from 'firebase';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockFirebaseAuth implements FirebaseAuth {
  isUserSignedIn(): void {
  }

  getCurrentUser(): User {
    return null;
  }

  userLogOut(): void {
  }

  userLogin(email: string, password: string): void {
  }
}
