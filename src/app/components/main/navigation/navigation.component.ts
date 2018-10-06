import {Component, OnInit} from '@angular/core';
import {ClientDataStore} from '../../../services/client-data-store';
import {UserData} from '../../../models/user-data';
import {FirebaseAuth} from '../../../services/firebase-auth';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private clientDataStore: ClientDataStore,
              private firebaseAuth: FirebaseAuth) {
  }

  private _currentUserData: UserData = null;

  get currentUserData(): UserData {
    return this._currentUserData;
  }

  ngOnInit(): void {
    this.clientDataStore.$userData.subscribe(userData => this._currentUserData = userData);
  }

  public logOut(): void {
    this.firebaseAuth.userLogOut();
  }
}
