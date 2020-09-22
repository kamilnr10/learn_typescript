var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function generateArrayWithRandomNumbers(_a) {
    var howManyNumbers = _a.howManyNumbers, min = _a.min, max = _a.max;
    if (!howManyNumbers || !min || !max) {
        throw new Error("Three arguments are needed");
    }
    return __spreadArrays(Array(howManyNumbers)).map(function (el) {
        var rangeOfNumbers = Math.floor(Math.random() * (max - min + 1) + min);
        return rangeOfNumbers;
    });
}
var numbersToGenerateArray = {
    howManyArrays: 4,
    howManyNumbers: 10,
    min: 5,
    max: 50
};
console.log(generateArrayWithRandomNumbers(numbersToGenerateArray));
var generateArrayOfArrays = function (numbers) {
    return __spreadArrays(Array(numbers.howManyArrays)).map(function (el) {
        return __spreadArrays(Array(numbers.howManyNumbers)).map(function (el) {
            var rangeOfNumbers = Math.floor(Math.random() * (numbers.max - numbers.min + 1) + numbers.min);
            return rangeOfNumbers;
        });
    });
};
console.log(generateArrayOfArrays(numbersToGenerateArray));
