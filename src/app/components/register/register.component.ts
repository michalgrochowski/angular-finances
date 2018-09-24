import {Component, OnInit} from '@angular/core';
import {FirebaseAuth} from '../../services/firebase-auth';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {FirebaseRegister} from '../../services/firebase-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private authService: FirebaseAuth,
              private register: FirebaseRegister) {
  }

  private _registerForm: FormGroup = null;

  get registerForm(): FormGroup {
    return this._registerForm;
  }

  private _wasSubmitted = false;

  get wasSubmitted(): boolean {
    return this._wasSubmitted;
  }

  get name(): AbstractControl {
    return this._registerForm.get('name');
  }

  get surname(): AbstractControl {
    return this._registerForm.get('surname');
  }

  get email(): AbstractControl {
    return this._registerForm.get('email');
  }

  get password(): AbstractControl {
    return this._registerForm.get('password');
  }

  ngOnInit(): void {
    this.createForm();
  }

  public registerNewUser(name: string, surname: string, email: string, password: string): void {
    this._wasSubmitted = true;
    if (this._registerForm.valid) {
      this.register.registerNewUser(name, surname, email, password);
      this._wasSubmitted = false;
    }
  }

  public createForm(): void {
    this._registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
}
