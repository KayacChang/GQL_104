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

const URL = (paths: string[]) => (qs: any) =>
  toURL({
    hostname: HOST,
    pathname: paths.join("/"),
    search: qs,
  });

type Props = {
  expansionType: string;
  area?: string;
};

export default function search(): Promise<Job[]> {
  return fetch(URL([JOB, SEARCH, LIST])(qs), {
    headers: {
      Referer: URL([JOB, SEARCH])(qs1),
    },
  })
    .then((res) => res.json())
    .then(({ data }) => data.list);
}
