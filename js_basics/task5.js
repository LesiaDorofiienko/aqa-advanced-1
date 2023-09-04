import chalk from 'chalk';

const radius = 4;
const length = 35;
const width = 12;
const height = 10;
const prSquare = Math.PI * (radius ** 2)

const circleArea = (prSquare).toFixed(2);
const rectangleArea = length * width;
const cylinderVolume = (prSquare * height).toFixed(2);


console.log(chalk.red('Circle area is: ', circleArea));
console.log(chalk.green('Rectangle area is: ', rectangleArea));
console.log(chalk.blueBright('Cylinder volume is: ', cylinderVolume));
