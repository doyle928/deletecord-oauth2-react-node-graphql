const { gql } = require("apollo-server-express");

module.exports = gql`
  type Token {
    token: String
  }

  type Query {
    getToken: Token
  }

  type Mutation {
    setToken(token: String): Token
  }
`;
