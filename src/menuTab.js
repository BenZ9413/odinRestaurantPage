import { clearPage } from "./supportFunctions";
import { setupTheHeader } from "./supportFunctions";

const contentNode = document.querySelector("#content");

const createMenuTab = function (clickedTab) {
  clearPage();
  setupTheHeader(contentNode, clickedTab);
};

export default createMenuTab;
