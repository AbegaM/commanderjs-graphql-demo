const storage = require("node-persist");
const jwt = require("jsonwebtoken");

const checkToken = async () => {
  await storage.init();
  var bearerToken = await storage.get("storm-app-accessToken");
  if (bearerToken == undefined) {
    console.info("You need to Login");
    return false;
  }
  var token = bearerToken.split(" ")[1];
  if (!isTokenExpired(token)) {
    console.info("You need to Login");
    return false;
  }
  return true;
};

const getToken = async () => {
  await storage.init();
  var token = await storage.get("storm-app-accessToken");
  return token;
};

const isTokenExpired = (token) => {
  var { exp } = jwt.decode(token);
  if (Date.now() <= exp * 1000) {
    return true;
  } else {
    return false;
  }
};

module.exports = { checkToken, getToken };
