// Utwórz funkcję, która jako argumenty przyjmie trzy liczby. Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach
// można zbudować trójkąt prostokątny, lub informację że z podanych długości nie można utworzyć trójkąta prostokątnego

function isRectangularTriangle(x1: number, x2: number, x3: number): boolean {
  if (isNaN(x1 * x2 * x3)) {
    throw new Error("Inputs cannot be NaN");
  }
  const [a, b, c] = Array.from(arguments).sort((a, b) => a - b);

  // console.log(Array.from(arguments));
  if (a <= 0) {
    throw new Error("Inputs should be positive numbers");
  }
  if (a + b <= c && a + c <= b && b + c <= a) {
    throw new Error(
      "From declared arguments there is no way to build rectangular triangle"
    );
  }
  const rectangularTriangle =
    Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
  console.log(rectangularTriangle);
  return rectangularTriangle;
}

const cond1 = isRectangularTriangle(3, 4, 5);
const cond2 = isRectangularTriangle(4, 3, 5);
// cond1 i cond2 to true

const cond3 = isRectangularTriangle(4, 3, 5);
const cond4 = isRectangularTriangle(4, 4, 4);
// cond3 i cond4 to false
