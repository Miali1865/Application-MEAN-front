export class Collection {
  private _name!: string;
  private _columns!: string[];

  constructor(name: string, columns: string[]) {
    this._name = name;
    this._columns = columns;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get columns(): string[] {
    return this._columns;
  }

  set columns(value: string[]) {
    this._columns = value;
  }
}
