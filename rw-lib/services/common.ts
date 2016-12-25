export interface serviceOUT {
  error: string;
}

export function callRequest<TIN, TOUT extends serviceOUT>(methodPath: string, inPar: TIN, isGet?: boolean): Promise<TOUT> {
  return new Promise((resolve, reject) => {
    var xmlhttp = new XMLHttpRequest();
    var url = `${methodPath}/service.ashx`;
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
          try {
            var resp = xmlhttp.responseText;
            var res: TOUT = resp ? JSON.parse(resp) : null;
            var error = res ? res.error : null;
            if (error) reject(error); else resolve(res);
          } catch (msg) {
            reject(`JSON exception ${msg} at ${url}`);
          }
        } else
          reject(`Status ${xmlhttp.status} at ${url}`);
      }
    };
    let inParJson = inPar ? JSON.stringify(inPar, null, 2) : '';
    if (isGet) {
      xmlhttp.open('GET', url + '?' + encodeURIComponent(inParJson), true);
      xmlhttp.send();
    } else {
      xmlhttp.open('POST', url, true);
      xmlhttp.send(inParJson);
    }
  });
}
