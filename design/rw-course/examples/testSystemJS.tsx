export const init = async () => {
  const name = System.normalizeSync("lm/oldea/english1/l01/a/hueex0_l01_a01");
  for (let i = 0; i < 100; i++) {
    await System.import(name).then(m => {
      System.delete(name);
    });
  }
}
