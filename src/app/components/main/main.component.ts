import {Component, OnInit} from '@angular/core';
import {FirebaseAuth} from '../../services/firebase-auth';
import {ClientDataStore} from '../../services/client-data-store';
import {UserData} from '../../models/user-data';
import {LoadingIndicator} from '../../services/loading-indicator';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private authService: FirebaseAuth,
              private clientDataStore: ClientDataStore,
              private loadingIndicator: LoadingIndicator) {
  }

  private _currentUser: firebase.UserInfo = null;

  get currentUser(): firebase.UserInfo {
    return this._currentUser;
  }

  private _currentUserData: UserData = null;

  get currentUserData(): UserData {
    return this._currentUserData;
  }

  private _isLoading = false;

  get isLoading(): boolean {
    return this._isLoading;
  }

  ngOnInit(): void {
    this._currentUser = this.authService.getCurrentUser();
    this.clientDataStore.userDataStream.subscribe(userData => this._currentUserData = userData);
    this.loadingIndicator.isLoadingStream.subscribe(isLoading => this._isLoading = isLoading);
  }
}
