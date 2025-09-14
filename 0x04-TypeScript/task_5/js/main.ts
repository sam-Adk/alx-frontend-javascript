// Define MajorCredits interface with branding
export interface MajorCredits {
  credits: number;
  _brand: "MajorCredits"; // brand property for nominal typing
}

// Define MinorCredits interface with branding
export interface MinorCredits {
  credits: number;
  _brand: "MinorCredits"; // brand property for nominal typing
}

// Function to sum MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "MajorCredits",
  };
}

// Function to sum MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "MinorCredits",
  };
}

// Example usage
const major1: MajorCredits = { credits: 3, _brand: "MajorCredits" };
const major2: MajorCredits = { credits: 4, _brand: "MajorCredits" };
const totalMajor = sumMajorCredits(major1, major2);
console.log("Total Major Credits:", totalMajor);

const minor1: MinorCredits = { credits: 2, _brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 1, _brand: "MinorCredits" };
const totalMinor = sumMinorCredits(minor1, minor2);
console.log("Total Minor Credits:", totalMinor);
