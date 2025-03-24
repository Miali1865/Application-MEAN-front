import {ServicesReparation} from '../services_reparation/services-reparation';
import {PackService} from '../../services/services/pack.service';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

export class Pack {
  private _id: string | null;
  private _name: string | null;
  private _description: string | null;
  private _services: ServicesReparation[] | null;
  // private static packService: PackService;

  constructor(id: string|null, name: string|null, description: string|null, services: ServicesReparation[]|null) {
    this._id = id?id:null;
    this._name = name?name:null;
    this._description = description?description:null;
    this._services = services?services:null;
  }

  // static getAll(): Observable<Pack[]> {
  //   return Pack.packService.getPacks().pipe(
  //     map(data => data.map(
  //       (packs:
  //          { name: string | null; description: string | null; }
  //       ) => new Pack(null, packs.name, packs.description, null))),
  //     catchError(error => {
  //       // console.error('Erreur lors du chargement des packs:', error);
  //       throw error; // Propager l'erreur
  //     })
  //   );
  // }


  static getAll_name_description$(packService : PackService): Observable<Pack[]> {
    return packService.getPacks().pipe(
      map(data => data.map(
        (packs:
           { name: string | null; description: string | null; }
        ) => new Pack(null, packs.name, packs.description, null))),
      catchError(error => {
        throw error; // Propager l'erreur
      })
    );
  }

  get id(): string | null {
    return this._id;
  }

  set id(value: string | null) {
    this._id = value;
  }

  get name(): string | null {
    return this._name;
  }

  set name(value: string | null) {
    this._name = value;
  }

  get description(): string | null {
    return this._description;
  }

  set description(value: string | null) {
    this._description = value;
  }

  get services(): ServicesReparation[] | null {
    return this._services;
  }

  set services(value: ServicesReparation[] | null) {
    this._services = value;
  }
}
