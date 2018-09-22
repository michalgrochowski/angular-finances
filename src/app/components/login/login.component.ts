import {Component, OnInit} from '@angular/core';
import {FirebaseAuth} from '../../services/firebase-auth';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: FirebaseAuth) {
  }

  private _loginForm: FormGroup = null;

  get loginForm(): FormGroup {
    return this._loginForm;
  }

  private _wasSubmitted = false;

  get wasSubmitted(): boolean {
    return this._wasSubmitted;
  }

  get email(): AbstractControl {
    return this._loginForm.get('email');
  }

  get password(): AbstractControl {
    return this._loginForm.get('password');
  }

  ngOnInit(): void {
    this._loginForm = new FormGroup({
      'email': new FormControl(['', [Validators.required, Validators.email]]),
      'password': new FormControl(['', [Validators.required, Validators.minLength(6)]]),
    });
  }

  public login(email: string, password: string): void {
    this._wasSubmitted = true;
    if (this.loginForm.valid) {
      this.authService.userLogin(email, password);
      this._wasSubmitted = false;
    }
  }
}
