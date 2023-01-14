const constructLandingpage = function () {
  const parentNode = document.querySelector("#content");
  let childNode = document.createElement("div");
  childNode.textContent = "It's wired up correctly!";
  parentNode.appendChild(childNode);
};

export default constructLandingpage;
