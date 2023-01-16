import backgroundImageSource from "./imgLandingPage.jpg";

const contentNode = document.querySelector("#content");

const constructLandingpage = function () {
  constructBackground();
  constructMain();
  constructFooter();
};

const constructBackground = function () {
  const html = document.querySelector("html");
  html.style.backgroundImage = `url(${backgroundImageSource})`;
  contentNode.setAttribute("class", "overlay");
  console.log("Successfully created the background!");
};

const constructMain = function () {
  console.log("Successfully created Main!");
};

const constructFooter = function () {
  console.log("Successfully created the Footer!");
};

export default constructLandingpage;
