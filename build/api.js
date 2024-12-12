var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
export function fetchRepositories() {
  return __awaiter(this, void 0, void 0, function* () {
    const url = "https://api.github.com/orgs/stackbuilders/repos";
    try {
      const response = yield fetch(url);
      if (!response.ok) throw new Error("Failed to fetch repos");
      const repositories = yield response.json();
      // Validate the fetched repositories
      if (!isResponseValid(repositories)) {
        throw new Error(
          "Fetched data does not contain the required properties",
        );
      }
      return repositories;
    } catch (error) {
      console.error("Error fetching the repos: ", error);
    }
  });
}
// Property validation function
export function isResponseValid(
  repositories,
  properties = ["name", "stargazers_count", "updated_at"],
) {
  // Check zod.dev
  if (!Array.isArray(repositories) || repositories.length === 0) {
    return false; // Return false if repositories is not a valid array or is empty
  }
  // Check if all properties exist in the first object of the repositories array
  const exampleRepo = repositories[0];
  return properties.every((prop) => prop in exampleRepo);
}
