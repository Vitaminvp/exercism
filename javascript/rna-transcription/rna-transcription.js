const DNA2RNA = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
};

export const toRna = string => string.split("").map(dna => DNA2RNA[dna]).join("");

