const program = require("commander");
const { prompt } = require("inquirer");
const { createUserQusetions, loginQusetions } = require("./questions/users");
const { createTodoQuestions } = require("./questions/todos");
const { createAccount, logIn } = require("./use-cases/users");
const { createTodo, getTodos } = require("./use-cases/todos/todos");

program.version("1.0.0").description("Todo list app for project storm");

program
  .command("add-user")
  .alias("au")
  .description("Create account")
  .action(async () => {
    var result = await prompt(createUserQusetions);
    createAccount(result);
  });

program
  .command("login")
  .alias("l")
  .description("login")
  .action(async () => {
    var result = await prompt(loginQusetions);
    logIn(result);
  });

program
  .command("add-todo")
  .alias("at")
  .description("Todo list")
  .action(async () => {
    var data = await prompt(createTodoQuestions);
    createTodo(data);
  });

program
  .command("get-todos")
  .alias("gt")
  .description("Get todo lists")
  .action(async() => {
    getTodos()
  });

program.parse(process.argv);
