//mongoose models
const Project = require("../models/Project");
const Client = require("../models/Client");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

//Client Tyoe
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

//Project Type
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    clientId: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return clients.findById(parent.clientId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } }, // we need the id when we fetch a client
      resolve(parent, args) {
        // this is what returns or what will be the response
        // the client data based on the arguments/ client Id we sent
        return Client.findById(args.id);
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        // this is what returns or what will be the response
        // the client data based on the arguments/ client Id we sent
        return Project.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
