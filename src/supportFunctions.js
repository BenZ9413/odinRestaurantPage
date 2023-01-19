const clearPage = function () {
  while (document.querySelector("#textContainer").nextSibling) {
    document.querySelector("#textContainer").nextSibling.remove();
  }
};

const setupTheHeader = function (navBar, clickedTab) {
  const oldActiveTab = document.querySelectorAll(".active");
  oldActiveTab.forEach((tab) => {
    tab.removeAttribute("class");
  });
  const newActiveTab = document.querySelector(`#${clickedTab.target.id}`);
  newActiveTab.setAttribute("class", "active");
  navBar.setAttribute("class", "tabPage");
};

export { clearPage, setupTheHeader };
