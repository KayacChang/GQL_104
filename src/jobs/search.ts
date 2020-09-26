import fetch from "node-fetch";
import { HOST, JOB, SEARCH, LIST } from "../constants";
import { toURL } from "../utils";
import Job from "./model";

const qs = {
  ro: "0",
  isnew: "3",
  keyword: "前端",
  expansionType: "area,spec,com,job,wf,wktm",
  area: "6001001000,6001002000",
  jobsource: "2018indexpoc",
};

const qs1 = {
  ...qs,
  kwop: "7",
  order: "12",
  asc: "0",
  page: "1",
  mode: "s",
};

const Referer = toURL({
  hostname: HOST,
  pathname: [JOB, SEARCH].join("/"),
  search: qs,
});
const URL = toURL({
  hostname: HOST,
  pathname: [JOB, SEARCH, LIST].join("/"),
  search: qs1,
});

export default function search(): Promise<Job[]> {
  return fetch(URL, {
    headers: {
      Referer,
    },
  })
    .then((res) => res.json())
    .then(({ data }) => data.list);
}
