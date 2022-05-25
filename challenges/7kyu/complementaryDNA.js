//  Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//  In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
//  You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//P: string
//R: return value is an opposite letter string; A = T / T = A/ C = G / G = C
//E: 'AAAA' // 'TTTT'; 'ATGC' // 'TACG'
//P: for loop with switch/case or conditional and put opposite letters in a new string variable

// Function declaration; for loop; switch case
function DNAStrand(dna) {
  let newDNA = "";
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        newDNA += "T";
        break;
      case "T":
        newDNA += "A";
        break;
      case "C":
        newDNA += "G";
        break;
      case "G":
        newDNA += "C";
        break;
      default:
        console.log("Not the letter A, T, C, or G");
    }
  }
  return newDNA;
}

// Function declaration; for loop; switch case
function DNAStrand(dna) {
  let newDNA = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      newDNA += "T";
    } else if (dna[i] === "T") {
      newDNA += "A";
    } else if (dna[i] === "C") {
      newDNA += "G";
    } else if (dna[i] === "G") {
      newDNA += "C";
    }
  }
  return newDNA;
}

// Function declaration; object; split method; map method with key/value pairs; join method
function DNAStrand(dna) {
  const pairOfLetters = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  const array = dna.split("");
  const oppositeArray = array.map((letter) => pairOfLetters[letter]);
  const oppositeString = oppositeArray.join("");
  return oppositeString;
}
