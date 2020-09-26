import { GraphQLServer } from "graphql-yoga";
import jobs from "./jobs";
import { mergeTypeDefs, mergeResolvers } from "graphql-tools";

const typeDefs = mergeTypeDefs([jobs.SDL]);
const resolvers = mergeResolvers([jobs.Resolver]);

async function main() {
  const options = {
    port: 8000,
    endpoint: "/graphql",
    subscriptions: "/subscriptions",
    playground: "/playground",
  };
  const server = new GraphQLServer({ typeDefs, resolvers });
  server.start(options, ({ port }) =>
    console.log(
      `Server started, listening on port ${port} for incoming requests.`
    )
  );
}

main();
