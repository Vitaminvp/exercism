import { colorCode } from '../resistor-color/resistor-color'

export const value = ([first, second]) => {
  const firstIndex = colorCode(first);
  const secondIndex = colorCode(second);
  return 10*firstIndex + secondIndex;
};

