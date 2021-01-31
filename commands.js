const program = require("commander");
const { prompt } = require("inquirer");
const {
  createUserQusetions,
  loginQusetions,
  todoQuestions,
} = require("./questions/users");
const {createAccount, logIn} = require("./use-cases/users");

program.version("1.0.0").description("Todo list app for project storm");

program
  .command("add")
  .alias("a")
  .description("Create account")
  .action(async () => {
    var result = await prompt(createUserQusetions)
    createAccount(result)
  });

program
  .command("login")
  .alias("l")
  .description("login")
  .action(async () => {
    var result = await prompt(loginQusetions)
    logIn(result)
  });

program
  .command("todo")
  .alias("a")
  .description("Todo list")
  .action(() => {
    prompt(todoQuestions).then((answers) => console.info({ answers }));
  });

program.parse(process.argv);
