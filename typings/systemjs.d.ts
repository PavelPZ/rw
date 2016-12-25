interface ISystem {
  import(id: string): Promise<any>;
  get(name: string): any;
  delete(name: string);
}

declare const System: ISystem;