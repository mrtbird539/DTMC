import { ApolloServer } from "apollo-server-express";
import express from "express";
import path from "path";

import db from "./config/connection";

import { resolvers, typeDefs } from "./schemas";

const app = express();
const PORT = process.env.PORT || 3001;

let server: any = null;

async function startServer() {
  server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });
}

startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {

  console.log("__________________________ \n HELLO \n __________________________");

  app.use(express.static(path.join(__dirname, "../../client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });
}

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
    console.log(
      `GraphQL available at http://localhost:${PORT}${server.graphqlPath}.`
    );
  });
});
