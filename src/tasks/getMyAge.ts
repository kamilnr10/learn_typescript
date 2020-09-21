const getMyAge = (input: any): number => {
  const date = new Date();
  const actualYear = date.getFullYear();
  if (!input) {
    throw new Error(`Input cannot be empty`);
  }
  if (input > actualYear) {
    throw new Error(`Input should be less or equal to actual year`);
  }
  return actualYear - input;
};

getMyAge(2222);
getMyAge("1990");
