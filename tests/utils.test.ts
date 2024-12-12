import { filterStarredRepos, sortByLastUpdated, getStars, getTopRepos, sortAlphabetically, removeReposStartingWithLetter} from "../src/utils";
  
describe("Repository Utility Functions", () => {
  const sampleRepos = [
    { name: "AlphaRepo", stargazers_count: 10, updated_at: "2024-11-10T12:00:00Z" },
    { name: "BetaRepo", stargazers_count: 3, updated_at: "2024-11-08T12:00:00Z" },
    { name: "GammaRepo", stargazers_count: 7, updated_at: "2024-11-09T12:00:00Z" },
    { name: "DeltaRepo", stargazers_count: 15, updated_at: "2024-11-07T12:00:00Z" },
    { name: "EpsilonRepo", stargazers_count: 4, updated_at: "2024-11-06T12:00:00Z" },
  ];

  describe("filterStarredRepos", () => {
    describe("when a non-empty array is received", () => {
      it("returns the repositories with more than 5 stars", () => {
        const result = filterStarredRepos(sampleRepos);
        expect(result).toEqual([
          {
            name: "AlphaRepo",
            stargazers_count: 10,
            updated_at: "2024-11-10T12:00:00Z",
          },
          {
            name: "GammaRepo",
            stargazers_count: 7,
            updated_at: "2024-11-09T12:00:00Z",
          },
          {
            name: "DeltaRepo",
            stargazers_count: 15,
            updated_at: "2024-11-07T12:00:00Z",
          },
        ]);
      });

      it("returns an empty array if no repositories have more than 5 stars", () => {
        const repos = [
          { name: "Repo1", stargazers_count: 3, updated_at: "2024-11-09T12:00:00Z" },
          { name: "Repo2", stargazers_count: 2, updated_at: "2024-11-09T12:00:00Z" },
        ];
        expect(filterStarredRepos(repos)).toEqual([]);
      });
    });

    describe("when an empty array is received", () => {
      it("returns an empty array", () => {
        expect(filterStarredRepos([])).toEqual([]);
      });
    });
  });

  describe("sortByLastUpdated", () => {
    describe("when a non-empty array is received", () => {
      it("returns sorted repositories by last updates in descending order", () => {
        const result = sortByLastUpdated(sampleRepos, 3);
        expect(result).toEqual([
          {
            name: "AlphaRepo",
            stargazers_count: 10,
            updated_at: "2024-11-10T12:00:00Z",
          },
          {
            name: "GammaRepo",
            stargazers_count: 7,
            updated_at: "2024-11-09T12:00:00Z",
          },
          {
            name: "BetaRepo",
            stargazers_count: 3,
            updated_at: "2024-11-08T12:00:00Z",
          },
        ]);
      });

      it("limits the result to the specified amount", () => {
        const result = sortByLastUpdated(sampleRepos, 2);
        expect(result.length).toBe(2);
      });
    });

    describe("when an empty array is received", () => {
      it("returns an empty array", () => {
        expect(sortByLastUpdated([])).toEqual([]);
      });
    });
  });

  describe("getStars", () => {
    it("returns the total number of stars across all repositories", () => {
      const result = getStars(sampleRepos);
      expect(result).toBe(39);
    });

    it("returns 0 if the repositories array is empty", () => {
      expect(getStars([])).toBe(0);
    });
  });

  describe("getTopRepos", () => {
    describe("when a non-empty array is received", () => {
      it("returns the top repositories with the most stars given the top number", () => {
        const result = getTopRepos(sampleRepos, 3);
        expect(result).toEqual([
          { name: "DeltaRepo", stargazers_count: 15, updated_at: "2024-11-07T12:00:00Z" },
          { name: "AlphaRepo", stargazers_count: 10, updated_at: "2024-11-10T12:00:00Z" },
          { name: "GammaRepo", stargazers_count: 7, updated_at: "2024-11-09T12:00:00Z" },
        ]);
      });
      it("returns an empty array if the count received is 0", () => {
        const result = getTopRepos(sampleRepos, 0);
        expect(result).toEqual([]);
      });
    });
    describe("when an empty array is received", () => {
      it("returns an empty array", () => {
        const result = getTopRepos([], 3);
        expect(result).toEqual([]);
      });
    });
  });

  describe("sortAlphabetically", () => {
    describe("when a non-empty array is received", () => {
      it("returns a list of repositories sorted alphabetically by their name", () => {
        const result = sortAlphabetically(sampleRepos);
        expect(result).toEqual([
          { name: "AlphaRepo", stargazers_count: 10, updated_at: "2024-11-10T12:00:00Z" },
          { name: "BetaRepo", stargazers_count: 3, updated_at: "2024-11-08T12:00:00Z" },
          { name: "DeltaRepo", stargazers_count: 15, updated_at: "2024-11-07T12:00:00Z" },
          { name: "EpsilonRepo", stargazers_count: 4, updated_at: "2024-11-06T12:00:00Z" },
          { name: "GammaRepo", stargazers_count: 7, updated_at: "2024-11-09T12:00:00Z" },
        ]);
      });
    });

    describe("when an empty array is received", () => {
      it("returns an empty array", () => {
        const result = sortAlphabetically([]);
        expect(result).toEqual([]);
      });
    });
  });
  
  describe("removeReposStartingWithLetter", () => {
    describe("when a non-empty array is received", () => {
        it("returns the list of repositories without the ones starting with the given letter", () => {
            const result = removeReposStartingWithLetter(sampleRepos, "D");
            expect(result).toEqual(expect.arrayContaining([
                { name: "AlphaRepo", stargazers_count: 10, updated_at: "2024-11-10T12:00:00Z" },
                { name: "BetaRepo", stargazers_count: 3, updated_at: "2024-11-08T12:00:00Z" },
                { name: "GammaRepo", stargazers_count: 7, updated_at: "2024-11-09T12:00:00Z" },
                { name: "EpsilonRepo", stargazers_count: 4, updated_at: "2024-11-06T12:00:00Z" }
            ]));
        });
    })
    describe("when an empty array is received", () => {
        it("returns an empty array ", () => {
            const result = removeReposStartingWithLetter([], "a");
            expect(result).toEqual([]);
        });
    })
  });
});
