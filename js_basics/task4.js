import chalk from 'chalk';

const personAge = 24;
const ageOfAdulthood = 18;
const isPersonAdult = personAge >= ageOfAdulthood

console.log(chalk.green('Person age:', personAge));
console.log(chalk.blue('Age of adulthood:', ageOfAdulthood));
console.log(chalk.red('Is person adult:', isPersonAdult));