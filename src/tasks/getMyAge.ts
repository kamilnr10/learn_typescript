//  to nie jest typ any
// co gdy input jest np - "1990" / 1990 / new Date(1990)
// type possibleInputs = Date | string | number;
// const getMyAge = (input: possibleInputs): number => {
//   const actualYear = new Date().getFullYear();
//   if (input <= 0) {
//     throw new Error("Input should not be less or equal to 0");
//   }
//   if (input > actualYear) {
//     throw new Error(`Input should be less or equal to actual year`);
//   }
//   return actualYear - input;
// };

// getMyAge(2222);
// getMyAge("1990");

const throwError = (condition: boolean, error: string) => {
  if (condition) throw new Error(error);
};

type possibleInputs = string | Date | number;

function getMyAge(input: possibleInputs) {
  const actualYear = new Date().getFullYear();
  if (input instanceof Date) {
    throwError(isNaN(input.getTime()), "Wrong date format");
    const yearOfInput = input.getFullYear();
    return actualYear - yearOfInput;
  }
  if (typeof input === "string") {
    throwError(
      Number.isNaN(parseInt(input)),
      "String cant be parsed into number"
    );
    throwError(
      Number(input) > actualYear,
      "Input cant be more than actual year"
    );
    const yearOfInput = parseInt(input);
    return actualYear - yearOfInput;
  }
  if (typeof input === "number") {
    throwError(Number.isNaN(input), "Input cannot be NaN");
    return actualYear - input;
  } else throw new Error("Bad type of input");
}
