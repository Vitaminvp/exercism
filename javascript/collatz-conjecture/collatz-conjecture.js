
export const steps = number => {
  if(number <= 0) throw new Error("Only positive numbers are allowed");
  let steps = 0;
  const step = number => {
    if (number > 1) {
      steps += 1;
      if (number % 2 === 0) {
        return step(number / 2);
      } else {
        return step(number * 3 + 1);
      }
    }
  };
  step(number);
  return steps;
};
