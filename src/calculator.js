#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (√)
 */

function add(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function subtract(first, ...rest) {
  return rest.reduce((result, num) => result - num, first);
}

function multiply(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

function divide(first, ...rest) {
  return rest.reduce((result, num) => {
    if (num === 0) {
      throw new Error('Cannot divide by zero');
    }
    return result / num;
  }, first);
}

function modulo(first, ...rest) {
  return rest.reduce((result, num) => {
    if (num === 0) {
      throw new Error('Cannot perform modulo with zero');
    }
    return result % num;
  }, first);
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

const args = process.argv.slice(2);

function displayHelp() {
  console.log(`
Node.js CLI Calculator

Usage: calculator.js [operation] [number1] [number2] [...]

Operations:
  add        - Addition (+)
  subtract   - Subtraction (-)
  multiply   - Multiplication (*)
  divide     - Division (/)
  modulo     - Modulo (%)
  power      - Exponentiation (^)
  sqrt       - Square Root (√)

Examples:
  calculator.js add 5 3 2
  calculator.js subtract 10 3 2
  calculator.js multiply 4 5 2
  calculator.js divide 100 5 2
  calculator.js modulo 17 5
  calculator.js power 2 8
  calculator.js sqrt 16
  `);
}

function main() {
  if (args.length === 0) {
    displayHelp();
    process.exit(1);
  }

  const operation = args[0].toLowerCase();
  const numbers = args.slice(1).map(arg => {
    const num = parseFloat(arg);
    if (!Number.isFinite(num)) {
      console.error(`Error: "${arg}" is not a valid number`);
      process.exit(1);
    }
    return num;
  });

  if (numbers.length === 0) {
    console.error('Error: At least one number is required');
    displayHelp();
    process.exit(1);
  }

  try {
    let result;
    switch (operation) {
      case 'add':
        result = add(...numbers);
        break;
      case 'subtract':
        result = subtract(...numbers);
        break;
      case 'multiply':
        result = multiply(...numbers);
        break;
      case 'divide':
        result = divide(...numbers);
        break;
      case 'modulo':
        result = modulo(...numbers);
        break;
      case 'power':
        if (numbers.length !== 2) {
          throw new Error('Power operation requires exactly 2 numbers');
        }
        result = power(...numbers);
        break;
      case 'sqrt':
        if (numbers.length !== 1) {
          throw new Error('Square root operation requires exactly 1 number');
        }
        result = squareRoot(...numbers);
        break;
      default:
        console.error(`Error: Unknown operation "${operation}"`);
        displayHelp();
        process.exit(1);
    }
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
