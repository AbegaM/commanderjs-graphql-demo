const {gql, GraphQLClient} = require("graphql-request")

const uri = "http://localhost:8989"

const client = new GraphQLClient(uri, {headers: {}})

module.exports = {client}
