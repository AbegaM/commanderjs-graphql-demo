const createUserEntity = (input) => {
  var user = {
    fullName: input.fullName,
    userName: input.userName,
    password: input.password,
  };
  return user
};

const logInEntity = (input) => {};

module.exports = { createUserEntity, logInEntity };
