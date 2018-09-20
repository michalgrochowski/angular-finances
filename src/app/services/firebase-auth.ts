export abstract class FirebaseAuth {
  public abstract userLogin(email: string, password: string): void;

  public abstract userLogOut(): void;

  public abstract isUserSignedIn(): void
}
