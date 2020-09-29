// "5) Stwórz tablicę zawierającą 15 wyrazów. Utwórz funkcję która jako argument przyjmuje wyraz.
// Funkcja ma sprawdzić czy fraza występuje w tablicy. Jeśli tak ma zwrócić informacje o tym elemencie (pozycja, wartość).
// Jeśli nie, zwraca powiadomienie że szukanej frazy brak w tablicy."

const inputData = ["stwórz", "sobie", "tutaj", "więcej", "wyrazów"];

// generyczny typ
//
function findPhraseInArray(array: string[], word: string): string {
  // brak walidacji - czy word nie jest pusty

  // includes jest słabe - case sensitive
  // w jednej pętli -.splice i .findIndex
  // wyszukiwanie w stringu przez regexp

  if (array.includes(word)) {
    return `Word: ${word} is in Array. Index of this word is: ${array.indexOf(
      word
    )}`;
  } else {
    return `There is no word in Array`;
  }
}

type arrayOfWords = Array<string>;

function findWord(array: arrayOfWords, phrase: string) {
  if (!array.length) {
    throw new Error("Array cant be empty");
  }

  if (phrase.length < 3) {
    throw new Error("Second argument should be at least 3 char length");
  }

  // find index by .indexOf albo regexp
  // .reduce
  const searchWordInArray = array.find((item) => {
    if (phrase === item) return true;
    else return false;
  });

  const searchIndexOfWord = array.findIndex(
    (item) => item.toLocaleLowerCase().indexOf(phrase) > -1
  );
  return `Index of ${searchWordInArray} is ${searchIndexOfWord}`;
}

console.log(findPhraseInArray(inputData, "tomek"));
