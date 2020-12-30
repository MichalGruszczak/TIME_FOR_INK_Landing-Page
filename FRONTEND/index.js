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

const loader = document.querySelector(".loading");

////////// ********** GALLERY START ********** //////////

const paintings = [
  {
    id: "3",
    title: "third third",
    description: "third third 240x320 canvas",
    mainImg: "./FRONTEND/img/Paintings/Example_3/1.jpg",
    img2: "./FRONTEND/img/Paintings/Example_3/2.jpg",
    img3: "./FRONTEND/img/Paintings/Example_3/3.jpg",
    img4: "./FRONTEND/img/Paintings/Example_3/4.jpg",
    img5: "./FRONTEND/img/Paintings/Example_3/5.jpg",
  },
  {
    id: "2",
    title: "second second",
    description: "second second 240x320 canvas",
    mainImg: "./FRONTEND/img/Paintings/Example_2/1.jpg",
    img2: "./FRONTEND/img/Paintings/Example_2/2.jpg",
    img3: "./FRONTEND/img/Paintings/Example_2/3.jpg",
    img4: "./FRONTEND/img/Paintings/Example_2/4.jpg",
    img5: "./FRONTEND/img/Paintings/Example_2/5.jpg",
  },
  {
    id: "1",
    title: "first first",
    description: "first first 240x320 canvas",
    mainImg: "./FRONTEND/img/Paintings/Example_1/1.jpg",
    img2: "./FRONTEND/img/Paintings/Example_1/2.jpg",
    img3: "./FRONTEND/img/Paintings/Example_1/3.jpg",
    img4: "./FRONTEND/img/Paintings/Example_1/4.jpg",
    img5: "./FRONTEND/img/Paintings/Example_1/5.jpg",
  },
];

paintings.map((item) => {
  let galleryItem = document.createElement(`div`);
  galleryItem.classList.add("gallery__card");
  galleryItem.innerHTML = `
<div class="gallery__picture">
  <a class='gallery__a' href=${item.mainImg} data-lightbox=${item.id}>
      <img class="gallery__img" src="${item.mainImg}" alt=""/>
  </a>
</div>
<div class="gallery__more">
  <button class="gallery__more-btn">
  <a class='gallery__a-btn' href=${item.mainImg} data-lightbox=${item.id}>Więcej</a>
  </button>
</div>
<h3 class="gallery__title">${item.title}</h3>
<span class='gallery__description'>${item.description}</span>
<a class='gallery__a-hidden' href=${item.img2} data-lightbox=${item.id}></a>
<a class='gallery__a-hidden' href=${item.img3} data-lightbox=${item.id}></a>
<a class='gallery__a-hidden' href=${item.img4} data-lightbox=${item.id}></a>
<a class='gallery__a-hidden' href=${item.img5} data-lightbox=${item.id}></a>`;

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
  loader.classList.add("loaded");
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

const contactPhoto = document.querySelector(".contact__img");
const contactPhotoText = document.querySelector(".contact__img-text");
const contactMail = document.querySelector(".contact__element-container.mail");
const contactPhone = document.querySelector(".contact__element-container.phone");
const contactFacebook = document.querySelector(".contact__element-container.facebook");
const contactInstagram = document.querySelector(".contact__element-container.instagram");

document.addEventListener("scroll", () => {
  const scrollSize = window.pageYOffset;
  const contactOffset = contactSection.offsetTop;

  if (scrollSize + window.innerHeight * 0.3 > contactOffset) {
    contactPhotoText.classList.add("loaded");
    setTimeout(() => contactMail.classList.add("loaded"), 500);
    setTimeout(() => contactPhone.classList.add("loaded"), 1000);
    setTimeout(() => contactFacebook.classList.add("loaded"), 1500);
    setTimeout(() => contactInstagram.classList.add("loaded"), 2000);
    setTimeout(() => contactPhoto.classList.add("loaded"), 2500);
  }
});

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
  contactFormContainer.innerHTML =
    "<div class='lds-ring'><div></div><div></div><div></div><div></div></div>";
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "michal.gruszczak94@gmail.com",
    Password: "0BA4FA07DD1BE12E821456733E474837C7EF",
    To: "michal.gruszczak94@gmail.com",
    From: `michal.gruszczak94@gmail.com`,
    Subject: `${titleValue}`,
    // Email body
    Body: (document.innerHTML = `
      <h3 class='email__title'>Tytuł: </h3>
      <span class="email__value">${titleValue}</span>
      <h3 class='email__title'>Nadawca: </h3>
      <span class="email__value">${emailValue}</span>
      <h3 class='email__title'>Treść: </h3>
      <span class="email__value">${textValue}</span>
    `),
  }).then((message) => {
    console.log(message);
    contactFormContainer.innerHTML = "<h2>Wiadomość wysłana</h2>";
  });
};

// MAIN FUNCTION - VALIDATION AND SEND MESSAGE
contactFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!emailValue.length) {
    contactEmailError.innerHTML = "<p>Pole nie może pozostać puste.</p>";
  } else if (![...emailValue].includes("@")) {
    contactEmailError.innerHTML = "<p>Niepoprawny adres email</p>";
  }
  if (!titleValue.length) {
    contactTitleError.innerHTML = "<p>Pole nie może pozostać puste.</p>";
  }
  if (!textValue.length) {
    contactTextError.innerHTML = "<p>Pole nie może pozostać puste.</p>";
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
