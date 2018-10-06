import {Observable} from 'rxjs';

export abstract class LoadingIndicator {
  public abstract get isLoading(): boolean;

  public abstract get $isLoading(): Observable<boolean>;

  public abstract triggerLoading(): void;

  public abstract finishLoading(): void;
}
