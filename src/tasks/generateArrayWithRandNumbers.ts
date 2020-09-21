function generateArrayWithRandomNumbers(
  quantityOfNumbers: number,
  min: number,
  max: number
): number[] {
  if (!quantityOfNumbers || !min || !max) {
    throw new Error(`Three arguments are needed`);
  }

  return [...Array(quantityOfNumbers)].map((el) => {
    const rangeOfNumbers = Math.floor(Math.random() * (max - min + 1) + min);
    return rangeOfNumbers;
  });
}

console.log(generateArrayWithRandomNumbers(4, 5, 10));
console.log(generateArrayWithRandomNumbers(8, 2, 10));

const generateArrayOfArrays = (
  howManyArrays: number,
  howManyNumbers: number,
  min: number,
  max: number
): number[][] => {
  return [...Array(howManyArrays)].map((el) => {
    return [...Array(howManyNumbers)].map((el) => {
      const rangeOfNumbers = Math.floor(Math.random() * (max - min + 1) + min);
      return rangeOfNumbers;
    });
  });
};

console.log(generateArrayOfArrays(3, 5, 3, 9));
