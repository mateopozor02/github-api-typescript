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
function init() {
  return __awaiter(this, void 0, void 0, function* () {
    const repositories = yield fetchRepositories();
    displayStarredRepos(repositories);
    displayRecentRepos(repositories);
    displayTotalStars(repositories);
    displayTopRepositories(repositories);
    displayFilteredRepositoriesAlphabetically(repositories);
  });
}
