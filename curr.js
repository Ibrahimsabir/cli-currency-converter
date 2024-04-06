#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    RUB: 92.56,
    GBP: 0.79,
    EURO: 0.92,
    PKR: 277.8,
    THB: 36.6,
    ZAR: 18.67,
    CAD: 1.36
};
let userAmount = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "RUB", "GBP", "EURO", "PKR", "THB", "ZAR", "CAD"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "RUB", "GBP", "EURO", "PKR", "THB", "ZAR", "CAD"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
let fromAmount = currency[userAmount.from];
let toAmount = currency[userAmount.to];
let Amount = userAmount.amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
//console.log(chalk.red.bold(`\n ${fromAmount} \n`))
//console.log(chalk.blue.bold(`\n ${toAmount} \n`))
//console.log(chalk.green.bold(`\n ${Amount} \n`))
//console.log(chalk.yellow.bold(`\n ${baseAmount.toFixed(2)} \n`))
console.log(chalk.bgYellow(`\n ${convertedAmount.toFixed(2)} \n`));
