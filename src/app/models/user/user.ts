// ng generate class user

export class User {
  private _name: string;
  private _email: string;
  private _role: string;


  constructor(name: string, email: string, role: string) {
    this._name = name;
    this._email = email;
    this._role = role;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value; 
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }
}
