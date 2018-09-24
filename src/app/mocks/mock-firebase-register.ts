import {FirebaseRegister} from '../services/firebase-register';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockFirebaseRegister implements FirebaseRegister {
  registerNewUser(name: string, surname: string, email: string, password: string): void {
  }
}
