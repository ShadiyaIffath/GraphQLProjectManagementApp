const { GraphQLSchema } = require("graphql");

const RootQuery = require("./RootQuery");
const Mutations = require("./Mutation");

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
