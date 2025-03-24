export class ServicesReparation {
  private _id: string | null;
  private _name: string | null;
  private _description: string | null;
  private _basePrice: number | null;
  private _estimatedTime: number | null;

  constructor(id: string | null, name: string | null, description: string | null, basePrice: number | null, estimatedTime: number | null) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._basePrice = basePrice;
    this._estimatedTime = estimatedTime;
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

  get basePrice(): number | null {
    return this._basePrice;
  }

  set basePrice(value: number | null) {
    this._basePrice = value;
  }

  get estimatedTime(): number | null {
    return this._estimatedTime;
  }

  set estimatedTime(value: number | null) {
    this._estimatedTime = value;
  }
}
