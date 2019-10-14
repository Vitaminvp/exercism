export const gigasecond = date => {
  const dateMs = date.getTime() + 1e12;
  return new Date(dateMs);
};
