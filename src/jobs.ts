import search from "./search";

const SDL = `#graphql
    type Query {
        jobs: [Job!]!
    }

    type Job {
        jobName: String!
    }
`;

const Resolver = {
  Query: {
    jobs: () => search(),
  },
};

export default {
  SDL,
  Resolver,
};
