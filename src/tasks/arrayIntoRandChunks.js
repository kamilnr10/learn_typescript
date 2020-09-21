var alphabet = "abcdefghijklmnoprstuwxyz".split("");
var chunkArray = function (array) {
    return array.reduce(function (accumulator, index) {
        var randomIndex = Math.floor(Math.random() * (8 - 4) + 4);
        accumulator.push(array.splice(index, randomIndex));
        return accumulator;
    }, []);
};
console.log(chunkArray(alphabet));
