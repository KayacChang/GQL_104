import search from "./search";
import { pipe, nthArg } from "ramda";
import { Area, Category, Operation } from "../constants";
import { keysOfEnum } from "../utils";

const SDL = `#graphql
    type Query {
        jobs(
          keyword: String!, 
          category: Category, 
          latest: Int, 
          page: Int,
          area: [Area!],
          operation: Operation
        ): [Job!]!
    }

    enum Operation {
      ${keysOfEnum(Operation)}
    }

    enum Area {
      ${keysOfEnum(Area)}
    }

    enum Category {
      ${keysOfEnum(Category)}
    }

    type Job {
      jobType: String!
      jobNo: String!
      jobName: String!
      jobNameSnippet: String!
      jobRole: String!
      jobRo: String!
      jobAddrNoDesc: String!
      jobAddress: String!
      description: String!
      optionEdu: String!
      period: String!
      periodDesc: String!
      applyCnt: String!
      applyDesc: String!
      custNo: String!
      custName: String!
      coIndustry: String!
      coIndustryDesc: String!
      salaryLow: String!
      salaryHigh: String!
      salaryDesc: String!
      s10: String!
      appearDate: String!
      appearDateDesc: String!
      optionZone: String!
      isApply: String!
      applyDate: String!
      isSave: String!
      descSnippet: String!
      tags: [String!]!
      link: Link!
      jobsource: String!
      jobNameRaw: String!
      custNameRaw: String!
    }

    type Link {
      applyAnalyze: String!
      job: String!
      cust: String!
    }
`;

const Resolver = {
  Query: {
    jobs: pipe(nthArg(1), search),
  },
};

export default {
  SDL,
  Resolver,
};
