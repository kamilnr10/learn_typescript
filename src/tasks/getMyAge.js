var getMyAge = function (input) {
    var date = new Date();
    var actualYear = date.getFullYear();
    if (input <= 0) {
        throw new Error("Input should not be less or equal to 0");
    }
    if (input > actualYear) {
        throw new Error("Input should be less or equal to actual year");
    }
    return actualYear - input;
};
getMyAge(2222);
getMyAge("1990");
