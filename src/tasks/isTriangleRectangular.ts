// Utwórz funkcję, która jako argumenty przyjmie trzy liczby. Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach
// można zbudować trójkąt prostokątny, lub informację że z podanych długości nie można utworzyć trójkąta prostokątnego

function isRectangularTriangle(x1: number, x2: number, x3: number): boolean {
  // nie wiesz czy x1 jest najmniejszą liczbą
  // nie wiesz czy inputy są liczbami wiekszymi od zera
  // nie wiesz czy inputy nie są NaN
  // nie upewniłeś się ze z x1,x2,x3 można zbuydować trójkąt
  console.log(Array.from(arguments));
  if (x1 <= 0 || x2 <= 0 || x3 <= 0) {
    throw new Error("Inputs should be positive numbers");
  }
  if (isNaN(x1) || isNaN(x2) || isNaN(x3)) {
    throw new Error("Inputs cannot be NaN");
  }
  const [a, b, c] = Array.from(arguments).sort((a, b) => a - b);
  const rectangularTriangle =
    Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
  if (rectangularTriangle) {
    return true;
  } else {
    return false;
  }
}

const cond1 = isRectangularTriangle(3, 4, 5);
const cond2 = isRectangularTriangle(4, 3, 5);
// cond1 i cond2 to true

const cond3 = isRectangularTriangle(4, 3, 5);
const cond4 = isRectangularTriangle(4, 4, 4);
// cond3 i cond4 to false
