//  to nie jest typ any
// co gdy input jest np - "1990" / 1990 / new Date(1990)
type possibleInputs = Date | string | number;
const getMyAge = (input: possibleInputs): number => {
  const actualYear = new Date().getFullYear();
  if (input <= 0) {
    throw new Error("Input should not be less or equal to 0");
  }
  if (input > actualYear) {
    throw new Error(`Input should be less or equal to actual year`);
  }
  return actualYear - input;
};

getMyAge(2222);
getMyAge("1990");
