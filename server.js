const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

this.main = async () => {
    const server = new ApolloServer(
        {
            typeDefs,
            resolvers,
        }
    )
    await server.start();

    const app = express();

    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () => {
        console.log(`Server run success link: http://localhost:4000${server.graphqlPath}`);
    });

}

module.exports = this.main();