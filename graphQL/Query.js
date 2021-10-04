const { gql } = require("graphql-request");

const GET_USERS = gql`
  query {
    getAllUsers {
      _id
      fullName
      userName
    }
  }
`;
const GET_TODOS = gql`
  query {
    getTodos {
      _id
      name
      startDate
      endDate
    }
  }
`;

module.exports = { GET_USERS, GET_TODOS };
