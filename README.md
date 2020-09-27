# GraphQL Proxy for 104 job resource

Because the 104 open API not work, so I create one.

[GraphQL Playground](https://intense-sands-63009.herokuapp.com/playground)

## GraphQL Schema

### Jobs

```graphql
type Query {
  jobs(
    keyword: String!
    category: Category
    latest: Int
    page: Int
    area: [Area!]
    operation: Operation
  ): [Job!]!
}

enum Operation {
  Default
  OnlyJobName
}

enum Area {
  TaipeiCity
  NewTaipeiCity
  Yilan
  Keelung
  Taoyuan
  Hsinchu
  Miaoli
  Taichung
  Changhua
  Nantou
  Yunlin
  Chiayi
  Tainan
  Kaohsiung
  Pingtung
  Taitung
  Hualien
  Penghu
  Kinmen
  Lienchiang
  China
  Asia
  Oceania
  NorthAmericas
  SouthAmericas
  Europe
  Africa
}

enum Category {
  All
  FullTime
  PartTime
  Executive
  TempWorker
  CaseJob
  Tutor
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
GET https://{{host}}/jobs/search/list
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
Referer: https://{{host}}/jobs/search/
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
- kwop: keyword operation
- keyword: search keyword
- expansionType: unknown yet
- area: search filter by area
- order: unknown yet
- asc: data flow is increment or not
- page: data split by page index
- mode: unknown yet
- jobsource: unknown yet

#### Major Category

```typescript
enum Category {
  All,
  FullTime,
  PartTime,
  Executive,
  TempWorker,
  CaseJob,
  Tutor,
}
```

#### Keyword Operation

```typescript
enum Operation {
  Default = 7,
  OnlyJobName = 0,
}
```

#### Area:

```typescript
enum Area {
  TaipeiCity = 6001001000,
  NewTaipeiCity = 6001002000,
  Yilan = 6001003000,
  Keelung = 6001004000,
  Taoyuan = 6001005000,
  Hsinchu = 6001006000,
  Miaoli = 6001007000,
  Taichung = 6001008000,
  Changhua = 6001010000,
  Nantou = 6001011000,
  Yunlin = 6001012000,
  Chiayi = 6001013000,
  Tainan = 6001014000,
  Kaohsiung = 6001016000,
  Pingtung = 6001018000,
  Taitung = 6001019000,
  Hualien = 6001020000,
  Penghu = 6001021000,
  Kinmen = 6001022000,
  Lienchiang = 6001020000,
  China = 6002000000,
  Asia = 6003000000,
  Oceania = 6004000000,
  NorthAmericas = 6005000000,
  SouthAmericas = 6006000000,
  Europe = 6007000000,
  Africa = 6008000000,
}
```
