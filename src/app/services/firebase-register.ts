export abstract class FirebaseRegister {
  public abstract registerNewUser(name: string, surname: string, email: string, password: string): void;
}
