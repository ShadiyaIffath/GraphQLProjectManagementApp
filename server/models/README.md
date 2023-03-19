mongoose schema is different from the graphql schema

SCHEMA (DDL): A schema is fundamentally describing the data construct of a document (in MongoDB collection). This schema defines the name of each item of data, and the type of data, whether it is a string, number, date, Boolean, and so on.

MODEL (DML): A model is a compiled version of the schema. One instance of the model will map to one document in the database. It is the model that handles the reading, creating, updating, and deleting of documents. A document in a Mongoose collection is a single instance of a model. So it makes sense that if we're going to work with our data then it will be through the model.

the layers goes as follows

GRAPHQL API - GraphQL Schema

MONGOOSE LAYER - THE OBJECT DATA MAPPER LAYER (schemas are created for fields to map our collections which are the entities/models we'll be using)

DATABASE
