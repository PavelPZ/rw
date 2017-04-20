interface IData {
  id: string;
}

interface IDataLeft extends IData {
  rights: { [lang: string]: IDataRight; };
}

interface IDataRight extends IData {
  lang: DLoc.Langs;
}