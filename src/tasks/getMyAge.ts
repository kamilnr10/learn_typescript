const getMyAge = (input: number) => {
  const date = new Date();
  const actualYear = date.getFullYear();
  if (input > actualYear) {
    throw new Error(`Input should be less or equal to actual year`);
  }
  return actualYear - input;
};

getMyAge(2222);
