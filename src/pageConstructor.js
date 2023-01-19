import backgroundImageSource from "./imgLandingPage.jpg";
import createLocationTab from "./locationTab";
import createMenuTab from "./menuTab";
import createContactTab from "./contactTab";

const contentNode = document.querySelector("#content");

const constructLandingpage = function () {
  constructBackground();
  constructContent();
};

const constructBackground = function () {
  const html = document.querySelector("html");
  html.style.backgroundImage = `url(${backgroundImageSource})`;
  const overlay = document.createElement("div");
  overlay.setAttribute("id", "overlay");
  contentNode.appendChild(overlay);
};

const constructContent = function () {
  contentNode.setAttribute("class", "landingPage");
  const textContainer = document.createElement("div");
  textContainer.id = "textContainer";
  const restaurantName = document.createElement("div");
  restaurantName.id = "restaurantName";
  restaurantName.textContent = "Pizzeria Mama Mía";
  const navigationContainer = document.createElement("div");
  navigationContainer.id = "navigationContainer";
  const btnLocation = document.createElement("button");
  btnLocation.id = "btnLocation";
  btnLocation.textContent = "Location";
  btnLocation.addEventListener("click", function (e) {
    createLocationTab(e);
  });
  const btnMenu = document.createElement("button");
  btnMenu.id = "btnMenu";
  btnMenu.textContent = "Menu";
  btnMenu.addEventListener("click", function (e) {
    createMenuTab(e);
  });
  const btnContact = document.createElement("button");
  btnContact.id = "btnContact";
  btnContact.textContent = "Contact";
  btnContact.addEventListener("click", function (e) {
    createContactTab(e);
  });

  navigationContainer.appendChild(btnLocation);
  navigationContainer.appendChild(btnMenu);
  navigationContainer.appendChild(btnContact);
  textContainer.appendChild(restaurantName);
  textContainer.appendChild(navigationContainer);
  contentNode.appendChild(textContainer);
};

export default constructLandingpage;
