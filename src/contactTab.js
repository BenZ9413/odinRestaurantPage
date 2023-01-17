import clearPage from "./clearPage";

const testNode = document.querySelector("#content");

const createContactTab = function () {
  testNode.classList.add("header");
  alert("Loading Contact Tab...");
};

export default createContactTab;
