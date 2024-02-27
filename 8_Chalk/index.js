const chalk = require("chalk");

const nota = 1;
if (nota >= 7) {
  console.log(chalk.green.bold("Parabéns! Você está aprovadO!"));
} else {
  console.log(chalk.bgRed.italic("Você está reprovado"));
}
