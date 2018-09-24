export class UserData {
  constructor(private _email: string,
              private _name: string,
              private _surname: string,
              private _uid: string) {
  }

  get email(): string {
    return this._email;
  }

  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }

  get uid(): string {
    return this._uid;
  }

  public static create(name: string): UserData {
    return new UserData('123@123.com', name, '123', '123');
  }
}
