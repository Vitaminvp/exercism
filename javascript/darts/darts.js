const radiusCount = (x, y) => Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

export const solve = (x, y) => {
  if (isNaN(x) || isNaN(y)) {
    throw new Error("Error");
  }
  const radius = radiusCount(x, y);
  if (radius > 10) {
    return 0;
  } else if (radius > 5) {
    return 1;
  } else if (radius > 1) {
    return 5;
  } else {
    return 10;
  }
};
