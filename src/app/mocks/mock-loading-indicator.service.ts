import {Injectable} from '@angular/core';
import {LoadingIndicator} from '../services/loading-indicator';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockLoadingIndicator implements LoadingIndicator {
  get isLoading(): boolean {
    return false;
  }

  get isLoadingStream(): Observable<boolean> {
    return of(false);
  }

  finishLoading(): void {
  }

  triggerLoading(): void {
  }
}
