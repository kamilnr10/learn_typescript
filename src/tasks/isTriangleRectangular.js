// Utwórz funkcję, która jako argumenty przyjmie trzy liczby. Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach
// można zbudować trójkąt prostokątny, lub informację że z podanych długości nie można utworzyć trójkąta prostokątnego
function isRectangularTriangle(x1: number, x2: number, x3: number): boolean {
  if (isNaN(x1 * x2 * x3)) {
    throw new Error("Inputs cannot be NaN");
  }
  if (x1 + x2 <= x3 || x1 + x3 <= x2 || x2 + x3 <= x1) {
    throw new Error(
      "From declared arguments there is no way to build triangle"
    );
  }
  const [a, b, c] = Array.from(arguments).sort((a, b) => a - b);
  // console.log(Array.from(arguments));
  if (a <= 0) {
    throw new Error("Inputs should be positive numbers");
  }
  const rectangularTriangle =
    Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
  // console.log(rectangularTriangle);
  return rectangularTriangle;
}
var cond1 = isRectangularTriangle(3, 4, 5);
var cond2 = isRectangularTriangle(4, 3, 5);
// cond1 i cond2 to true
var cond3 = isRectangularTriangle(4, 3, 5);
var cond4 = isRectangularTriangle(4, 4, 4);
// cond3 i cond4 to false
