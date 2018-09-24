import {Component, OnInit} from '@angular/core';
import {FirebaseAuth} from '../../services/firebase-auth';
import {User} from 'firebase';
import {ClientDataStore} from '../../services/client-data-store';
import {UserData} from '../../models/user-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private authService: FirebaseAuth,
              private clientDataStore: ClientDataStore) {
  }

  private _currentUser: User = null;

  get currentUser(): User {
    return this._currentUser;
  }

  private _currentUserData: UserData = null;

  get currentUserData(): UserData {
    return this._currentUserData;
  }

  ngOnInit(): void {
    this._currentUser = this.authService.getCurrentUser();
    this.clientDataStore.getUserData(this._currentUser.uid);
    this.clientDataStore.userDataStream.subscribe(userData => this._currentUserData = userData);
  }
}
