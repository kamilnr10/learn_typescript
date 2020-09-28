const alphabet = "abcdefghijklmnoprstuwxyz".split("");
const alpha = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// brak typu generycznego
// nie używamy any
// brak typu wychodzącego

type chunk<T> = Array<T>;

function chunkArray<T>(array: chunk<T>): Array<chunk<T>> {
  if (!array.length) {
    throw new Error("Array cannot be empty");
  }
  if (!Array.isArray(array)) {
    throw new Error("Input is not an array");
  }
  const initialValue: Array<chunk<T>> = [];
  return array.reduce((accumulator, element, index) => {
    let randomIndex = Math.floor(Math.random() * (8 - 4) + 4);
    accumulator.push(array.splice(index, randomIndex));
    return accumulator;
  }, initialValue);
}
console.log(chunkArray(alphabet));
