export class UserCategory {
  constructor(private _name: string) {
  }

  get name(): string {
    return this._name;
  }

  public static create(name: string): UserCategory {
    return new UserCategory(name);
  }
}
