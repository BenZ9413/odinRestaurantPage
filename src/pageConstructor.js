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
  contentNode.setAttribute("class", "overlay");
};

const constructContent = function () {
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
  btnLocation.onclick = createLocationTab;
  const btnMenu = document.createElement("button");
  btnMenu.id = "btnMenu";
  btnMenu.textContent = "Menu";
  btnMenu.onclick = createMenuTab;
  const btnContact = document.createElement("button");
  btnContact.id = "btnContact";
  btnContact.textContent = "Contact";
  btnContact.onclick = createContactTab;

  navigationContainer.appendChild(btnLocation);
  navigationContainer.appendChild(btnMenu);
  navigationContainer.appendChild(btnContact);
  textContainer.appendChild(restaurantName);
  textContainer.appendChild(navigationContainer);
  contentNode.appendChild(textContainer);
};

export default constructLandingpage;
