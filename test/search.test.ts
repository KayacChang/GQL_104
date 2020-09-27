import Job from "../src/jobs/model";
import search from "../src/jobs/search";

const properties = [
  "jobType",
  "jobNo",
  "jobName",
  "jobNameSnippet",
  "jobRole",
  "jobRo",
  "jobAddrNoDesc",
  "jobAddress",
  "description",
  "optionEdu",
  "period",
  "periodDesc",
  "applyCnt",
  "applyDesc",
  "custNo",
  "custName",
  "coIndustry",
  "coIndustryDesc",
  "salaryLow",
  "salaryHigh",
  "salaryDesc",
  "s10",
  "appearDate",
  "appearDateDesc",
  "optionZone",
  "isApply",
  "applyDate",
  "isSave",
  "descSnippet",
  "tags",
  "link",
  "jobsource",
  "jobNameRaw",
  "custNameRaw",
];

const props = {
  keyword: "前端",
};

const match = (properties: string[]) => (job: Job) =>
  properties.forEach((property) => expect(job).toHaveProperty(property));

describe("search api", () => {
  it("have response", async () => {
    expect.assertions(1);

    const data = await search(props);
    expect(data).not.toBeFalsy();

    console.log(data);
  });

  it("return list", async () => {
    expect.assertions(1);

    const data = await search(props);
    expect(data).toHaveProperty("length");
  });

  it("match schema", async () => {
    await search(props).then((list) => list.forEach(match(properties)));
  });
});
