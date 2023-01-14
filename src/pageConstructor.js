const contentNode = document.querySelector("#content");

const constructLandingpage = function () {
  constructHeader();
  constructMain();
  constructFooter();
};

const constructHeader = function () {
  console.log("Successfully created the header!");
  const headerContainer = document.createElement("div");
  headerContainer.id = "headerContainer";
  contentNode.appendChild(headerContainer);
};

const constructMain = function () {
  console.log("Successfully created Main!");
};

const constructFooter = function () {
  console.log("Successfully created the Footer!");
};

export default constructLandingpage;
