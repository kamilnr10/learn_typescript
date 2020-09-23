var alphabet = "abcdefghijklmnoprstuwxyz".split("");
var alpha = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var chunkArray = function (array) {
    var initialValue = [];
    return array.reduce(function (accumulator, element, index) {
        var randomIndex = Math.floor(Math.random() * (8 - 4) + 4);
        accumulator.push(array.splice(index, randomIndex));
        return accumulator;
    }, initialValue);
};
console.log(chunkArray(alphabet));
