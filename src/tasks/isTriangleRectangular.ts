// Utwórz funkcję, która jako argumenty przyjmie trzy liczby. Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach
// można zbudować trójkąt prostokątny, lub informację że z podanych długości nie można utworzyć trójkąta prostokątnego

function isRectangularTriangle(
  x1: number,
  x2: number,
  x3: number
): boolean | string {
  if (!x1 || !x2 || !x3) {
    throw new Error("Three arguments are needed");
  }
  const rectangularTriangle =
    Math.pow(x1, 2) + Math.pow(x2, 2) === Math.pow(x3, 2);
  if (rectangularTriangle) {
    return true;
  } else {
    return `There is no way to build rectangular triangle from given arguments`;
  }
}

const cond1 = isRectangularTriangle(3, 4, 5);
const cond2 = isRectangularTriangle(4, 3, 5);
// cond1 i cond2 to true

const cond3 = isRectangularTriangle(4, 3, 5);
const cond4 = isRectangularTriangle(4, 4, 4);
// cond3 i cond4 to false
