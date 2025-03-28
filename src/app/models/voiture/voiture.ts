import {User} from '../user/user';
import {MesVoituresService} from '../../services/voiture/mes-voitures.service';
import {model} from '@angular/core';

export class Voiture {
  private _id!: string
  private _client!: User|null
  private _brand!: string
  private _typeOfCar!: string
  private _model!: string
  private _year!: number|null
  private _plateNumber!: string


  constructor(id: string, client: User | null, brand: string, typeOfCar: string, model: string, year: number | null, plateNumber: string) {
    this._id = id;
    this._client = client;
    this._brand = brand;
    this._typeOfCar = typeOfCar;
    this._model = model;
    this._year = year;
    this._plateNumber = plateNumber;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get client(): User {
    return <User>this._client;
  }

  set client(value: User) {
    this._client = value;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(value: string) {
    this._brand = value;
  }

  get typeOfCar(): string {
    return this._typeOfCar;
  }

  set typeOfCar(value: string) {
    this._typeOfCar = value;
  }

  get model(): string {
    return this._model;
  }

  set model(value: string) {
    this._model = value;
  }

  get year(): number | null {
    return this._year;
  }

  set year(value: number | null) {
    this._year = value;
  }

  get plateNumber(): string {
    return this._plateNumber;
  }

  set plateNumber(value: string) {
    this._plateNumber = value;
  }
}
