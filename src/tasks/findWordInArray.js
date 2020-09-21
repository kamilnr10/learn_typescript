const inputData = ["stwórz", "sobie", "tutaj", "więcej", "wyrazów"];
function findPhraseInArray(array, word) {
    if (array.includes(word)) {
        return `Word: ${word} is in Array. Index of this word is: ${array.indexOf(word)}`;
    }
    else {
        return `There is no word in Array`;
    }
}
console.log(findPhraseInArray(inputData, "tomek"));
