import { clearPage } from "./supportFunctions";
import { setupTheHeader } from "./supportFunctions";

const contentNode = document.querySelector("#content");

const createLocationTab = function (clickedTab) {
  clearPage();
  setupTheHeader(contentNode, clickedTab);
};

export default createLocationTab;
