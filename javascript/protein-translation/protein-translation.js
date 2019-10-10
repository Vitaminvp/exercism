const stop = Symbol("STOP");

const PROTEINS = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: stop,
  UAG: stop,
  UGA: stop
};

export const translate = codons => {
  const proteins = [];
  const codonsArray = codons ? codons.match(/[ACGU]{3}/g) : [];
  if (codonsArray === null) throw new Error("Invalid codon");
  for (const codon of codonsArray) {
    const protein = PROTEINS[codon];
    if (protein === stop) {
      break;
    } else {
      proteins.push(protein);
    }
  }
  return proteins;
};
