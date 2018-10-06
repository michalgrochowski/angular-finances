import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClientDataStore} from '../../../services/client-data-store';
import {LoadingIndicator} from '../../../services/loading-indicator';
import {UserData} from '../../../models/user-data';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit, OnDestroy {
  constructor(private clientDataStore: ClientDataStore,
              private loadingIndicator: LoadingIndicator) {
  }

  private _currentUserData: UserData = null;

  get currentUserData(): UserData {
    return this._currentUserData;
  }

  private _isLoading = false;

  get isLoading(): boolean {
    return this._isLoading;
  }

  private _currentMonthData: any = null;

  get currentMonthData(): any {
    return this._currentMonthData;
  }

  private _$clientDataStore: Subscription = null;

  get $clientDataStore(): Subscription {
    return this._$clientDataStore;
  }

  private _$loadingIndicator: Subscription = null;

  get $loadingIndicator(): Subscription {
    return this._$loadingIndicator;
  }

  private _$currentMonthSubscription: Subscription = null;

  get $currentMonthSubscription(): Subscription {
    return this._$currentMonthSubscription;
  }

  ngOnInit(): void {
    this._$clientDataStore = this.clientDataStore.$userData
      .subscribe(userData => {
        this._currentUserData = userData;
        this.clientDataStore.getCurrentMonth(userData.uid);
      });
    this._$currentMonthSubscription = this.clientDataStore.$userCurrentMonth
      .subscribe(currentMonth => this._currentMonthData = currentMonth);
    this._$loadingIndicator = this.loadingIndicator.$isLoading
      .subscribe(isLoading => this._isLoading = isLoading);
  }

  ngOnDestroy(): void {
    this._$clientDataStore.unsubscribe();
    this._$loadingIndicator.unsubscribe();
  }
}
