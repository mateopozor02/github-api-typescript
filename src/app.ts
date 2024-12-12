import { fetchRepositories } from "./api.js";
import {
  displayStarredRepos,
  displayRecentRepos,
  displayTotalStars,
  displayTopRepositories,
  displayFilteredRepositoriesAlphabetically,
} from "./ui.js";

document.addEventListener("DOMContentLoaded", init);
const loadBtn = document.getElementById("loadBtn");

if (loadBtn) {
  loadBtn.addEventListener("click", init);
} else {
  console.error("The load button with ID 'loadBtn' was not found.");
}

async function init() {
  const repositories = await fetchRepositories();
  displayStarredRepos(repositories);
  displayRecentRepos(repositories);
  displayTotalStars(repositories);
  displayTopRepositories(repositories);
  displayFilteredRepositoriesAlphabetically(repositories);
}
