const { client } = require("../../index");
const { GET_USERS } = require("../../graphQL/Query");
const { CREATE_USER, LOG_IN } = require("../../graphQL/Mutation");
const storage = require("node-persist");

const signUp = async (input) => {
  try {
    var data = await client.request(CREATE_USER, input);
    console.info("user created successfully");
  } catch (error) {
    console.log(error.response.errors[0].message);
  }
};

const logIn = async (input) => {
  try {
    var data = await client.request(LOG_IN, input);
    await storage.init();
    await storage.set("storm-app-accessToken", data.signIn.token);
    console.info("you are logged in");
  } catch (error) {
    console.log(error.response.errors[0].message);
  }
};

module.exports = { signUp, logIn };
