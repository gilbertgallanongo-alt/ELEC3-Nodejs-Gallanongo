/*
Name: GALLANONGO, GILBERT B.
Section: IV-BSIT B
ELEC 3 - N2 Modular Calculator
Date: November 21, 2026
*/

// Kunin yung functions mula sa ibang JS files.
const operations = require("./operations");
const { formatResult } = require("./formatter");

// Built-in module ng Node.js.
const os = require("os");

// Kunin yung command at numbers sa terminal.
const operation = process.argv[2];
const inputs = process.argv.slice(3);

// Check muna kung may operation at numbers.
if (!operation || inputs.length === 0) {
    console.log("Usage: node index.js <operation> <numbers>");
    process.exit(1);
}

// Check kung valid yung numbers na nilagay.
const numbers = inputs.map(Number);

if (inputs.some(input => input.trim() === "") ||
    numbers.some(num => !Number.isFinite(num))) {
    console.log("Error: Numbers lang ang dapat ilagay.");
    process.exit(1);
}

// Ito lang muna yung supported operations.
const validOperations = [
    "add",
    "subtract",
    "multiply",
    "divide",
    "average"
];

if (!validOperations.includes(operation)) {
    console.log("Error: Unknown operation.");
    process.exit(1);
}

// Sa average, puwedeng marami. Sa iba, dalawa lang.
if (operation !== "average" && numbers.length !== 2) {
    console.log("Error: Kailangan ng exactly two numbers.");
    process.exit(1);
}

// Check para hindi empty ang average.
if (operation === "average" && numbers.length === 0) {
    console.log("Error: Maglagay ng numbers para sa average.");
    process.exit(1);
}

let result;

// Tawagin yung function depende sa command.
switch (operation) {
    case "add":
        result = operations.add(numbers[0], numbers[1]);
        break;

    case "subtract":
        result = operations.subtract(numbers[0], numbers[1]);
        break;

    case "multiply":
        result = operations.multiply(numbers[0], numbers[1]);
        break;

    case "divide":
        // Hindi puwedeng zero yung pang-divide.
        if (numbers[1] === 0) {
            console.log("Error: Cannot divide by zero.");
            process.exit(1);
        }

        result = operations.divide(numbers[0], numbers[1]);
        break;

    case "average":
        result = operations.average(numbers);
        break;
}

// I-format yung result bago ipakita.
console.log("\n===== MODULAR CALCULATOR =====");
console.log("Name: GALLANONGO, GILBERT B.");
console.log(`Platform: ${os.platform()}`);
console.log(formatResult(operation, numbers, result));
console.log("==============================");