const server = require("./server");
const express = require("express");
const {
  GraphQLUpload,
  graphqlUploadExpress,
} = require("graphql-upload");

const app = express();

async function startServer() {
  await server.start();

  // This middleware should be added before calling `applyMiddleware`.
  app.use(graphqlUploadExpress());
  server.applyMiddleware({ app });

  await new Promise((r) => app.listen({ port: 4000 }, r));

  console.log(
    `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
  );
}

startServer();
