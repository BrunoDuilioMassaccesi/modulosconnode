const PI = 3.1416;

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

const multi = (a, b = 2) => a * b;

const divi = (a, b) => b !== 0 ? a / b : "Error: división por cero";

module.exports = {
    PI,
    suma,
    resta,
    multi,
    divi
};
    