/*
Name: GALLANONGO, GILBERT B.
Section: IV-BSIT B
ELEC 3 - N2 Modular Calculator
Date: November 20, 2026
*/

// Basic operations muna para sa calculator.

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function average(numbers) {
    // Kunin yung total tapos divide sa dami ng numbers.
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}

// Para magamit yung functions sa ibang JS file.
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};