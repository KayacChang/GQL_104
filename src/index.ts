import { GraphQLServer } from "graphql-yoga";
import jobs from "./jobs";
import { mergeTypeDefs, mergeResolvers } from "graphql-tools";

const typeDefs = mergeTypeDefs([jobs.SDL]);
const resolvers = mergeResolvers([jobs.Resolver]);

const options = {
  port: process.env.PORT || 8000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
};

async function main() {
  new GraphQLServer({ typeDefs, resolvers }).start(options, ({ port }) =>
    console.log(
      `Server started, listening on port ${port} for incoming requests.`
    )
  );
}

main();
