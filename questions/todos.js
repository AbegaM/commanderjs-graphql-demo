const createTodoQuestions = [
  {
    type: "input",
    name: "name",
    message: "Insert todo name",
  },
  {
    type: "input",
    name: "startDate",
    message: "Insert start date (YYYY-MM-DD)",
  },
  {
    type: "input",
    name: "endDate",
    message: "Insert end date (YYYY-MM-DD)",
  },
];

module.exports = {createTodoQuestions}