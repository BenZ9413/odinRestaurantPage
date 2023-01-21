import { clearPage } from "./supportFunctions";
import { setupTheHeader } from "./supportFunctions";

const contentNode = document.querySelector("#content");

const menuData = {
  Starters: ["Bruschetta", "Vitello Tonnato", "Mozzarella"],
  Mains: ["Pizza", "Rumpsteak", "Linguine"],
  Desserts: ["Tiramisu", "Créme Brulèe", "Icecream"],
  Drinks: ["Water", "Wine", "Softdrinks"],
};

const createMenuTab = function (clickedTab) {
  clearPage();
  setupTheHeader(contentNode, clickedTab);

  const menuContentContainer = document.createElement("div");
  menuContentContainer.setAttribute("id", "menuContentContainer");

  for (const menu in menuData) {
    let separateMenu = document.createElement("div");
    separateMenu.setAttribute("class", "separateMenu");

    let header = document.createElement("div");
    header.setAttribute("id", `${menu.toLowerCase()}Header`);
    header.setAttribute("class", "menuHeader");
    header.textContent = `~ ${menu} ~`;

    separateMenu.appendChild(header);

    let listOfCourses = document.createElement("ul");
    listOfCourses.setAttribute("class", "listOfCourses");

    for (const course in menuData[menu]) {
      let currentCourse = document.createElement("li");
      currentCourse.setAttribute("class", "course");
      currentCourse.textContent = menuData[menu][course];
      listOfCourses.appendChild(currentCourse);
    }
    separateMenu.appendChild(listOfCourses);
    menuContentContainer.appendChild(separateMenu);
  }

  contentNode.appendChild(menuContentContainer);
};

export default createMenuTab;
