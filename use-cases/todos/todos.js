const { CREATE_TODO } = require("../../graphQL/Mutation");
const {GET_TODOS} = require("../../graphQL/Query")
const { client } = require("../../index");
const { checkToken, getToken } = require("../../utils/auth");

const createTodo = async (input) => {
  try {
    if (await checkToken()) {
        client.setHeader('authorization', await getToken())
        var data = await client.request(CREATE_TODO, input, );
        console.info("todo list created");
    }
  } catch (error) {
    //console.log(error);
    console.log(error.response.errors[0].message);
  }
};

const getTodos = async (input) => {
    try {
        if (await checkToken()) {
            client.setHeader('authorization', await getToken())
            var data = await client.request(GET_TODOS);
            console.info(data.getTodos);
        }
      } catch (error) {
        console.log(error.response.errors[0].message);
      }
};

const validateTodoItems = (input) => {};

module.exports = { createTodo, getTodos };
