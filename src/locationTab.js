import { clearPage } from "./supportFunctions";
import { setupTheHeader } from "./supportFunctions";
import locImageSource from "./location.jpg";

const contentNode = document.querySelector("#content");

const createLocationTab = function (clickedTab) {
  clearPage();
  setupTheHeader(contentNode, clickedTab);

  const locContentContainer = document.createElement("div");
  locContentContainer.setAttribute("id", "locContentContainer");

  const locImage = document.createElement("img");
  locImage.setAttribute("src", `${locImageSource}`);
  locImage.setAttribute("id", "locImage");

  const locText = document.createElement("p");
  locText.setAttribute("id", "locText");
  locText.textContent =
    "Since our establishment in 1809, we strive to make you feel at home in our restaurant. Our secret is, that we got all our recipes from the mothers and grandmothers of our village, so chances are that you might think to yourself: 'It tastes just like at my mothers´ place'.";

  const imgAndTextContainer = document.createElement("div");
  imgAndTextContainer.setAttribute("id", "imgAndTextContainer");

  const locSignature = document.createElement("p");
  locSignature.setAttribute("id", "locSignature");
  locSignature.textContent = "~~ La Familia ~~";

  imgAndTextContainer.appendChild(locImage);
  imgAndTextContainer.appendChild(locText);

  locContentContainer.appendChild(imgAndTextContainer);
  locContentContainer.appendChild(locSignature);

  contentNode.appendChild(locContentContainer);
};

export default createLocationTab;
