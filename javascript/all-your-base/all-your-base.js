export const convert = (str, fromBase, toBase) => {
  const num = parseInt(str, fromBase);
  return num.toString(toBase);
};
