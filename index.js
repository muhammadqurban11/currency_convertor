import inquirer from 'inquirer';
const currency = {
    USD: 55,
    EURO: 0.94,
    LIRA: 32.57,
    INR: 83.75,
    PKR: 279.80
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EURO", "LIRA", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EURO", "LIRA", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = fromAmount / toAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
// console.log(user_answer);
