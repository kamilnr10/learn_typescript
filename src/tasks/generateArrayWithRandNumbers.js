var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function generateArrayWithRandomNumbers(quantityOfNumbers, min, max) {
    if (!quantityOfNumbers || !min || !max) {
        throw new Error("Three arguments are needed");
    }
    return __spreadArrays(Array(quantityOfNumbers)).map(function (el) {
        var rangeOfNumbers = Math.floor(Math.random() * (max - min + 1) + min);
        return rangeOfNumbers;
    });
}
console.log(generateArrayWithRandomNumbers(4, 5, 10));
console.log(generateArrayWithRandomNumbers(8, 2, 10));
var generateArrayOfArrays = function (howManyArrays, howManyNumbers, min, max) {
    return __spreadArrays(Array(howManyArrays)).map(function (el) {
        return __spreadArrays(Array(howManyNumbers)).map(function (el) {
            var rangeOfNumbers = Math.floor(Math.random() * (max - min + 1) + min);
            return rangeOfNumbers;
        });
    });
};
console.log(generateArrayOfArrays(3, 5, 3, 9));
