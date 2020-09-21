const arrayOfNumbers = [2, 3, 12, 53, 8, 1];

function mapFn(array: any[], callback) {
  let mapArray = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);
    mapArray.push(result);
  }
  return mapArray;
}

function filterFn(array, callback) {}

function reduceFn(array, callback, initial) {}

function reduceRightFn(array, callback, initial) {}

function everyFn(array, callback) {}

function someFn(array, callback) {}
