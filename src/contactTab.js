import clearPage from "./clearPage";

const testNode = document.querySelector("#content");

const createContactTab = function () {
  testNode.setAttribute("class", "tabPage");
  alert("Loading Contact Tab...");
};

export default createContactTab;
