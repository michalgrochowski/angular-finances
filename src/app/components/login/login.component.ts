import {Component, OnInit} from '@angular/core';
import {FirebaseAuth} from '../../services/firebase-auth';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: FirebaseAuth,
              private formBuilder: FormBuilder) {
  }

  private _loginForm: FormGroup;

  get loginForm(): FormGroup {
    return this._loginForm;
  }

  private _wasSubmitted = false;

  get wasSubmitted(): boolean {
    return this._wasSubmitted;
  }

  private _email: FormControl = new FormControl();

  get email(): FormControl {
    return this._email;
  }

  private _password: FormControl = new FormControl();

  get password(): FormControl {
    return this._password;
  }

  ngOnInit(): void {
    this._loginForm = this.formBuilder.group({
      email: new FormControl(['', [Validators.required, Validators.email]]),
      password: new FormControl(['', [Validators.required, Validators.minLength(6)]]),
    });
  }

  public login(email: string, password: string): void {
    this._wasSubmitted = true;
    if (this._loginForm.valid) {
      this.authService.userLogin(email, password);
    }
  }
}
