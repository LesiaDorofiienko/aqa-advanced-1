const number = (Math.random() * 10).toFixed() || 5;

console.log("==============================================");
console.log('"For" loop');

for (let i = 1; i < 11; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

console.log("==============================================");
console.log('"While" loop');

let j = 1;
while (j < 11) {
    console.log(`${number} x ${j} = ${number * j}`);

    j++;
}

console.log("==============================================");
