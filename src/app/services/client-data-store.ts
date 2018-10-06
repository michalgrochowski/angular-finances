import {Observable} from 'rxjs';
import {UserData} from '../models/user-data';
import {UserSettings} from '../models/user-settings';
import {UserMonth} from '../models/user-month';
import {UserCategory} from '../models/user-category';

export abstract class ClientDataStore {
  public abstract get $userData(): Observable<UserData>;

  public abstract get $userSettings(): Observable<UserSettings>;

  public abstract get $userMonths(): Observable<UserMonth[]>;

  public abstract get $userCategories(): Observable<UserCategory[]>;

  public abstract get $userCurrentMonth(): Observable<UserMonth>;

  public abstract getUserData(userId: string): void;

  public abstract getUserSettings(userId: string): void;

  public abstract getUserMonths(userId: string): void;

  public abstract getUserVategories(userId: string): void;

  public abstract getCurrentMonth(userId: string): void;
}
