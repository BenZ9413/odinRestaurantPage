import clearPage from "./clearPage";

const contentNode = document.querySelector("#content");
const labelNames = ["Name", "Mail", "Your Message"];
const placeholderTexts = [
  "Enter your Name",
  "Enter your Mail",
  "Write your Message",
];
const inputTypes = ["text", "email", "textarea"];
const attributes = ["name", "type", "placeholder"];
const nameAttributes = ["contactName", "contactMail", "contactText"];

const createContactTab = function () {
  contentNode.setAttribute("class", "tabPage");
  const contactForm = document.createElement("form");
  contactForm.setAttribute("id", "contactForm");

  const contactGreeting = document.createElement("p");
  contactGreeting.setAttribute("id", "contactGreeting");
  contactGreeting.textContent =
    "We want you to have the best experience at our restaurant. To make a reservation or if you have any questions, feel free to reach out to us!";
  contactForm.appendChild(contactGreeting);

  for (let i = 0; i < labelNames.length; i++) {
    let wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");
    let label = document.createElement("label");
    label.setAttribute(attributes[0], nameAttributes[i]);
    label.textContent = labelNames[i];
    let input = document.createElement("input");
    input.setAttribute(attributes[0], nameAttributes[i]);
    input.setAttribute(attributes[1], inputTypes[i]);
    input.setAttribute(attributes[2], placeholderTexts[i]);

    wrapper.appendChild(label);
    wrapper.appendChild(input);

    contactForm.appendChild(wrapper);
  }

  const btnSubmitContactForm = document.createElement("button");
  btnSubmitContactForm.setAttribute("id", "btnSubmitContactForm");
  btnSubmitContactForm.textContent = "Submit";
  btnSubmitContactForm.onclick = submitContactForm;
  contactForm.appendChild(btnSubmitContactForm);

  contentNode.appendChild(contactForm);
};

const submitContactForm = function () {
  alert(
    "Thanks for reaching out to us. We'll get back to you as soon as possible!"
  );
  const contactForm = document.querySelector("#contactForm");
  contactForm.reset();
};

export default createContactTab;
