import {Observable} from 'rxjs';
import {UserData} from '../models/user-data';
import {UserSettings} from '../models/user-settings';
import {UserMonth} from '../models/user-month';

export abstract class ClientDataStore {
  public abstract get userDataStream(): Observable<UserData>;

  public abstract get userSettingsStream(): Observable<UserSettings>;

  public abstract get userMonthsStream(): Observable<UserMonth[]>;

  public abstract getUserData(userId: string): void;

  public abstract getUserSettings(userId: string): void;

  public abstract getUserMonths(userId: string): void;
}
