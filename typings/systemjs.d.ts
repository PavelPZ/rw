interface ISystem {
  import(id: string): Promise<any>;
  get(name: string): any;
  delete(name: string);
  normalize(name: string): Promise<string>;
}

declare const System: ISystem;