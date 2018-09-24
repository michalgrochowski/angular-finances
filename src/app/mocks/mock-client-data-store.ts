import {ClientDataStore} from '../services/client-data-store';
import {UserData} from '../models/user-data';
import {Observable, of} from 'rxjs';
import {UserSettings} from '../models/user-settings';
import {UserMonth} from '../models/user-month';

export class MockClientDataStore implements ClientDataStore {
  get userMonthsStream(): Observable<UserMonth[]> {
    return of([]);
  }

  get userSettingsStream(): Observable<UserSettings> {
    return of(UserSettings.create('dark'));
  }

  get userDataStream(): Observable<UserData> {
    return of(UserData.create('123'));
  }

  getUserMonths(userId: string): void {
  }

  getUserSettings(userId: string): void {
  }

  getUserData(userId: string): void {
  }
}
