const { gql } = require("apollo-server");

module.exports = gql`
  scalar Upload

  type File {
    uri: String!
    filename: String!
    mimetype: String!
    encoding: String!
  }

  type Query {
    uploads: [File]
  }

  type Mutation {
    uploadAvatar(file: Upload!): File
  }
`;
