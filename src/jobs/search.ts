import fetch from "node-fetch";
import { HOST, JOB, SEARCH, LIST, Category, Area } from "../constants";
import { toURL } from "../utils";
import Job from "./model";

const URL = (hostname: string) => (paths: string[]) => (search: any) =>
  toURL({
    hostname,
    pathname: paths.join("/"),
    search,
  });

const API_LIST = URL(HOST)([JOB, SEARCH, LIST]);
const API_REFERER = URL(HOST)([JOB, SEARCH]);

const toArea = (idx: number) =>
  [
    //
    Area.TaipeiCity,
    Area.NewTaipeiCity,
  ][idx];

type Props = {
  keyword: string;
  category?: Category;
  latest?: number;
  page?: number;
  area?: number[];
};

export default function search({
  category = 0,
  keyword,
  latest,
  page = 1,
  area,
}: Props): Promise<Job[]> {
  const qs = {
    ro: category,
    isnew: latest,
    keyword,
    expansionType: "area,spec,com,job,wf,wktm",
    area: Array.isArray(area) && area.map(toArea).join(","),
    jobsource: "2018indexpoc",
  };

  const qs1 = {
    ...qs,
    kwop: "7",
    order: "12",
    asc: "0",
    page,
    mode: "s",
  };

  return fetch(API_LIST(qs), {
    headers: {
      Referer: API_REFERER(qs1),
    },
  })
    .then((res) => res.json())
    .then(({ data }) => data.list);
}
