const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const sequelize = require('./config/database');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/resolvers');

const startServer = async () => {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: { sequelize }
    });

    await server.start();
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
};

startServer();
