import {Injectable} from '@angular/core';
import {LoadingIndicator} from './loading-indicator';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorService implements LoadingIndicator {
  constructor() {
  }

  private _isLoading = false;

  public get isLoading(): boolean {
    return this._isLoading;
  }

  private _isLoadingStream: Subject<boolean> = new Subject<boolean>();

  public get isLoadingStream(): Observable<boolean> {
    return this._isLoadingStream.asObservable();
  }

  public triggerLoading(): void {
    this._isLoading = true;
    this._isLoadingStream.next(this._isLoading);
  }

  public finishLoading(): void {
    this._isLoading = false;
    this._isLoadingStream.next(this._isLoading);
  }
}
