function generateArrayWithRandomNumbers(
  howManyNumbers: number,
  min: number,
  max: number
): Array<number> {
  // zła walidacja
  // NaN typu number ->
  // jaki nie może być howManyNumbers
  if (
    typeof howManyNumbers !== "number" ||
    typeof min !== "number" ||
    typeof max !== "number"
  ) {
    throw new Error("Arguments should be type of Number");
  }
  if (howManyNumbers <= 0) {
    throw new Error("First argument should be positive number");
  }
  if (Number.isNaN(howManyNumbers) || Number.isNaN(min) || Number.isNaN(max)) {
    throw new Error("Inputs cant be type of NaN");
  }

  // do wytłumaczenia
  const toMap: Array<number> = [...Array(howManyNumbers)];

  return toMap.map((el) => {
    const rangeOfNumbers = Math.floor(Math.random() * (max - min + 1) + min);
    return rangeOfNumbers;
  });
}

interface NumbersToGenerateArray {
  howManyArrays: number;
  howManyNumbers: number;
  min: number;
  max: number;
}

const numbersToGenerateArray: NumbersToGenerateArray = {
  howManyArrays: 4,
  howManyNumbers: 10,
  min: 5,
  max: 50,
};

const generateArrayOfArrays = (numbers: NumbersToGenerateArray): number[][] => {
  return [...Array(numbers.howManyArrays)].map((el) => {
    return [...Array(numbers.howManyNumbers)].map((el) => {
      const rangeOfNumbers = Math.floor(
        Math.random() * (numbers.max - numbers.min + 1) + numbers.min
      );
      return rangeOfNumbers;
    });
  });
};

console.log(generateArrayOfArrays(numbersToGenerateArray));
