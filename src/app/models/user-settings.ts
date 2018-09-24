export class UserSettings {
  constructor(private _theme: string) {
  }

  get theme(): string {
    return this._theme;
  }

  public static create(theme: string): UserSettings {
    return new UserSettings(theme);
  }
}
