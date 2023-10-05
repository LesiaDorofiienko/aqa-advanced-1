import chalk from "chalk";

const personName1 = "Angelina";
const personName2 = "John";

const greeting1 = "Hello " + personName1 + " and " + personName2;

console.log(chalk.green("greeting1:", greeting1));

const greeting2 = `Hello ${personName1} and ${personName2}`;

console.log(chalk.cyan("greeting2:", greeting2));
