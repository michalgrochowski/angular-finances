import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MainComponent} from './components/main/main.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FirebaseAuth} from './services/firebase-auth';
import {FirebaseAuthService} from './services/firebase-auth.service';
import {SettingsComponent} from './components/main/settings/settings.component';
import {ArchiveComponent} from './components/main/archive/archive.component';
import {NavigationComponent} from './components/main/navigation/navigation.component';
import {CurrentComponent} from './components/main/current/current.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthGuard} from './services/auth-guard';
import {FirebaseRegister} from './services/firebase-register';
import {FirebaseRegisterService} from './services/firebase-register.service';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    SettingsComponent,
    ArchiveComponent,
    NavigationComponent,
    CurrentComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {provide: FirebaseAuth, useClass: FirebaseAuthService},
    {provide: AuthGuard, useClass: AuthGuardService},
    {provide: FirebaseRegister, useClass: FirebaseRegisterService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
