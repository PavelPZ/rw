import { IRecording, cancel, INotify, playRecording, setCurrentRecording, locStoragePrefix, notifyData, notifyDataInit, notify } from './recording';

interface IPlayList {
  records: Array<IRecording>;
}

//play list
export const playList = () => {
  cancel();
  const list = fromStorage();
  if (!list || !list.records) return;
  const records = list.records.filter(r => r.isSelected); if (records.length <= 0) return null;
  return new Promise((resolve, reject) => {
    //init notify record
    notifyDataInit({ recordsCount: records.length, inPlayList: true });
    records.forEach(r => notifyData.actionCount += r.actions.length);
    notify();
    //play list
    let actIdx = 0;
    let play: () => void;
    play = () => {
      if (actIdx >= records.length) { resolve(); return; }
      setCurrentRecording(records[actIdx]);
      notify({ recordsIdx: notifyData.recordsIdx + 1 });
      actIdx++;
      playRecording().then(() => setTimeout(() => play(), 1)).catch(err => reject(err));
    };
    play();
  });
}

export const fromStorage = () => {
  const res: IPlayList = { records: [] };
  allKeys().forEach(k => res.records.push(JSON.parse(localStorage.getItem(k))));
  return res;
};

export const toStorage = (pl: IPlayList) => {
  if (!pl) return;
  allKeys().forEach(k => localStorage.removeItem(k));
  for (let i = 0; i < pl.records.length; i++) localStorage.setItem(locStoragePrefix + pl.records[i].title, JSON.stringify(pl.records[i]));
}

export const toFile = (pl: IPlayList) => {
  var blob = new Blob([JSON.stringify(pl, null, 2)], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "playlist.json");
};

//https://www.html5rocks.com/en/tutorials/file/dndfiles/
export const fromFile = evt => new Promise<IPlayList>((resolve, reject) => {
  const file: Blob = evt.target.files[0]; // FileList object
  const reader = new FileReader();
  reader.onload = e => resolve(JSON.parse((e.target as any).result) as IPlayList);
  reader.readAsText(file);
});

const allKeys = () => {
  const keys: Array<string> = [];
  for (let idx = 0; idx < localStorage.length; idx++) {
    const key = localStorage.key(idx); if (!key.startsWith(locStoragePrefix)) continue;
    keys.push(key);
  }
  return keys;
};


declare function saveAs(blob: Blob, fileName: string);