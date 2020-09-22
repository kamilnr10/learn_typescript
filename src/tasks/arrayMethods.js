// Stwórz funkcje, które będą działać identycznie co metody wbudowane
// ale będą działać przy pomocy pętli for lub while

const arrayOfNumbers = [2, 3, 12, 53, 8, 1];

function mapFn(array, callback) {
  let mapArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);
    mapArray.push(result);
  }
  return mapArray;
}

function filterFn(array, callback) {
  const filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callback(array[i], i, array);
    if (result) filterArr.push(arr[i]);
  }
  return filterArr;
}

function reduceFn(array, callback, initial) {
  let acc = initial === undefined ? 0 : initial;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
    return acc;
  }
}

function reduceRightFn(array, callback, initial) {
  let acc = initial === undefined ? 0 : initial;
  for (let i = array.length - 1; i < array.length; i--) {
    acc = callback(acc, array[i], i, array);
    return acc;
  }
}

const additionAllElements = (a, b) => {
  return a + b;
};

const arrayOfNumbers = [2, 4, 5, 7];

console.log(reduceRightFn(arrayOfNumbers, additionAllElements));

function everyFn(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (!callback(value, index, array)) {
      return false;
    }
  }

  return true;
}

function someFn(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];

    if (callback(value, index, array)) {
      return true;
    }
  }

  return false;
}
