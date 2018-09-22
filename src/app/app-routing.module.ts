import {MainComponent} from './components/main/main.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CurrentComponent} from './components/main/current/current.component';
import {ArchiveComponent} from './components/main/archive/archive.component';
import {SettingsComponent} from './components/main/settings/settings.component';
import {AuthGuard} from './services/auth-guard';
import {Error404Component} from './components/error404/error404.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '404', component: Error404Component},
  // {path: '**', redirectTo: '404'},
  {
    path: 'main', component: MainComponent, canActivate: [AuthGuard], children: [
      {path: '', redirectTo: 'current', pathMatch: 'full'},
      {path: 'current', component: CurrentComponent},
      {path: 'archive', component: ArchiveComponent},
      {path: 'settings', component: SettingsComponent}
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
