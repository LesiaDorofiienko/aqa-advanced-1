const person = {
    firstName: "Lesia",
    lastName: "Dorofiienko",
    age: 26,
};

person.email = "lesiadorofiienko@test.com";

delete person.age;
console.log(person);
