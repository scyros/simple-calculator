(function () {
  'use strict';

  // Add one number to other number
  function add(num1, num2) {
    return num1 + num2;
  }

  // Substract one number to other number
  function substract(num1, num2) {
    return num1 - num2;
  }

  // Multiply one number by other number
  function multiply(num1, num2) {
    return num1 * num2;
  }

  // Divide one number between other number
  function divide(num1, num2) {
    return num1 / num2;
  }

  // Operation map
  var OperationMap = {
    '+': add,
    '-': substract,
    '*': multiply,
    '/': divide
  }

  function Calculator() {
    this.reset();
  }

  Calculator.prototype.setDisplay = function (value) {
    this.displayValue *= 10;
    this.displayValue += parseFloat(value);
    this.display = this.displayValue.toString();
  }

  Calculator.prototype.setPoint = function () {

  }

  Calculator.prototype.setOperation = function (operation) {
    this.operation = operation;
    this.setMemory(this.displayValue);
  }

  Calculator.prototype.setMemory = function (value) {
    this.memory = parseFloat(value);
    this.displayValue = 0;
  }

  Calculator.prototype.add = function () {
    this.setOperation('+');
  }

  Calculator.prototype.substract = function () {
    this.setOperation('-');
  }

  Calculator.prototype.multiply = function () {
    this.setOperation('*');
  }

  Calculator.prototype.divide = function () {
    this.setOperation('/');
  }

  Calculator.prototype.calculate = function () {
    var operation = OperationMap[this.operation];

    if (!!!operation) { return; }

    this.result = operation(this.memory, this.displayValue);
    this.display = this.result.toString();

    // Reset state
    this.displayValue = 0;
    this.operation = null;
  }

  Calculator.prototype.reset = function () {
    this.display = '0.';
    this.displayValue = 0;
    this.memory = 0;
    this.operation = null;
  }

  window.Calculator = new Calculator()
})()
