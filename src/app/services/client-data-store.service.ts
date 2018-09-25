import {Injectable} from '@angular/core';
import {ClientDataStore} from './client-data-store';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserData} from '../models/user-data';
import {Observable, Subject} from 'rxjs';
import {UserSettings} from '../models/user-settings';
import {UserMonth} from '../models/user-month';
import {LoadingIndicator} from './loading-indicator';
import {UserCategory} from '../models/user-category';

@Injectable({
  providedIn: 'root'
})
export class ClientDataStoreService implements ClientDataStore {
  constructor(private database: AngularFirestore,
              private loadingIndicator: LoadingIndicator) {
  }

  private _userDataStream: Subject<UserData> = new Subject<UserData>();

  public get userDataStream(): Observable<UserData> {
    return this._userDataStream.asObservable();
  }

  private _userSettingsStream: Subject<UserSettings> = new Subject<UserSettings>();

  public get userSettingsStream(): Observable<UserSettings> {
    return this._userSettingsStream.asObservable();
  }

  private _userMonthsStream: Subject<UserMonth[]> = new Subject<UserMonth[]>();

  public get userMonthsStream(): Observable<UserMonth[]> {
    return this._userMonthsStream.asObservable();
  }

  private _userCategoriesStream: Subject<UserCategory[]> = new Subject<UserCategory[]>();

  public get userCategoriesStream(): Observable<UserCategory[]> {
    return this._userCategoriesStream.asObservable();
  }

  public getUserData(userId: string): void {
    this.loadingIndicator.triggerLoading();
    let userData: UserData;
    this.database.collection('users').doc(userId).get().subscribe(response => {
      const databaseData = response.data();
      userData = new UserData(databaseData.email, databaseData.name, databaseData.surname, databaseData.uid);
      this._userDataStream.next(userData);
      this.loadingIndicator.finishLoading();
    });
  }

  public getUserSettings(userId: string): void {
    this.loadingIndicator.triggerLoading();
    let userSettings: UserSettings;
    this.database.collection('settings').doc(userId).get().subscribe(response => {
      const databaseData = response.data();
      userSettings = new UserSettings(databaseData.theme);
      this._userSettingsStream.next(userSettings);
      this.loadingIndicator.finishLoading();
    });
  }

  public getUserMonths(userId: string): void {
    this.loadingIndicator.triggerLoading();
    let userMonths: UserMonth[] = [];
    this.database.collection('months').doc(userId).get().subscribe(response => {
      const databaseData = response.data();
      userMonths = databaseData.map(month => new UserMonth(month.month));
      this._userMonthsStream.next(userMonths);
      this.loadingIndicator.finishLoading();
    });
  }

  public getUserVategories(userId: string): void {
    this.loadingIndicator.triggerLoading();
    let userCategories: UserCategory[];
    this.database.collection('months').doc(userId).get().subscribe(response => {
      const databaseData = response.data();
      userCategories = databaseData.map(category => new UserCategory(category.name));
      this._userCategoriesStream.next(userCategories);
      this.loadingIndicator.finishLoading();
    });
  }
}
