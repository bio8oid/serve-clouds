const express = require("express");
const cors = require('cors');
const config = require('./config');
const graphqlHTTP = require('express-graphql');
const mongoose = require("mongoose");
const graphQlSchema = require('./graphql/schema/schema');
const graphQlResolvers = require('./graphql/resolvers/propertyResolver');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());

mongoose.connect(config.DB, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use("/graphql", graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
}));

app.listen(config.PORT, function () {
    console.log("Server is running on Port: " + config.PORT);
});