import chalk from "chalk";
import inquirer from "inquirer";
//class of player and opponent
class player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
//player name and opponent
let players = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Please entre your name"
    }
]);
let opponents = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Select your opponent",
        choices: ["skeleton", "zombie", "ghost"]
    }
]);
//Gather data
let p1 = new player(players.name);
let o1 = new opponent(opponents.select);
do {
    if (opponents.name === "skeleton") {
    }
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select your opponent",
        choices: ["Attack", "Drink Portion", "Run For Life.."]
    });
    if (ask.opt == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuelDecrease();
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if (p1.fuel <= 0) {
                console.log(chalk.bold.red.italic("You loose, Better luck next time"));
                process.exit();
            }
        }
        if (num <= 0) {
            o1.fuelDecrease();
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            if (o1.fuel <= 0) {
                console.log(chalk.bold.green.italic("You win"));
                process.exit();
            }
        }
    }
    if (ask.opt == "Drink Portion") {
        p1.fuelIncrease();
        console.log(chalk.bold.italic.green(`you drink health prtion your fuel is ${p1.fuel}`));
    }
    if (ask.opt == "Run For Life..") {
        console.log(chalk.bold.red.italic("You loose, Better luck next time"));
        process.exit();
    }
    //zombie
    if (opponents.name === "zombie") {
    }
    let ask2 = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select your opponent",
        choices: ["Attack", "Drink Portion", "Run For Life.."]
    });
    if (ask2.opt == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuelDecrease();
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if (p1.fuel <= 0) {
                console.log(chalk.bold.red.italic("You loose, Better luck next time"));
                process.exit();
            }
        }
        if (num <= 0) {
            o1.fuelDecrease();
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            if (o1.fuel <= 0) {
                console.log(chalk.bold.green.italic("You win"));
                process.exit();
            }
        }
    }
    if (ask2.opt == "Drink Portion") {
        p1.fuelIncrease();
        console.log(chalk.bold.italic.green(`you drink health prtion your fuel is ${p1.fuel}`));
    }
    if (ask2.opt == "Run For Life..") {
        console.log(chalk.bold.red.italic("You loose, Better luck next time"));
        process.exit();
    }
    //ghost
    if (opponents.name === "ghost") {
    }
    let ask3 = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select your opponent",
        choices: ["Attack", "Drink Portion", "Run For Life.."]
    });
    if (ask3.opt == "Attack") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuelDecrease();
            console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if (p1.fuel <= 0) {
                console.log(chalk.bold.red.italic("You loose, Better luck next time"));
                process.exit();
            }
        }
        if (num <= 0) {
            o1.fuelDecrease();
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
            if (o1.fuel <= 0) {
                console.log(chalk.bold.green.italic("You win"));
                process.exit();
            }
        }
    }
    if (ask3.opt == "Drink Portion") {
        p1.fuelIncrease();
        console.log(chalk.bold.italic.green(`you drink health prtion your fuel is ${p1.fuel}`));
    }
    if (ask3.opt == "Run For Life..") {
        console.log(chalk.bold.red.italic("You loose, Better luck next time"));
        process.exit();
    }
} while (true);
