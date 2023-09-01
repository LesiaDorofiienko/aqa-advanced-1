import chalk from 'chalk';

const radius = 4;
const length = 35;
const width = 12;
const height = 10;

const circleArea = Math.PI * (radius ^ 2);
const rectangleArea = length * width;
const cylinderArea = Math.PI * (radius^2) * height;

console.log(chalk.red('Circle area is: ', circleArea));
console.log(chalk.green('Rectangle area is: ', rectangleArea));
console.log(chalk.blueBright('Cylinder area is: ', cylinderArea));
