const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    bookID: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    bookID: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }

  type Query {
    users: [User]
    me(username: String!): User
  }

  type Mutation {
    getSingleUser(username:String, id: ID): User
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: BookInput): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;