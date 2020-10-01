// za pomocą metody .reduce wbudowanej w array
// odtwórz działanie innych metod:

type mapCall<T, G> = (element: T, index: number, array: Array<T>) => G;
function map<T, G>(arr: Array<T>, fn: mapCallback<T, G>): Array<G> {
  let mapArray: Array<G> = [];
  return arr.reduce(
    (acc, item, index, array) => [...acc, fn(item, index, array)],
    mapArray
  );
}

type filterCall<T> = (element: T, index: number, array: Array<T>) => boolean;
function filter<T>(arr: Array<T>, fn: filterCall<T>): Array<T> {
  let filterArray: Array<G> = [];
  return arr.reduce(
    (acc, item, index, array) =>
      fn(item, index, array) ? [...acc, item] : acc,
    filterArray
  );
}

function everyFn(array, callback) {}

function someFn(array, callback) {}
