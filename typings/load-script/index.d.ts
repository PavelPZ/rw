declare function load(url:string, completed: (err, scriptTag:HTMLElement) => void);

declare module "load-script" {
  export = load
}
