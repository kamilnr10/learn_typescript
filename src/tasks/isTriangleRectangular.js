// Utwórz funkcję, która jako argumenty przyjmie trzy liczby. Funkcja powinna zwrócić true jeśli z odcinków o długości przekazanych w argumentach
// można zbudować trójkąt prostokątny, lub informację że z podanych długości nie można utworzyć trójkąta prostokątnego
function isRectangularTriangle(x1, x2, x3) {
    // nie wiesz czy x1 jest najmniejszą liczbą
    // nie wiesz czy inputy są liczbami wiekszymi od zera
    // nie wiesz czy inputy nie są NaN
    // nie upewniłeś się ze z x1,x2,x3 można zbuydować trójkąt
    if (isNaN(x1 * x2 * x3)) {
        // jak zrobić jeden warunek
        throw new Error("Inputs cannot be NaN");
    }
    var _a = Array.from(arguments).sort(function (a, b) { return a - b; }), a = _a[0], b = _a[1], c = _a[2];
    // console.log(Array.from(arguments));
    if (a <= 0) {
        throw new Error("Inputs should be positive numbers");
    }
    // [1,1,5]
    // brak jednej walidacji
    //  cyz mozesz zbudować trójkąt z boków a,b,c
    // a + b > c
    // a + c > b
    // b + c > a
    if (a + b > c && a + c > b && b + c > a) {
        var rectangularTriangle = Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
        return rectangularTriangle;
    }
    else
        return false;
}
var cond1 = isRectangularTriangle(3, 4, 5);
var cond2 = isRectangularTriangle(4, 3, 5);
// cond1 i cond2 to true
var cond3 = isRectangularTriangle(4, 3, 5);
var cond4 = isRectangularTriangle(4, 4, 4);
// cond3 i cond4 to false
