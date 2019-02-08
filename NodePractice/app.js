var express = require("express");
var app = express();
var readlineSync = require("readline-sync");

const firstNumber = readlineSync.question("Please enter the first number");
const secondNumber = readlineSync.question("Please enter the second number");
const operator = readlineSync.question("Please choose an operator");

console.log(eval(firstNumber+operator+secondNumber))
