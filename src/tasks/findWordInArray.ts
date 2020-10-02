// "5) Stwórz tablicę zawierającą 15 wyrazów. Utwórz funkcję która jako argument przyjmuje wyraz.
// Funkcja ma sprawdzić czy fraza występuje w tablicy. Jeśli tak ma zwrócić informacje o tym elemencie (pozycja, wartość).
// Jeśli nie, zwraca powiadomienie że szukanej frazy brak w tablicy."

const inputData = ["stwórz", "sobie", "tutaj", "więcej", "wyrazów"];

// generyczny typ
//
type tuple<T> = [T, number];
function searchPhrase<T>(array: T, phrase: string): Array<tuple<T>> {
  const phraseLowerCase = phrase.toLowerCase();
  const initialValue: Array<tuple<T>> = [];
  return array.reduce(function (accum, currValue, index, arr) {
    const currentValueLowerCase = currValue.toLowerCase();
    if (currentValueLowerCase.indexOf(phraseLowerCase) !== -1) {
      accum.push([index, currValue]);
    }
    return accum;
  }, initialValue);
}

var sum = inputData.reduce(function (x, y, i, ar) {
  console.log("x: " + x + ", y: " + y + ", i: " + i + ", sum: " + (x + y));
  return x + y;
}, 0);
console.log(searchPhrase(inputData, "tomek"));
