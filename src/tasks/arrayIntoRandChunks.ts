const alphabet = "abcdefghijklmnoprstuwxyz".split("");
const alpha = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// brak typu generycznego
// nie używamy any
// brak typu wychodzącego

type chunk<T> = Array<T>;

const chunkArray = <T>(array: chunk<T>): Array<chunk<T>> => {
  const initialValue: Array<chunk<T>> = [];
  return array.reduce((accumulator, element, index) => {
    let randomIndex = Math.floor(Math.random() * (8 - 4) + 4);
    accumulator.push(array.splice(index, randomIndex));
    return accumulator;
  }, initialValue);
};

console.log(chunkArray(alphabet));
