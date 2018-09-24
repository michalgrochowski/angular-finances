import {Injectable} from '@angular/core';
import {ClientDataStore} from './client-data-store';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserData} from '../models/user-data';
import {Observable, Subject} from 'rxjs';
import {UserSettings} from '../models/user-settings';
import {UserMonth} from '../models/user-month';

@Injectable({
  providedIn: 'root'
})
export class ClientDataStoreService implements ClientDataStore {
  constructor(private database: AngularFirestore) {
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

  public getUserData(userId: string): void {
    let userData: UserData;
    this.database.collection('users').doc(userId).get().subscribe(response => {
      const databaseData = response.data();
      userData = new UserData(databaseData.email, databaseData.name, databaseData.surname, databaseData.uid);
      this._userDataStream.next(userData);
    });
  }

  public getUserSettings(userId: string): void {
    let userSettings: UserSettings;
    this.database.collection('settings').doc(userId).get().subscribe(response => {
      const databaseData = response.data();
      userSettings = new UserSettings(databaseData.theme);
      this._userSettingsStream.next(userSettings);
    });
  }

  public getUserMonths(userId: string): void {
    let userMonths: UserMonth[];
    this.database.collection('months').doc(userId).get().subscribe(response => {
      const databaseData = response.data();
      userMonths = [new UserMonth(databaseData.month)];
      this._userMonthsStream.next(userMonths);
    });
  }
}