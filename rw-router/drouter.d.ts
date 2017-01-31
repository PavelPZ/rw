declare namespace DRouter {
  interface IRouteData {
    handlerId: string; //handler id for route management
    path?: string; //path, e.g. '/' for root, '//' for root.child, /ch1/ for root.childs['ch1'] etc.
    //helper fields for route manipulation
    $asyncData?: any; //data, added during prepare
    $childs?: { [hookId: string]: IRouteData; };
  }

  //normalized redux route state
  interface IRouteDir {
    [path: string]: IRouteData;
  }
}