const { gql } = require("graphql-request");

const CREATE_USER = gql`
 mutation createUser($fullName: String!, $userName: String!, $password: String!){
   createUser(input: {fullName: $fullName, userName: $userName, password: $password}){
      _id
      fullName
   } 
 }
`;

const LOG_IN = gql`
mutation signIn($userName: String!, $password: String!){
   signIn(input: {userName: $userName, password: $password}){
      token
   }
}
`
const CREATE_TODO = gql `
mutation createTodo($name: String!, $startDate: String!, $endDate: String!){
   createTodo(input: {name: $name, startDate: $startDate, endDate: $endDate}){
      name
      startDate
      endDate
   }
}
`


module.exports = { CREATE_USER, LOG_IN, CREATE_TODO };
