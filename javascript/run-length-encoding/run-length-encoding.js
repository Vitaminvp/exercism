export const encode = string => {
  const regEx = /[A-Z\s]+/gi;
  if (string === "") return "";

  if (!regEx.test(string)) {
    throw new Error("Error");
  }

  const strArray = string.split("");
  let first = strArray[0];
  let res = [];
  let amount = 1;
  for (let i = 1; i <= strArray.length; i++) {
    if (strArray[i] === first) {
      ++amount;
    } else {
      res.push(`${amount === 1 ? "" : amount}${strArray[i - 1]}`);
      first = strArray[i];
      amount = 1;
    }
  }
  return res.join("");
};

export const decode = string => {
  if (string === "") return "";
  if (typeof string !== "string") {
    throw new Error("Error");
  }
  const res = [];
  let numLength = 0;
  for (let i = 0; i < string.length; i++) {
    if (/[A-Z\s]/i.test(string[i])) {
      res.push(
        string[i].repeat(
          Number(
            string.substring(i - numLength, i)
              ? string.substring(i - numLength, i)
              : 1
          )
        )
      );
      numLength = 0;
    } else {
      numLength++;
    }
  }
  return res.join("");
};
