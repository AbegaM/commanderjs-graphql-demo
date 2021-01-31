const users = require("./users")

module.exports = {
   createAccount: users.signUp,
   logIn: users.logIn 
}