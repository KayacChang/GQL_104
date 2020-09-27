const HOST = `www.104.com.tw`;
const JOB = `jobs`;
const SEARCH = `search`;
const LIST = `list`;

enum Operation {
  Default = 7,
  OnlyJobName = 0,
}

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

enum Category {
  All,
  FullTime,
  PartTime,
  Executive,
  TempWorker,
  CaseJob,
  Tutor,
}

export { HOST, JOB, SEARCH, LIST, Operation, Area, Category };
