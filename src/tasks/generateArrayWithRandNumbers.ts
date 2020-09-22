interface Numbers {
  howManyArrays: number;
  howManyNumbers: number;
  min: number;
  max: number;
}

function generateArrayWithRandomNumbers({
  howManyNumbers,
  min,
  max,
}: Numbers): number[] {
  if (!howManyNumbers || !min || !max) {
    throw new Error(`Three arguments are needed`);
  }

  return [...Array(howManyNumbers)].map((el) => {
    const rangeOfNumbers = Math.floor(Math.random() * (max - min + 1) + min);
    return rangeOfNumbers;
  });
}

const numbersToGenerateArray: Numbers = {
  howManyArrays: 4,
  howManyNumbers: 10,
  min: 5,
  max: 50,
};

console.log(generateArrayWithRandomNumbers(numbersToGenerateArray));

const generateArrayOfArrays = (numbers: Numbers): number[][] => {
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
