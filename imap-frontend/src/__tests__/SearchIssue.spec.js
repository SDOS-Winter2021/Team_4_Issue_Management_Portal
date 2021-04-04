import {
  findNumCommonWords,
  getSearchedIssue,
} from "../../src/logics/SearchIssues";

describe("Search function", () => {
  test("counts common words between query and post title", () => {
    const query = "ERP not work";
    const issueTitle = "erp working";
    expect(findNumCommonWords(issueTitle, query)).toEqual(2);
  });

  test("get top posts for a query", () => {
    const issues = [
      { Title: "ERP not working", _id: "1234" },
      { Title: "Fee portal not working", _id: "1" },
      { Title: "Cant connect", _id: "12" },
      { Title: "Cant login", _id: "123" },
    ];
    const query = "#ID-1234";
    expect(getSearchedIssue(query, issues)[0].Title).toEqual("ERP not working");
  });
});
