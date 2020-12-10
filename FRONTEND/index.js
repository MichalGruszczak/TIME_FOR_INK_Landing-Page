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

////////// ********** GALLERY START ********** //////////

const paintings = [
  {
    id: "3",
    title: "third third",
    description: "third third 240x320 canvas",
    mainImg: "./img/Paintings/Example_3/1.jpg",
    img2: "./img/Paintings/Example_3/2.jpg",
    img3: "./img/Paintings/Example_3/3.jpg",
    img4: "./img/Paintings/Example_3/4.jpg",
    img5: "./img/Paintings/Example_3/5.jpg",
  },
  {
    id: "2",
    title: "second second",
    description: "second second 240x320 canvas",
    mainImg: "./img/Paintings/Example_2/1.jpg",
    img2: "./img/Paintings/Example_2/2.jpg",
    img3: "./img/Paintings/Example_2/3.jpg",
    img4: "./img/Paintings/Example_2/4.jpg",
    img5: "./img/Paintings/Example_2/5.jpg",
  },
  {
    id: "1",
    title: "first first",
    description: "first first 240x320 canvas",
    mainImg: "./img/Paintings/Example_1/1.jpg",
    img2: "./img/Paintings/Example_1/2.jpg",
    img3: "./img/Paintings/Example_1/3.jpg",
    img4: "./img/Paintings/Example_1/4.jpg",
    img5: "./img/Paintings/Example_1/5.jpg",
  },
];

paintings.map((item) => {
  let galleryItem = document.createElement(`div`);
  galleryItem.classList.add("gallery__item");
  galleryItem.innerHTML = `
<div class="gallery__item-img">
<div class="gallery__item-img-container">
   <a href=${item.mainImg} data-lightbox=${item.id}> <img class='gallery__img' src=${item.mainImg} alt="">
   </a>
</div>
</div>
<div class="gallery__item-title"><h2>${item.title}</h2></div>
<div class="gallery__item-description"><span>${item.description}</span></div>
<a href=${item.img2} data-lightbox=${item.id}></a>
<a href=${item.img3} data-lightbox=${item.id}></a>
<a href=${item.img4} data-lightbox=${item.id}></a>
<a href=${item.img5} data-lightbox=${item.id}></a>`;

  gallerySection.appendChild(galleryItem);
});

////////// ********** GALLERY END ********** //////////

////////// ********** HOME START ********** //////////

const homeTitle = document.querySelector(".home__title");
const homeSubtitle = document.querySelector(".home__subtitle");
const homeDescription = document.querySelector(".home__description");
const homeFacebook = document.querySelector(".home__facebook");
const homeInstagram = document.querySelector(".home__instagram");

window.addEventListener("load", () => {
  homeTitle.classList.add("loaded");
  setTimeout(() => {
    homeSubtitle.classList.add("loaded");
  }, 1000);
  setTimeout(() => {
    homeDescription.classList.add("loaded");
  }, 2000);
  setTimeout(() => {
    homeFacebook.classList.add("loaded");
    homeInstagram.classList.add("loaded");
  }, 3000);
});

////////// ********** HOME END ********** //////////

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
  if (scrollSize > 100) {
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

////////// ********** ABOUT ME START ********** //////////

const about1 = document.querySelector("#about1");
const about2 = document.querySelector("#about2");
const about3 = document.querySelector("#about3");

document.addEventListener("scroll", () => {
  const scrollSize = window.pageYOffset;
  const aboutOffset = aboutSection.offsetTop;

  if (scrollSize + window.innerHeight * 0.3 > aboutOffset) {
    about1.classList.add("loaded");
    setTimeout(() => {
      about2.classList.add("loaded");
    }, 600);
    setTimeout(() => {
      about3.classList.add("loaded");
    }, 1200);
  }
});

////////// ********** ABOUT ME END ********** //////////
