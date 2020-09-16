var getMyAge = function (input) {
    var date = new Date();
    var actualYear = date.getFullYear();
    if (!input) {
        throw new Error("Input cannot be empty");
    }
    if (input > actualYear) {
        throw new Error("Input should be less or equal to actual year");
    }
    return actualYear - input;
};
getMyAge(2222);
