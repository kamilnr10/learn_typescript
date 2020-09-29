function generateArrayWithRandomNumbers(
  howManyNumbers: number,
  min: number,
  max: number
): Array<number> {
  // zła walidacja
  // NaN typu number ->
  // jaki nie może być howManyNumbers

  if (Number.isNaN(howManyNumbers) || Number.isNaN(min) || Number.isNaN(max)) {
    throw new Error("Inputs cant be type of NaN");
  }

  if (howManyNumbers <= 0) {
    throw new Error("First argument should be positive number");
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

const generateArrayOfArrays = (
  howManyArrays: number,
  howManyNumbers: number,
  min: number,
  max: number
): Array<Array<number>> => {
  const toMapArrays: Array<number> = [...Array(howManyArrays)];

  const toMapNumbers: Array<number> = [...Array(howManyNumbers)];

  return toMapArrays.map((el) => {
    return toMapNumbers.map((el) => {
      const rangeOfNumbers = Math.floor(Math.random() * (max - min + 1) + min);
      return rangeOfNumbers;
    });
  });
};

console.log(generateArrayOfArrays(4, 5, 3, 10));
