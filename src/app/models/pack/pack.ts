import {ServicesReparation} from '../services_reparation/services-reparation';
import {PackService} from '../../services/pack/pack.service';

export class Pack {
  private _id: string | null;
  private _name: string | null;
  private _description: string | null;
  private _services: ServicesReparation[] | null;
  // private static packService: PackService;
  public _all_packages: any;

  constructor(id: string|null, name: string|null, description: string|null, services: ServicesReparation[]|null) {
    this._id = id?id:null;
    this._name = name?name:null;
    this._description = description?description:null;
    this._services = services?services:null;
  }

  fetchservices(servicepack : PackService){
    if (this.services == null){
      servicepack.getpacks_services$(this._id).subscribe({
        next: (data: ServicesReparation[]) => {
          this.services = data;
          console.log(`Services chargés pour le pack ${this.name}:`, this.services);
        },
        error: (err) => {
          console.error(`Erreur lors du chargement des services du pack ${this.name}`, err);
        }
      });

    }
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
