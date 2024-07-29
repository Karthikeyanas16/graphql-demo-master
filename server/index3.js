// index.js
import { ApolloServer } from 'apollo-server';
import { connect } from 'mongoose';
import typeDefs from './schema.js';
import resolvers from './resolver.js';

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connect('mongodb://localhost:27017/trainingdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Create Apollo Server
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    // Start the server
    server.listen().then(({ url }) => {
      console.log(` Server ready at ${url}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
