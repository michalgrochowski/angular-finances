import {FirebaseRegister} from '../services/firebase-register';

export class MockFirebaseRegister implements FirebaseRegister {
  registerNewUser(name: string, surname: string, email: string, password: string): void {
  }
}
