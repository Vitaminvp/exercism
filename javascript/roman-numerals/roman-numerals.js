export const toRoman = num => {
  const arab = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let result = "";
  roman.forEach((prop, i)=>{
    while (num >= arab[i]) {
      result += prop;
      num -= arab[i];
    }
  });
  return result;
};
