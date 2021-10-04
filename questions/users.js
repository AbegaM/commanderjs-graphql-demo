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



module.exports = { createUserQusetions, loginQusetions };
