const { prompt } = require("inquirer");

const createUserQusetions = [
  {
    type: "input",
    name: "fullName",
    message: "Insert your full name",
  },
  {
    type: "input",
    name: "userName",
    message: "Insert your user name",
  },
  {
    type: "input",
    name: "password",
    message: "Insert your password",
  },
];

const loginQusetions = [
  {
    type: "input",
    name: "userName",
    message: "Insert your user name",
  },
  {
    type: "input",
    name: "password",
    message: "Insert your password",
  },
];

const todoQuestions = [
  {
    type: "input",
    name: "name",
    message: "Insrt the todo name",
  },
  {
    type: "input",
    name: "startDate",
    message: "Insert the start date",
  },
  {
    type: "input",
    name: "endDate",
    message: "Insert the end date",
  },
];

module.exports = { createUserQusetions, loginQusetions, todoQuestions };
