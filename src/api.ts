import { Repository } from "./types";
import { z } from "zod";

export async function fetchRepositories(): Promise<Repository[]> {
  const url = "https://api.github.com/orgs/stackbuilders/repos";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch repos");

    const repositories: Repository[] = await response.json();
    // Validate the fetched repositories
    if (!isResponseValid(repositories)) {
      throw new Error("Fetched data does not contain the required properties");
    }

    return repositories;
  } catch (error) {
    console.error("Error fetching the repos: ", error);
    return [];
  }
}

// Property validation function
export function isResponseValid(repositories: Repository[]): boolean {
  // Define the zod expected schema
  const repositorySchema = z.object({
    name: z.string(),
    stargazers_count: z.number(),
    updated_at: z.string(),
  });
  if (!Array.isArray(repositories) || repositories.length === 0) {
    return false; // Return false if repositories is not a valid array or is empty
  }
  // Validate the properties in a repository
  const exampleRepo = repositories[0];
  const isValid = repositorySchema.safeParse(exampleRepo).success;

  return isValid;
}
