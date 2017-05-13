declare const fetch;

export interface serviceOUT {
  error: string;
}

export function callRequest<TIN, TOUT extends serviceOUT>(methodPath: string, inPar: TIN, isGet?: boolean): Promise<TOUT> {
  return new Promise<TOUT>((resolve, reject) => {
    const inParJson = inPar ? JSON.stringify(inPar, null, 2) : '';
    if (isGet) methodPath = methodPath + '?' + encodeURIComponent(inParJson);
    fetch(methodPath, { method: isGet ? 'GET' : 'POST', body: isGet ? null : inParJson }).then(r => r.json().then((res: TOUT) => {
      var error = res ? res.error : null;
      if (error) reject(error); else resolve(res);
    }).catch(err => reject(err))).catch(err => reject(err));
  });
}