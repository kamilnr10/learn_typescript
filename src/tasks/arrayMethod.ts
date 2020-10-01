// Stwórz funkcje, które będą działać identycznie co metody wbudowane
// ale będą działać przy pomocy pętli for lub while

const arrayOfNumbers = [2, 3, 12, 53, 8, 1];

// (2).toString()

// wszystko do poprawy
// any - nie moze być any
// każda funkcja powinna mieć typ generyczny

type genericArray<T> = Array<T>;
type possibleArgumentsForCallback<T> = Array<T> | number | string;

type mapCallback<T, G> = (element: T, index: number, array: Array<T>) => G;

function mapFn<T, G>(array: Array<T>, callback: mapCallback<T, G>): Array<G> {
  let mapArray: Array<G> = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);
    mapArray.push(result);
  }
  return mapArray;
}

type filterCallback<T> = (
  element: T,
  index: number,
  array: Array<T>
) => boolean;

function filterFn<T>(array: Array<T>, callback: filterCallback<T>): Array<T> {
  const filterArr = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);
    if (result) filterArr.push(array[i]);
  }
  return filterArr;
}

type reduceCallback<T, G> = (
  accumulator: G,
  element: T,
  index: number,
  array: Array<T>
) => G;

function reduceFn<T, G>(
  array: Array<T>,
  callback: reduceCallback<T, G>,
  initial: T
): G {
  // zła logika reduce
  let accumulator = initial === undefined ? 0 : initial;
  for (let i = 0; i < array.length; i++) {
    // czemy wy
    accumulator = callback(accumulator, array[i], i, array);
    return accumulator;
  }
}

function reduceRightFn(array, callback, initial) {
  // array.reverse
}

const additionAllElements = (a, b) => {
  return a + b;
};

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
