// ng generate class user

export class User {
  private _id: string;
  private _nom: string;
  private _prenoms: string;
  private _matricule: string;
  private _poste: string;


  constructor(id: string, nom: string, prenoms: string, matricule: string, poste: string) {
    this._id = id;
    this._nom = nom;
    this._prenoms = prenoms;
    this._matricule = matricule;
    this._poste = poste;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenoms(): string {
    return this._prenoms;
  }

  set prenoms(value: string) {
    this._prenoms = value;
  }

  get matricule(): string {
    return this._matricule;
  }

  set matricule(value: string) {
    this._matricule = value;
  }

  get poste(): string {
    return this._poste;
  }

  set poste(value: string) {
    this._poste = value;
  }
}
