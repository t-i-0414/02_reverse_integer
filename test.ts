import reverse from "./index";
const chalk = require("chalk");

if (reverse(123) === 321) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

if (reverse(-123) === -321) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

if (reverse(0) === 0) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

if (reverse(1534236469) === 0) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}
