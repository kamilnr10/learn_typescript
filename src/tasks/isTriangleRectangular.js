function isRectangularTriangle(x1, x2, x3) {
    if (!x1 || !x2 || !x3) {
        throw new Error("Three arguments are needed");
    }
    var rectangularTriangle = Math.pow(x1, 2) + Math.pow(x2, 2) === Math.pow(x3, 2);
    if (rectangularTriangle) {
        return true;
    }
    else {
        return "There is no way to build rectangular triangle from given arguments";
    }
}
var cond1 = isRectangularTriangle(3, 4, 5);
var cond2 = isRectangularTriangle(4, 3, 5);
// cond1 i cond2 to true
var cond3 = isRectangularTriangle(4, 3, 5);
var cond4 = isRectangularTriangle(4, 4, 4);
// cond3 i cond4 to false
