interface fetchSrc {
  address: string;
  name: string;
  source: string;
  metadata: { deps: Array<string>; format: string; };
}
export interface ISystem {
  import(id: string): Promise<any>;
  get(name: string): any;
  delete(name: string); //remove module from SystemJS
  normalize(name: string, parentName?: string): Promise<string>;
  fetch(load: fetchSrc): Promise<string>;
  instantiate(load: fetchSrc): Promise<any>;
  translate(load: fetchSrc): Promise<any>;
}

declare const System: ISystem;