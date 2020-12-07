const header = document.querySelector("header");
const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("about");
const galleryBtn = document.getElementById("gallery");
const contactBtn = document.getElementById("contact");
//
const homeSection = document.querySelector("section.home");
const aboutSection = document.querySelector("section.about");
const gallerySection = document.querySelector("section.gallery");
const contactSection = document.querySelector("section.contact");
//
const contactFormContainer = document.querySelector(".contact__form-container");
const contactFormBtn = document.querySelector(".contact__form-btn");
const contactEmail = document.getElementById("contact__email");
const contactTitle = document.getElementById("contact__title");
const contactText = document.getElementById("contact__text");
let contactEmailError = document.getElementById("contact__email-error");
let contactTitleError = document.getElementById("contact__title-error");
let contactTextError = document.getElementById("contact__text-error");

////////// ********** CONTACT START ********** //////////

let emailValue = "";
let titleValue = "";
let textValue = "";

// INPUT CHANGE VALUE

contactEmail.addEventListener("input", () => {
  emailValue = contactEmail.value;
});
contactTitle.addEventListener("input", () => {
  titleValue = contactTitle.value;
});
contactText.addEventListener("input", () => {
  textValue = contactText.value;
});

// RESET ERRORS
contactEmail.addEventListener("focus", () => {
  contactEmailError.textContent = "";
});

contactTitle.addEventListener("focus", () => {
  contactTitleError.textContent = "";
});

contactText.addEventListener("focus", () => {
  contactTextError.textContent = "";
});

// SEND MESSAGE FUNCTIONS

const sendEmail = () => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "michal.gruszczak94@gmail.com",
    Password: "0BA4FA07DD1BE12E821456733E474837C7EF",
    To: "michal.gruszczak94@gmail.com",
    From: `michal.gruszczak94@gmail.com`,
    Subject: `${titleValue}`,
    Body: `${textValue}`,
  }).then((message) => {
    console.log(message);
    contactFormContainer.innerHTML = "<h2>Wiadomość wysłana</h2>";
  });
};

// MAIN FUNCTION - VALIDATION AND SEND MESSAGE
contactFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!emailValue.length) {
    contactEmailError.textContent = "Pole nie może pozostać puste.";
  } else if (![...emailValue].includes("@")) {
    contactEmailError.textContent = "Niepoprawny adres email";
  }
  if (!titleValue.length) {
    contactTitleError.textContent = "Pole nie może pozostać puste.";
  }
  if (!textValue.length) {
    contactTextError.textContent = "Pole nie może pozostać puste.";
  }

  if (
    emailValue &&
    titleValue &&
    textValue &&
    !contactEmailError.textContent &&
    !contactTitleError.textContent &&
    !contactTextError.textContent
  ) {
    console.log("Message sent!");
    sendEmail();
  }
});

////////// ********** CONTACT END ********** //////////

////////// ********** HEADER START ********** //////////

// SHOW SCROLL SIZE FROM TOP
document.addEventListener("scroll", () => {
  const scrollSize = window.pageYOffset;
  // console.log(scrollSize);
  if (scrollSize > 250) {
    header.classList.add("nontransparent");
  } else header.classList.remove("nontransparent");
});

// SCROLL TO SECTIONS
homeBtn.addEventListener("click", () => {
  const homeOffset = homeSection.offsetTop;
  window.scrollTo(0, homeOffset);
});

aboutBtn.addEventListener("click", () => {
  const aboutOffset = aboutSection.offsetTop;
  window.scrollTo(0, aboutOffset);
});

galleryBtn.addEventListener("click", () => {
  const galleryOffset = gallerySection.offsetTop;
  window.scrollTo(0, galleryOffset);
});

contactBtn.addEventListener("click", () => {
  const contactOffset = contactSection.offsetTop;
  window.scrollTo(0, contactOffset);
});

////////// ********** HEADER END ********** //////////
