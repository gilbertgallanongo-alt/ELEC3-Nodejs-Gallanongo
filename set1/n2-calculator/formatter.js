/*
Name: GALLANONGO, GILBERT B.
Section: IV-BSIT B
ELEC 3 - N2 Modular Calculator
Date: November 20, 2026
*/

// Para mas maayos tingnan yung result sa terminal.
function formatResult(operation, numbers, result) {
    let symbol;

    if (operation === "add") {
        symbol = "+";
    } else if (operation === "subtract") {
        symbol = "-";
    } else if (operation === "multiply") {
        symbol = "*";
    } else if (operation === "divide") {
        symbol = "/";
    } else if (operation === "average") {
        return `Average of ${numbers.join(", ")} = ${result}`;
    } else {
        return "Unknown operation.";
    }

    return `${numbers.join(` ${symbol} `)} = ${result}`;
}

// Para matawag din yung function sa index.js later.
module.exports = { formatResult };