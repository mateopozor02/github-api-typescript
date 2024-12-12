// Function to filter the repos with more than 5 stars
export function filterStarredRepos(repositories) {
  return repositories.filter((repo) => repo.stargazers_count > 5);
}
// Sort repositories by last updated
export function sortByLastUpdated(repositories, count = 5) {
  return repositories
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    )
    .slice(0, count);
}
// Get the total stars across all repositories
export function getStars(repositories) {
  return repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0);
}
// Get top repositories by stars
export function getTopRepos(repositories, count) {
  return repositories
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, count);
}
// Sort repositories alphabetically
export function sortAlphabetically(repositories) {
  return repositories.sort((a, b) =>
    a.name.toLocaleLowerCase().localeCompare(b.name),
  );
}
// Remove repositories starting with the given letter
export function removeReposStartingWithLetter(repositories, letter) {
  return repositories.filter((repo) => repo.name[0] !== letter);
}
