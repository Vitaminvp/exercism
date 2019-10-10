export const gigasecond = date => {
  const dateMs = Date.parse(date) + 10 ** 12;
  return new Date(dateMs);
};
