// Length of string
function stringLength(string) {
    if (string.length < 0 || string.length > 10) {
      throw new Error(" Length of string must be >= 0 and <= 10");
    }
    return string.length;
  }
  
  // Reverse a string
  function reverseString(string) {
    return string.split("").reverse().join("");
  }
  
  // Calculator
  class Calculator {
    add(a, b) {
      return a + b;
    }
    subtract(a, b) {
      if (a < 0 || b < 0) {
        throw new Error("Cannot subtract a negative number");
      }
      return a - b;
    }
    multiply(a, b) {
      return a * b;
    }
    divide(a, b) {
      if (a === 0 || b === 0) {
        throw new Error("Cannot divide by 0");
      }
      return a / b;
    }
  }
  
  //capitalize function
  function capitalizeString(str) {
    if (str.length === 0) {
      throw new Error("Invalid string");
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  module.exports = { capitalizeString, Calculator, stringLength, reverseString };