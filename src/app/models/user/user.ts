// ng generate class user

export class User {
  private _id: string;
  private _name: string;
  private _email: string|null;
  private _role: string;


  constructor(id:string, name: string, email: string | null, role: string) {
    this._id = id;
    this._name = name;
    if (email){
      this._email = email;
    }else {
      this._email = null;
    }
    this._role = role;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }


  get email(): string | null {
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
