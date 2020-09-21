const alphabet = "abcdefghijklmnoprstuwxyz".split("");
const chunkArray = (array: any[]) => {
  return array.reduce((accumulator, index) => {
    let randomIndex = Math.floor(Math.random() * (8 - 4) + 4);
    accumulator.push(array.splice(index, randomIndex));
    return accumulator;
  }, []);
};

console.log(chunkArray(alphabet));
