import { isResponseValid } from "../src/api";

describe("isResponseValid", () => {
  describe("when a non-empty array of repositories is received", () => {
    it("returns true for valid repositories and properties", () => {
      const repositories = [
        {
          name: "repo1",
          stargazers_count: 10,
          updated_at: "2024-01-01T00:00:00Z",
        },
        {
          name: "repo2",
          stargazers_count: 5,
          updated_at: "2024-01-02T00:00:00Z",
        },
      ];
      const properties = ["name", "stargazers_count", "updated_at"];
      expect(isResponseValid(repositories, properties)).toBe(true);
    });

    it("returns true when no properties are specified and repositories are valid", () => {
      const repositories = [
        {
          name: "repo1",
          stargazers_count: 10,
          updated_at: "2024-01-01T00:00:00Z",
        },
        {
          name: "repo2",
          stargazers_count: 5,
          updated_at: "2024-01-02T00:00:00Z",
        },
      ];
      expect(isResponseValid(repositories)).toBe(true); // Defaults to ["name", "stargazers_count", "updated_at"]
    });
  });
});
