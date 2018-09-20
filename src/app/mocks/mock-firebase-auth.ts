import {FirebaseAuth} from '../services/firebase-auth';

export class MockFirebaseAuth implements FirebaseAuth {
  isUserSignedIn(): void {
  }

  userLogOut(): void {
  }

  userLogin(email: string, password: string): void {
  }
}
