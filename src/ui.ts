import { Repository } from "./types";
import {
  filterStarredRepos,
  sortByLastUpdated,
  getStars,
  getTopRepos,
  sortAlphabetically,
  removeReposStartingWithLetter,
} from "./utils.js";

// Function to display in the html
export function displayStarredRepos(repositories: Repository[]) {
  const list = document.getElementById("starred-repos");

  // Validate the list variable is not null
  if (!(list instanceof HTMLElement)) {
    console.error("The list with element id starred-repos does not exist");
    return;
  }

  // Clear the previous list
  list.innerHTML = "";
  // Get the starred repos
  const starredRepos = filterStarredRepos(repositories);
  // Add the repos to the list element
  starredRepos.forEach((repo) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${repo.name} - Stars ${repo.stargazers_count}`;
    list.appendChild(listItem);
  });
}

export function displayRecentRepos(repositories: Repository[]) {
  const recentRepos = sortByLastUpdated(repositories);
  const list = document.getElementById("recent-repos");

  // Validate the list variable is not null
  if (!(list instanceof HTMLElement)) {
    console.error("The list with element id recent-repos does not exist");
    return;
  }

  list.innerHTML = "";

  recentRepos.forEach((repo) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${repo.name} - Last Updated: ${new Date(repo.updated_at).toLocaleDateString()}`;
    list.appendChild(listItem);
  });
}

export function displayTotalStars(repositories: Repository[]) {
  const starElement = document.getElementById("total-stars");

  if (!(starElement instanceof HTMLElement)) {
    console.error("The list with element id total-stars does not exist");
    return;
  }
  starElement.innerText = getStars(repositories).toString();
}

export function displayTopRepositories(repositories: Repository[]) {
  const list = document.getElementById("top5-repos");

  if (!(list instanceof HTMLElement)) {
    console.error("The list with element id top5-repos does not exist");
    return;
  }

  // Clear the previous list
  list.innerHTML = "";
  // Get Top 5 repositories
  const top5Repos = getTopRepos(repositories, 5);
  // Add the repos to the list element
  top5Repos.forEach((repo) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${repo.name} - Stars ${repo.stargazers_count}`;
    list.appendChild(listItem);
  });
}

export function displayFilteredRepositoriesAlphabetically(
  repositories: Repository[],
) {
  const list = document.getElementById("sorted-repos-by-name");

  if (!(list instanceof HTMLElement)) {
    console.error(
      "The list with element id sorted-repos-by-name does not exist",
    );
    return;
  }

  // Clear the previous list
  list.innerHTML = "";
  // Sort and filter repositories
  const sortedByName = sortAlphabetically(repositories);
  const filteredRepos = removeReposStartingWithLetter(sortedByName, "h");
  // Add the repos to the list element
  filteredRepos.forEach((repo) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${repo.name}`;
    list.appendChild(listItem);
  });
}
