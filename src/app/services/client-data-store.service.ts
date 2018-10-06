import {Injectable} from '@angular/core';
import {ClientDataStore} from './client-data-store';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserData} from '../models/user-data';
import {Observable, Subject} from 'rxjs';
import {UserSettings} from '../models/user-settings';
import {UserMonth} from '../models/user-month';
import {LoadingIndicator} from './loading-indicator';
import {UserCategory} from '../models/user-category';
import {monthNames} from './firebase-register.service';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ClientDataStoreService implements ClientDataStore {
  constructor(private database: AngularFirestore,
              private loadingIndicator: LoadingIndicator) {
  }

  private _$userData: Subject<UserData> = new Subject<UserData>();

  public get $userData(): Observable<UserData> {
    return this._$userData.asObservable();
  }

  private _$userSettings: Subject<UserSettings> = new Subject<UserSettings>();

  public get $userSettings(): Observable<UserSettings> {
    return this._$userSettings.asObservable();
  }

  private _$userMonths: Subject<UserMonth[]> = new Subject<UserMonth[]>();

  public get $userMonths(): Observable<UserMonth[]> {
    return this._$userMonths.asObservable();
  }
  private _$userCurrentMonth: Subject<UserMonth> = new Subject<UserMonth>();

  public get $userCurrentMonth(): Observable<UserMonth> {
    return this._$userCurrentMonth.asObservable();
  }

  private _$userCategories: Subject<UserCategory[]> = new Subject<UserCategory[]>();

  public get $userCategories(): Observable<UserCategory[]> {
    return this._$userCategories.asObservable();
  }

  public getUserData(userId: string): void {
    this.loadingIndicator.triggerLoading();
    let userData: UserData;
    this.database.collection('users').doc(userId).get().subscribe(response => {
      const databaseData = response.data();
      userData = new UserData(databaseData.email, databaseData.name, databaseData.surname, databaseData.uid);
      this._$userData.next(userData);
      this.loadingIndicator.finishLoading();
    });
  }

  public getUserSettings(userId: string): void {
    this.loadingIndicator.triggerLoading();
    let userSettings: UserSettings;
    this.database.collection('settings').doc(userId).get().subscribe(response => {
      const databaseData = response.data();
      userSettings = new UserSettings(databaseData.theme);
      this._$userSettings.next(userSettings);
      this.loadingIndicator.finishLoading();
    });
  }

  public getUserMonths(userId: string): void {
    this.loadingIndicator.triggerLoading();
    let userMonths: UserMonth[] = [];
    this.database.collection('months').doc(userId).get().subscribe(response => {
      const databaseData = response.data();
      userMonths = databaseData.map(month => new UserMonth(month.month));
      this._$userMonths.next(userMonths);
      this.loadingIndicator.finishLoading();
    });
  }

  public getCurrentMonth(userId: string): void {
    this.loadingIndicator.triggerLoading();
    const currentYear = new Date().getFullYear();
    const currentMonthName = monthNames[new Date().getMonth()];
    let currentMonth: UserMonth;
    this.database.collection('months').doc(userId).get().subscribe(response => {
      const databaseData = response.data();
      currentMonth = databaseData[currentYear.toString()].find(object => object.month === currentMonthName);
      this._$userCurrentMonth.next(currentMonth);
      this.loadingIndicator.finishLoading();
    });
  }

  public getUserVategories(userId: string): void {
    this.loadingIndicator.triggerLoading();
    let userCategories: UserCategory[];
    this.database.collection('months').doc(userId).get().subscribe(response => {
      const databaseData = response.data();
      userCategories = databaseData.map(category => new UserCategory(category.name));
      this._$userCategories.next(userCategories);
      this.loadingIndicator.finishLoading();
    });
  }
}
