const { gql, GraphQLClient } = require("graphql-request");
const { getToken } = require("./utils/auth");

const uri = "http://localhost:8989";

const client = new GraphQLClient(uri);

module.exports = { client };
