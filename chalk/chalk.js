import chalk from "chalk"

console.log("Normal log");
console.log(chalk.green("success message"));
console.log(chalk.red("error message"));

console.log(chalk.bgRed("critical section"));
console.log(chalk.bgGreen("correct"));

console.log(chalk.bold("bold text"));
console.log(chalk.italic("italic"));
console.log(chalk.underline("underline"));

const error=chalk.red;
console.log("error");