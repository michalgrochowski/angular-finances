export class UserMonth {
  constructor(private _month: string) {
  }

  get month(): string {
    return this._month;
  }

  public static create(month: string): UserMonth {
    return new UserMonth(month);
  }
}
