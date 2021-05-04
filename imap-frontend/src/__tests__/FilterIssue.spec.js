import FilterIssues from "../../src/logics/FilterIssues";

describe("Filter function", () => {
  test("Returns list of booleans, denoting whether to display the issue after filter", () => {
    const issues = [
      { Filter: { Batch: ["2020"], Department: ["CSAM"], Programs: ["PhD"] } },
      {
        Filter: { Batch: ["2018"], Department: ["CSAM"], Programs: ["B-Tech"] },
      },
      {
        Filter: { Batch: ["2020"], Programs: ["B-Tech"], Programs: ["B-Tech"] },
      },
      { Filter: { Batch: ["2019"], Department: ["CSE"], Programs: ["PhD"] } },
    ];
    const filters = {
      Batch: ["2020"],
      Programs: ["PhD"],
      Department: [],
    };
    const output = [true, false, false, false];

    expect(FilterIssues(filters, issues)).toEqual(output);
  });
});
