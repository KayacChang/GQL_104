# GQL Proxy for 104 job resource
Because the 104 open API not work, so I want to create one.

## GraphQL Schema

### Jobs 

```graphql
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
      Default,
      OnlyJobName,
    }

    enum Area {
      TaipeiCity,
      NewTaipeiCity,
    }

    enum Category {
      All,
      FullTime,
      PartTime,
      Executive,
      TempWorker,
      CaseJob,
      Tutor,
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
```

## Reverse engineering

### GET jobs/search/list

```http
GET https://{host}/jobs/search/list
    ?ro={}
    &isnew={}
    &kwop={}
    &keyword={}
    &expansionType={}
    &area={}
    &order={}
    &asc={}
    &page={}
    &mode={}
    &jobsource={} 
    HTTP/1.1
Referer: https://{host}/jobs/search/
         ?ro={}
         &isnew={}
         &kwop={}
         &keyword={}
         &expansionType={}
         &area={}
         &jobsource={}
```

The job search API endpoints on 104 website,
I guess the Referer in Header is reference,
the target href will referer to that reference 
and get data by filters such as order, asc, page ...etc

#### QueryString: 
 - ro: filter by major category, 
 - isnew: the latest data limit by number
 - kwop: maybe is keyword operation
 - keyword: search keyword
 - expansionType: unknown yet
 - area: search filter by area
 - order: unknown yet
 - asc: data flow is increment or not
 - page: data split by page index
 - mode: unknown yet
 - jobsource: unknown yet

#### Major Category
- 0: all
- 1: full time
- 2: part time
- 3: executive
- 4: temp worker
- 5: case job
- 6: tutor

#### KeyWord Operation
- 1: only jobname
- 7: default

#### Area:
- TaipeiCity: 6001001000
- NewTaipeiCity: 6001002000