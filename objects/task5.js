const users = [
  { name: "Jolly", email: "tes1@test.com", age: 30 },
  { name: "John", email: "testerit3@test.com", age: 29 },
  { name: "Jim", email: "jstest1@test.com", age: 28 },
];
for (const { name, email, age } of users) {
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
