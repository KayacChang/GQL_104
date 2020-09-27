const HOST = `www.104.com.tw`;
const JOB = `jobs`;
const SEARCH = `search`;
const LIST = `list`;

enum Operation {
  OnlyJobName = 0,
  Default = 7,
}

enum Area {
  TaipeiCity = 6001001000,
  NewTaipeiCity = 6001002000,
}

enum Category {
  All = 0,
  FullTime = 1,
  PartTime = 2,
  Executive = 3,
  TempWorker = 4,
  CaseJob = 5,
  Tutor = 6,
}

export { HOST, JOB, SEARCH, LIST, Operation, Area, Category };
