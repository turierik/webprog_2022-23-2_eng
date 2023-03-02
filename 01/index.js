console.log("something");
document.write("clever");

let t = [2, 1, -4, 3, 0];

let u = [];
for (const el of t) {
    console.log(el);
    if (el % 2 === 0) {
        u.push(el);
    }
}
console.log(u);

function isEven(n) {
    return n % 2 === 0;
}

console.log(t.filter(isEven));

console.log(
    t.filter(function (n) {
        return n % 2 === 0;
    })
);

console.log(t.filter((n) => n % 2 === 0));

console.log(t.map((n) => 2 * n));
console.log(t.map((n, i) => 2 * n + i));

// every
// some
// find

console.log(t.reduce((sum, n) => sum + n, 0));
console.log(t.reduce((max, n) => (n > max ? n : max), -Infinity));

let car = {
    year: 1996,
    model: "Tesla Model Y",
    works: true,
};

console.log(car.year);
console.log(car["year"]);

let cars = [
    {
        year: 1996,
        model: "Tesla Model Y",
        works: true,
    },
    {
        year: 2022,
        model: "Ford Ford",
        works: false,
    },
    {
        year: 2020,
        model: "Tesla Model 3",
        works: true,
    },
];
console.log(cars.filter((car) => car.works));
console.log(cars.filter((car) => car.year > 2000));
