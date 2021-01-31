const {gql} = require("graphql-request")

const GET_USERS = gql`
 query {
     getAllUsers {
         _id
         fullName
         userName
     }
 }
`

module.exports = {GET_USERS}