const alphabetSize = 26;

export const isPangram = str => {
  if (/[^[:ascii:]]/g.test(str)) throw Error("error");
  const arr = str.toLowerCase().match(/[a-z]/g);
  const set = new Set(arr);
  return set.size === alphabetSize;
};
