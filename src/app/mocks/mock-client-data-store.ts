import {ClientDataStore} from '../services/client-data-store';
import {UserData} from '../models/user-data';
import {Observable, of} from 'rxjs';
import {UserSettings} from '../models/user-settings';
import {UserMonth} from '../models/user-month';
import {Injectable} from '@angular/core';
import {UserCategory} from '../models/user-category';

@Injectable()
export class MockClientDataStore implements ClientDataStore {
  get userMonthsStream(): Observable<UserMonth[]> {
    return of([UserMonth.create('123')]);
  }

  get userCategoriesStream(): Observable<UserCategory[]> {
    return of([UserCategory.create('123')]);
  }

  get userSettingsStream(): Observable<UserSettings> {
    return of(UserSettings.create('dark'));
  }

  get userDataStream(): Observable<UserData> {
    return of(UserData.create('123'));
  }

  getUserVategories(userId: string): void {
  }

  getUserMonths(userId: string): void {
  }

  getUserSettings(userId: string): void {
  }

  getUserData(userId: string): void {
  }
}
