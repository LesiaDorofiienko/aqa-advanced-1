const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i = i + 1) {
  const num = numbers[i];
  if (num > 0) {
    positiveCount = positiveCount + 1;
  } else if (num < 0) {
    negativeCount = negativeCount + 1;
  } else {
    zeroCount = zeroCount + 1;
  }
}
console.log("Number of positive numbers", positiveCount);
console.log("Number of negative numbers", negativeCount);
console.log("Number of zero numbers", zeroCount);
